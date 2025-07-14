Feature('ai: test ai features');

Scenario('Gọi AI để sinh mã HTML', async ({ I }) => {
  const messages = [
    { role: 'user', content: 'Tạo form đăng ký gồm tên, email, và nút submit' }
  ];
  const response = await I.makeAiRequest(messages);
  console.log('=== AI RESPONSE ===');
  console.log(response);
});
