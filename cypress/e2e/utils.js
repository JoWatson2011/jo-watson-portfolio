exports.mockResponseStatusCode = (statusCode) =>
  cy
    .intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', { statusCode })
    .as("submit")
exports.clickSubmitButton = () => cy.get('form button').click()
