/* globals gauge*/
const { 
    openBrowser, write, click, link, closeBrowser, goto, press, screenshot, text, focus, textBox, color, evaluate, exists, button, waitFor
}               = require('taiko');
var fs          = require('fs');
const assert    = require("assert");
const headless  = process.env.headless_chrome.toLowerCase() === 'true';
eval(fs.readFileSync('./tests/base_helper.js')+'');
//------------------------------------------------------------------------------------
//CLICK FUNCTION
//------------------------------------------------------------------------------------
step("Click Configuration thumbnail module", async () => {
    await waitFor(3000);
    await click(await link({"aria-label" : "link to NAVIGATION.CONFIGURATION_SETTINGS"}));
    await waitFor(5000);
});
step("Click KMS Home on the breadcrumbs", async () => {
    await click("KMS Home");
});
//------------------------------------------------------------------------------------
//EXPECTED RESULT FUNCTION
//------------------------------------------------------------------------------------
step("Expected: the breadcrumbs on the top of page will show current user position on the platform", async () => {
    assert.ok(await text(baseHelper.getValue("Reference Data")).exists());
});