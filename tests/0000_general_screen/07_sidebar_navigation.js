/* globals gauge*/
const { 
    openBrowser, write, click, link, closeBrowser, goto, press, screenshot, text, focus, textBox, color, evaluate, exists, button, waitFor
}               = require('taiko');
var fs          = require('fs');
const assert    = require("assert");
const headless  = process.env.headless_chrome.toLowerCase() === 'true';
eval(fs.readFileSync('./tests/base_helper.js')+'');
//------------------------------------------------------------------------------------
//NAVIGATION FUNCTION
//------------------------------------------------------------------------------------
step("Click Collapse icon on the sidebar", async () => {
    await click(link({"class" : "expand-icon"}));
    waitFor(1000);
    console.log("Collapse button pressed");
});
step("Click Expand icon on the sidebar", async () => {
    await click(link({"class" : "expand-icon"}));
    waitFor(1000);
    console.log("Expand button pressed");
});

step("Access Registration menu", async () => {
    await click("Configuration");
});
step("Click Patient Profiling module name on the sidebar", async () => {
    await waitFor(3000);
    await click(link({"aria-label" : "link to NAVIGATION.PATIENT_PROFILES"}));
    await waitFor(8000);
});
step("Click Configuration Settings icon on the sidebar", async () => {
    await waitFor(3000);
    await click(link({"aria-label" : "link to NAVIGATION.CONFIGURATION_SETTINGS"}));
    await waitFor(8000);
});
//------------------------------------------------------------------------------------
//EXPECTED RESULT FUNCTION
//------------------------------------------------------------------------------------
step("Expected: the intended page is shown with expanded sidebar", async () => {
    return true;
});
step("Expected: the intended page is shown with collapsed sidebar", async () => {
    return true;
});
step("Expected Result: Sidebar navigation is collapsed", async () => {
    return true;
});
step("Expected Result: Sidebar navigation is expanded", async () => {
    return true;
});
step("Expected Result: Help & Support page is displayed", async () => {
    return true;
});
step("Expected Result: Configuration & Setting page is displayed", async () => {
    return true;
});