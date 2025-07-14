// file: codecept.conf.js

require('dotenv').config(); // Load biến môi trường từ .env nếu chạy local
process.env.CI = 'true'; // Đảm bảo CI được set trong môi trường

exports.config = {
  // ✅ quét mọi test trong thư mục hiện tại và con
  tests: '**/*_test.js',
  output: './output',

  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://getbootstrap.com/docs/5.2/examples/checkout/',
      show: false,
      headless: true
    },
    AIHelper: {
      require: './ai_helper.js'
    }
  },

  include: {
    I: './steps_file.js'
  },

  plugins: {
    heal: {
      enabled: true,
      healElements: true,
      healSteps: true,
      reportHealed: true
    },
    ai: {
      enabled: false // Tắt plugin AI mặc định nếu dùng helper riêng
    }
  },

  name: 'codecept3'
};
