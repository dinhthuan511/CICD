// ai_helper.js
const Helper = require('@codeceptjs/helper');
const Groq = require('groq-sdk');

class AIHelper extends Helper {
  async _sendRequest(messages) {
    const client = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const chatCompletion = await client.chat.completions.create({
      messages,
      model: 'mistral-saba-24b',
    });

    return chatCompletion.choices[0]?.message?.content || '';
  }

  async makeAiRequest(messages) {
    return await this._sendRequest(messages);
  }
}

module.exports = AIHelper;
