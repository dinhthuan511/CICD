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
      enabled: false // ⛔ Tắt plugin AI mặc định của CodeceptJS
    }
  },
  name: 'codecept3'
};
