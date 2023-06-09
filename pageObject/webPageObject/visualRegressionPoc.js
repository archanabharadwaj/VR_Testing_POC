const { expect,test } = require("@playwright/test")
const  visualRegressionData  =    require('../../data/VisualRegressionData.json');

exports.visualRegPoc = class visualRegPoc {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        
    }

    async startVisualTest(data){
            await this.page.goto(data.Url);
            let maskArray = data.maskDetails.map((el)=>{
            return eval(el);
            })
            if(data.clickSequence.length){
            let clickSequence = data.clickSequence;
            for (let clickIndex = 0; clickIndex < clickSequence.length; clickIndex++) {
                   await eval(clickSequence[clickIndex].clickLocator).click();
                   if(clickSequence[clickIndex].waitPostClick !=0){
                    await this.page.waitForTimeout(clickSequence[clickIndex].waitPostClick)
                }       
             } 
            }
            if(data.delay !=0){
            await this.page.waitForTimeout(data.delay);
            }
            await expect(this.page).toHaveScreenshot({
            mask: maskArray
            //fullPage: true
            });   
    }
}
