exports.config = {
  runner: "local",
  specs: ["./tests/*.js"],
  capabilities: [
    {
      platformName: "iOS",
      "appium:platformVersion": "16.4", // Add 'appium:' prefix to platformVersion
      "appium:deviceName": "iPhone SE (3rd generation)", // Add 'appium:' prefix to deviceName
      "appium:automationName": "XCUITest", // Add 'appium:' prefix to automationName
      app: undefined, // We won't use the 'app' capability when using bundle id
      // 'appium:udid': 'b82ed5f0a2ffa41d6c35681dbf40f5073c151239', // Replace with the UDID of your physical device
      "appium:bundleId": "com.cebroker.EvercheckWalletDev", // Add 'appium:' prefix to bundleId
      // 'appium:xcodeOrgId': 'XRFNDLT6FX',
      maxInstances: 1,
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [["appium", {}]],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
