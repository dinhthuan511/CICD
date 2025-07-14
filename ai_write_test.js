Feature('ai');

Scenario.only('test ai features', async ({ I }) => {
  await I.amOnPage('https://getbootstrap.com/docs/5.2/examples/checkout/');
  pause(); // dùng để debug
});
