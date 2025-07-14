Feature('Checkout Form Submission');

Scenario('Fill out the complete checkout form', async ({ I }) => {
  I.amOnPage('https://getbootstrap.com/docs/5.2/examples/checkout/');

  I.say('Starting to fill out the checkout form...');

  // --- Personal and Address Details ---
  I.fillField('#firstName', 'Jane');
  I.fillField('#lastName', 'Doe');
  I.fillField('#username', 'janedoe_tester');
  I.fillField('#email', 'jane.doe@example.com');
  I.fillField('#address', '456 Oak Avenue');
  I.fillField('#address2', 'Unit 10'); // Optional field

  I.selectOption('#country', 'United States');
  I.selectOption('#state', 'California');
  I.fillField('#zip', '90210');

  // --- Checkboxes ---
  I.checkOption('#same-address');
  I.checkOption('#save-info');

  // --- Payment Method ---
  I.checkOption('#credit');

  // --- Credit Card Details ---
  I.fillField('#cc-name', 'Jane Doe');
  I.fillField('#cc-number', '4111222233334444');
  I.fillField('#cc-expiration', '12/26');
  I.fillField('#cc-cvv', '789');

  // --- Submit the Form ---
  I.click('Continue to checkout');
  I.say('Form submission initiated.');
});
