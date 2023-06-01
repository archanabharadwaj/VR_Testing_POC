const { expect,test } = require("@playwright/test")
//require('dotenv').config()
const  visualRegressionData  =    require('../../data/VisualRegressionData.json');

exports.visualRegPoc = class visualRegPoc {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        // this.googleAd1 = page.locator('#RWG_Top_Banner_Desktop_970px');
        // this.image1 = page.locator('#loading_result')
    }

    // async navigateToHomePage() {
    //     await this.page.goto(process.env.visualRegressionUrl1);
    // }

    async startVisualTest(testInfo){
        let data = visualRegressionData.data;
        for (let index = 0; index < data.length; index++) {
            await this.page.goto(data[index].Url);
           let maskArray = data[index].maskDetails.map((el)=>{
                return eval(el);
            })
            testInfo.snapshotSuffix = data[index].info;
            if(data[index].delay !=0){
                await this.page.waitForTimeout(data[index].delay);
            }
            await expect(this.page).toHaveScreenshot({
                mask: maskArray
                //fullPage: true
            });
        }
    }

    // async startVisualTest(){
    //     expect(await this.page.screenshot())
    // }
}
