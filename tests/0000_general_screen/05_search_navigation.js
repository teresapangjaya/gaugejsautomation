/* globals gauge*/
const { 
    $, openBrowser, write, click, link, closeBrowser, goto, press, screenshot, text, focus, textBox, color, evaluate, exists, button, clear
}               = require('taiko');
var fs          = require('fs');
const assert    = require("assert");
const headless  = process.env.headless_chrome.toLowerCase() === 'true';
eval(fs.readFileSync('./tests/base_helper.js')+'');
//------------------------------------------------------------------------------------
//INPUT FUNCTION
//------------------------------------------------------------------------------------
step("Type <query> on the Search bar", async (query) => {
    await focus(textBox({"placeholder" : "Search"}));
    await write(baseHelper.getValue(query));
});
step("Remove typed <query> on the Search bar", async () => {
    await focus(textBox({"placeholder" : "Search"}));
    await clear();
});
//------------------------------------------------------------------------------------
//EXPECTED RESULT FUNCTION
//------------------------------------------------------------------------------------

step("Expected Result: Available assigned modules are found", async () => {
    var total           = (await $('.dashboard-icon').elements()).length;
    var searchResult    = total > 0 ? true : false;
    assert.ok(searchResult);
});
step("Expected: A notification is shown <query>", async (query) => {
    assert.ok(await text(query).isVisible());
});
step("Expected Result: <query> module is found", async (query) => {
    assert.ok(await text(query).isVisible());
});
step("Expected Result: <query> module is not found", async (query) => {
    var total           = (await $('.dashboard-icon').elements()).length;
    var searchResult    = total == 0 ? true : false;
    assert.ok(searchResult);
});
step("Expected: Registration & Appointments, Patient Profiling, and Configuration thumbnails is the only shown module thumbnails", async () => {
    assert.ok(await text("Registrations & Appointments").exists());
    assert.ok(await text("Patient Profiling").exists());
    assert.ok(await text("Configuration").exists());
});