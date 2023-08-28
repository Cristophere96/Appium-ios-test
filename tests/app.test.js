
describe('iOS App Test', () => {
  after(async () => {
    const settingsTab = await driver.$('~settingsTab');
    await settingsTab.click()

    const logoutButton = await driver.$('~logOutButton');
    await logoutButton.click()
  });

  it('should click the "Log in" button', async () => {
    const logInButtonText = 'Log in';
    const logInButton = $(`~${logInButtonText}`);
    logInButton.click();

    const cancelBiometricButton = await driver.$(`~Cancelar`)
    await cancelBiometricButton.click()

    const emailInput = $(`~Email`);
    const passwordInput = $(`~Password`);

    // Wait for the input fields to be displayed before typing
    await emailInput.waitForDisplayed();
    await passwordInput.waitForDisplayed();

    // Type the email and password into the input fields
    await emailInput.setValue('mojojo1@employee.com');
    await passwordInput.setValue('Welcome123!');

    const secondLoginButton = $('~logInButton');
    await secondLoginButton.click();

    const homeHeader = await $('~Hi, Jojo!');
    await homeHeader.waitForDisplayed();
  });
});