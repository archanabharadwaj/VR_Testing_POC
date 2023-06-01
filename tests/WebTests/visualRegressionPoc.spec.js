const { test, expect } = require('@playwright/test');
const { visualRegPoc } = require('../../pageObject/webPageObject/visualRegressionPoc')

test('Visual_Testing @web', async ({ page },testInfo) => {
  const visualTesting = new visualRegPoc(page);

 //await visualTesting.navigateToHomePage()
//   await visualTesting.visualRegression()
await visualTesting.startVisualTest(testInfo);
  
})

