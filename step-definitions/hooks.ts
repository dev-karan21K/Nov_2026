import { Before, After,Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

export let browser:Browser;
export let context:BrowserContext;
export let page:Page;

//Before -> Browser configuration
Before(async function(){
    browser = await chromium.launch({
        headless:false
    })
    context = await browser.newContext();
    page = await context.newPage();

})

//After - failed testcases captured ,, screenshot captured browser close 
After(async function(scenario){
    if(scenario.result?.status===Status.FAILED){
        const screenshot = await page.screenshot({
            fullPage:true
        })
        await this.attach(
            screenshot,"image/png"
        );
    }
    await context?.close();
    await browser?.close();
})