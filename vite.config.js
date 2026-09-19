import { defineConfig } from 'vite';
import { GoogleGenAI } from '@google/genai';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  plugins: [
    {
      name: 'gemini-api-server',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith('/api/ai/')) {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const apiKey = process.env.GEMINI_API_KEY;
                  const prompt = data.prompt || '';
                  const systemInstruction = data.systemInstruction || 'あなたはForcordの高精度AIアシスタントです。通話内容やチャットを的確・親切・構造的に整理・要約・回答してください。マークダウン形式で見やすく整理してください。';

                  if (apiKey) {
                    const ai = new GoogleGenAI({});
                    const response = await ai.models.generateContent({
                      model: 'gemini-2.5-flash',
                      contents: prompt,
                      config: {
                        systemInstruction: systemInstruction
                      }
                    });
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ text: response.text }));
                    return;
                  }

                  // Simulated AI response when API key is not yet set in environment
                  const url = req.url;
                  let replyText = "";
                  if (url.includes('summarize')) {
                    replyText = `### 📋 通話議事録・要約レポート (Gemini AI)\n\n**【会議・通話の概要】**\nメンバー間でのボイスチャットおよびYouTube同期再生・メディア共有についての状況確認・雑談が実施されました。\n\n**【主要なトピックとハイライト】**\n- 🔊 **音声通話の品質確認**: ノイズカットおよび明瞭な音声伝送を体験。\n- 🎬 **YouTube同期再生**: VC内でのリアルタイム同時視聴の検証。\n- 💬 **メッセージングとメディア添付**: 写真や動画の高速送信テスト。\n- ⭐ **ワードトリガー機能**: 「nice」「yes」等の声に反応する演出の確認。\n\n**【決定事項 / 今後のTODO】**\n1. 次回通話でもYouTube動画の共有を試す。\n2. お気に入りのカスタムトリガー効果音を追加する。\n\n*(※ .envのGEMINI_API_KEYを設定するとリアルタイムGemini 2.5 Flashで完全自動生成されます)*`;
                  } else {
                    replyText = `Forcord AIアシスタントです！「${prompt.slice(0, 30)}...」について回答します。\n\n通話やチャットの議事録作成、メッセージの要約・校正、質問への回答など何でもお任せください。(※GEMINI_API_KEYを設定するとGemini 2.5 Flashが直接回答します)`;
                  }

                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ text: replyText }));
                } catch (err) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message }));
                }
              });
              return;
            }
          }
          next();
        });
      }
    }
  ]
});
