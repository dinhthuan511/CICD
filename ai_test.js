Feature('ai: test ai features');

Scenario('Should return response from Groq', async ({ AIHelper, I }) => {
  const response = await AIHelper.ask('Say hello in French');
  console.log('🔍 AI says:', response);
  I.say(response);
});
