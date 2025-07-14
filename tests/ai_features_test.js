Feature('AI Features');

Scenario('ai: test ai features - verify page title', async ({ I }) => {
  I.amOnPage('https://example.com');
  I.see('Example Domain');
});
