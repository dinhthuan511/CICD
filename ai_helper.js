// file: ai_helper.js

const { helper } = require('codeceptjs');
const Groq = require('groq-sdk');

class AIHelper extends helper {
  constructor(config) {
    super(config);
    this.client = new Groq({ apiKey: process.env.GROQ_API_KEY });

    if (!process.env.GROQ_API_KEY) {
      throw new Error('⚠️ GROQ_API_KEY is missing. Please set it in environment variables.');
    }
  }

  /**
   * Gửi prompt tới mô hình AI Groq
   * @param {string} prompt - Nội dung yêu cầu
   * @returns {Promise<string>} - Nội dung phản hồi từ mô hình
   */
  async ask(prompt) {
    try {
      const response = await this.client.chat.completions.create({
        model: 'mistral-saba-24b',
        messages: [{ role: 'user', content: prompt }],
      });

      return response.choices[0]?.message?.content || '[No response]';
    } catch (err) {
      console.error('❌ Error when sending to Groq:', err);
      throw err;
    }
  }
}

module.exports = AIHelper;
