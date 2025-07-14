const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// 🧠 Tự động bật headless nếu biến môi trường HEADLESS=true (dành cho CI/CD)
setHeadlessWhen(process.env.HEADLESS);

// Bật các plugin chung của CodeceptJS (như retry, step-by-step report, screenshot on fail,...)
setCommonPlugins();

// Tải biến môi trường từ .env nếu có
require('dotenv').config();
require('./heal');

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://getbootstrap.com/docs/5.2/examples/checkout/',
      show: false,        // ❗ BẮT BUỘC phải false để dùng headless khi CI
      headless: true      // ❗ Đảm bảo không crash trong môi trường GitHub Actions
    },
    AI: {}
  },
  include: {
    I: './steps_file.js'
  },

  // Cấu hình AI: dùng Groq (Mistral)
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
    // Tạm thời comment out allure plugin
    // allure: {
    //   enabled: true,
    //   require: 'allure-codeceptjs'
    // }
  },

  name: 'codecept3'
};