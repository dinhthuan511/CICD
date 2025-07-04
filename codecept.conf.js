const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */

require('dotenv').config()
require('./heal')

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://getbootstrap.com/docs/5.2/examples/checkout/',
      show: true,
      headless: false
    },
    AI: {}
  },
  include: {
    I: './steps_file.js'
  },
  // ai: {
  //   request: async messages => {
  //     const { GoogleGenerativeAI } = require('@google/generative-ai')
      
  //     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  //     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-05-20" })
      
  //     // Convert CodeceptJS message format to simple prompt
  //     const prompt = messages.map(msg => msg.content).join('\n\n')
      
  //     try {
  //       const result = await model.generateContent(prompt)
  //       const response = await result.response
  //       return response.text()
  //     } catch (error) {
  //       console.error('Gemini API error:', error)
  //       throw error
  //     }
  //   }
  // },
  ai: {
    request: async messages => {
      const Groq = require('groq-sdk')

      const client = new Groq({
        apiKey: process.env.GROQ_API_KEY, // This is the default and can be omitted
      })

      const chatCompletion = await client.chat.completions.create({
        messages,
        model: 'mistral-saba-24b',
      })
      return chatCompletion.choices[0]?.message?.content || ''
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
}