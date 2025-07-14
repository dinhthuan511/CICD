Feature('ai');

Scenario('Test nhập form bằng AI', async ({ I }) => {
  await I.amOnPage('https://getbootstrap.com/docs/5.2/examples/checkout/');
  const aiHelper = codeceptjs.container.helpers('AIHelper');
  const prompt = 'Điền thông tin vào form với tên là John Doe và email john@example.com';
  const response = await aiHelper.ask(prompt);
  I.say('AI response: ' + response);
});
