describe("iOS App Test", () => {
  after(async () => {
    const settingsTab = await driver.$("~settingsTab");
    await settingsTab.click();

    const logoutButton = await driver.$("~logOutButton");
    await logoutButton.click();
  });

  it("Log in using touch id", async () => {
    const logInButtonText = "Log in";
    const logInButton = await driver.$(`~${logInButtonText}`);
    await logInButton.click();

    await driver.touchId(true);

    const homeHeader = await driver.$("~Hi, Jojo!");
    await homeHeader.waitForDisplayed();
  });
});
