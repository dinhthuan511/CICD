const { helper } = require('codeceptjs');
const Groq = require('groq-sdk');

class AIHelper extends helper {
  async _before() {
    this.client = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }

  async ask(prompt) {
    const completion = await this.client.chat.completions.create({
      model: 'mistral-saba-24b',
      messages: [{ role: 'user', content: prompt }],
    });
    return completion.choices[0]?.message?.content || '';
  }
}

module.exports = AIHelper;
