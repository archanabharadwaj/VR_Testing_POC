const { test, expect } = require('@playwright/test');
const { visualRegPoc } = require('../../pageObject/webPageObject/visualRegressionPoc')
const  visualRegressionData  =    require('../../data/VisualRegressionData.json');

test.describe('Visual_Testing @web', () => {
  let page
  test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  });
  let data = visualRegressionData.data;
  for (let index = 0; index < data.length; index++) {
    test(data[index].info, async ({page}) => {
    const visualTesting = new visualRegPoc(page);
    console.log(data[index])
    await visualTesting.startVisualTest(data[index]);
    });
  }
  });
