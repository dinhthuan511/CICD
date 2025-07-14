const { I } = inject();
const container = require('codeceptjs').container;

Feature('ai: test ai features');

Scenario('Should return response from Groq', async () => {
  const aiHelper = container.helpers('AIHelper');
  const response = await aiHelper.ask('Say hello in French');
  console.log('🔍 AI says:', response);
});
