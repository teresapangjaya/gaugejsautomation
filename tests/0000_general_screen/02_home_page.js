/* globals gauge*/
const { 
    openBrowser, write, click, link, closeBrowser, goto, press, screenshot, text, focus, textBox, color, evaluate, exists, button, waitFor
}               = require('taiko');
var fs          = require('fs');
const assert    = require("assert");
const headless  = process.env.headless_chrome.toLowerCase() === 'true';
eval(fs.readFileSync('./tests/base_helper.js')+'');
//------------------------------------------------------------------------------------
//EXPECTED RESULT FUNCTION
//------------------------------------------------------------------------------------
step("Expected Result: Text contains <content>", async (content) => {
    assert.ok(await text(baseHelper.getValue(content)).exists());
});
step("Expected: Home Page screen is shown", async () => {
    assert.ok(await text(baseHelper.getValue("Ksatria Medical System")).exists());
});
step("Click thumbnail module <query>", async (query) => {
    await waitFor(3000);
    if(query == "Configuration"){
        await click(link({"aria-label" : "link to NAVIGATION.CONFIGURATION_SETTINGS"}));
    }else{
        return true;
    }
    await waitFor(5000);
});
//------------------------------------------------------------------------------------
//MISC RESULT
//------------------------------------------------------------------------------------
step("Steps on this screnario will be defined", async () => {
    return true;
});
step("Waiting for detail scenario", async () => {
    return true;
});

