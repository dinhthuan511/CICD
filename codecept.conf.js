exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://getbootstrap.com/docs/5.2/examples/checkout/',
      show: false,
      headless: true
    },
    AI: {}
  },
  include: {
    I: './steps_file.js'
  },

  // ✅ Tự động tắt chế độ interactive khi chạy trong CI/CD
  interactive: process.env.CI !== 'true',

  ai: {
    request: async messages => {
      const Groq = require('groq-sdk');
      const client = new Groq({
        apiKey: process.env.GROQ_API_KEY,
      });
      const chatCompletion = await client.chat.completions.create({
        messages,
        model: 'mistral-saba-24b',
      });
      return chatCompletion.choices[0]?.message?.content || '';
    }
  },

  plugins: {
    heal: {
      enabled: true,
      healElements: true,
      healSteps: true,
      reportHealed: true
    }
  },

  name: 'codecept3'
};
