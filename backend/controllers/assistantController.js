const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function askAssistant(req, res) {
  const { prompt } = req.body;
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }]
  });
  res.json({ reply: response.choices[0].message.content });
}

module.exports = { askAssistant };