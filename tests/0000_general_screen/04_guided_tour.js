/* globals gauge*/
const { 
    openBrowser, write, click, link, closeBrowser, goto, press, screenshot, text, focus, textBox, color, evaluate, exists, button
}               = require('taiko');
var fs          = require('fs');
const assert    = require("assert");
const headless  = process.env.headless_chrome.toLowerCase() === 'true';
eval(fs.readFileSync('./tests/base_helper.js')+'');

//------------------------------------------------------------------------------------
//CLICK FUNCTION
//------------------------------------------------------------------------------------
step("Click Yes, show me around button on the guided tour prompt", async () => {
    await click("Yes, show me around");
});
step("Click No, thanks button on the guided tour prompt", async () => {
    await click("No, thanks");
});
step("Click Next on the Notification guided tour", async () => {
    await click("Next");
});
step("Click Next on the Simple Navigation guided tour", async () => {
    await click("Next");
});
step("Click Next on the KMS Home guided tour", async () => {
    await click("Next");
});
step("Click Next on the Configuration & Settings guided tour", async () => {
    await click("Next");
});
step("Click Next on the Help & Support guided tour", async () => {
    await click("Next");
});
step("Click Back on the KMS Home guided tour to see the previous explanation", async () => {
    await click("Back");
});
step("Click Skip on the KMS Home guided tour", async () => {
    await click("Skip");
});
step("Click Done", async () => {
    await click("Done");
});
//------------------------------------------------------------------------------------
//EXPECTED RESULT FUNCTION
//------------------------------------------------------------------------------------
step("Expected: the guided tour prompt is still shown for the logged in user", async () => {
    assert.ok(await text("Yes, show me around").isVisible());
});
step("Expected: the guided tour is still shown and enable user to follow through again", async () => {
    assert.ok(await text("Yes, show me around").isVisible());
});
step("Expected: the guided tour prompt is no longer shown for the logged in user", async () => {
    assert.fail(await text("Yes, show me around").isVisible());
});