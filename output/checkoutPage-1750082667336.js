const {
  I
} = inject();

module.exports = {

  // Locator Definitions
  // Locators are defined in order of preference: by text, by label (via associated input ID), by CSS (ID, then semantic attributes).
  // TailwindCSS, Bootstrap, or React style formatting classes are avoided.

  // Headings & Titles
  checkoutFormHeading: locate('h2').withText('Checkout form'),

  // Promo Code Form
  promoCodeInput: 'input[placeholder="Promo code"]', // CSS selector using a semantic placeholder
  redeemButton: locate('button').withText('Redeem'),

  // Shipping Address Form Fields (primarily using IDs which are linked by labels)
  firstNameField: '#firstName',
  lastNameField: '#lastName',
  usernameField: '#username',
  emailField: '#email',
  addressField: '#address',
  address2Field: '#address2',
  countrySelect: '#country', // Select element
  stateSelect: '#state', // Select element
  zipField: '#zip',

  // Checkboxes
  sameAddressCheckbox: '#same-address',
  sameAddressLabel: locate('label').withText('Shipping address is the same as my billing address'), // For clicking the label
  saveInfoCheckbox: '#save-info',
  saveInfoLabel: locate('label').withText('Save this information for next time'), // For clicking the label

  // Payment Method Radios (locating by ID, with labels for easy clicking)
  creditCardRadio: '#credit',
  creditCardLabel: locate('label').withText('Credit card'),
  debitCardRadio: '#debit',
  debitCardLabel: locate('label').withText('Debit card'),
  payPalRadio: '#paypal',
  payPalLabel: locate('label').withText('PayPal'),

  // Payment Card Details Fields
  nameOnCardField: '#cc-name',
  creditCardNumberField: '#cc-number',
  expirationField: '#cc-expiration',
  cvvField: '#cc-cvv',

  // Final Button
  continueToCheckoutButton: locate('button').withText('Continue to checkout'),

  // Footer Links
  privacyLink: locate('a').withText('Privacy'),
  termsLink: locate('a').withText('Terms'),
  supportLink: locate('a').withText('Support'),

  // Methods to interact with the page

  /**
   * Fills out the shipping address form fields.
   * @param {object} data - An object containing shipping address details.
   * @param {string} data.firstName - First name.
   * @param {string} data.lastName - Last name.
   * @param {string} data.username - Username.
   * @param {string} data.email - Email address.
   * @param {string} data.address - Address line 1.
   * @param {string} data.address2 - Address line 2 (optional).
   * @param {string} data.country - Country (e.g., "United States").
   * @param {string} data.state - State (e.g., "California").
   * @param {string} data.zip - Zip code.
   */
  async fillShippingAddress(data) {
    I.fillField(this.firstNameField, data.firstName);
    I.fillField(this.lastNameField, data.lastName);
    I.fillField(this.usernameField, data.username);
    I.fillField(this.emailField, data.email);
    I.fillField(this.addressField, data.address);
    if (data.address2) {
      I.fillField(this.address2Field, data.address2);
    }
    // For select fields, provide the visible text option
    I.selectOption(this.countrySelect, data.country);
    I.selectOption(this.stateSelect, data.state);
    I.fillField(this.zipField, data.zip);
  },

  /**
   * Toggles the "Shipping address is the same as my billing address" checkbox.
   * This method clicks the associated label for better usability.
   */
  async toggleSameAddressCheckbox() {
    I.click(this.sameAddressLabel);
  },

  /**
   * Toggles the "Save this information for next time" checkbox.
   * This method clicks the associated label for better usability.
   */
  async toggleSaveInfoCheckbox() {
    I.click(this.saveInfoLabel);
  },

  /**
   * Selects a payment method by clicking its associated label.
   * @param {'Credit card' | 'Debit card' | 'PayPal'} method - The desired payment method.
   */
  async selectPaymentMethod(method) {
    I.click(locate('label').withText(method));
  },

  /**
   * Fills out the payment card details.
   * @param {object} data - An object containing payment card details.
   * @param {string} data.nameOnCard - Name on the card.
   * @param {string} data.creditCardNumber - Credit card number.
   * @param {string} data.expiration - Expiration date (MM/YY).
   * @param {string} data.cvv - CVV.
   */
  async fillPaymentDetails(data) {
    I.fillField(this.nameOnCardField, data.nameOnCard);
    I.fillField(this.creditCardNumberField, data.creditCardNumber);
    I.fillField(this.expirationField, data.expiration);
    I.fillField(this.cvvField, data.cvv);
  },

  /**
   * Applies a promo code.
   * @param {string} code - The promo code to apply.
   */
  async applyPromoCode(code) {
    I.fillField(this.promoCodeInput, code);
    I.click(this.redeemButton);
  },

  /**
   * Clicks the 'Continue to checkout' button to proceed.
   */
  async continueToCheckout() {
    I.click(this.continueToCheckoutButton);
  },

  /**
   * Clicks the 'Privacy' link in the footer.
   */
  async clickPrivacyLink() {
    I.click(this.privacyLink);
  },

  /**
   * Clicks the 'Terms' link in the footer.
   */
  async clickTermsLink() {
    I.click(this.termsLink);
  },

  /**
   * Clicks the 'Support' link in the footer.
   */
  async clickSupportLink() {
    I.click(this.supportLink);
  },
};