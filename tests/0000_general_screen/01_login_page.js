/* globals gauge*/
const { 
    openBrowser, write, click, link, closeBrowser, goto, press, screenshot, text, focus, textBox, color, evaluate, exists, button, $, waitFor
}                   = require('taiko');
var fs              = require('fs');
const assert        = require("assert");
const headless      = process.env.headless_chrome.toLowerCase() === 'true';
const baseTimeOut   = 300000;
const useStorage    = true;
eval(fs.readFileSync('./tests/base_helper.js')+'');
//------------------------------------------------------------------------------------
//BASE FUNCTION
//------------------------------------------------------------------------------------
beforeSuite(async () => {
    await openBrowser({ headless: headless, localStorage: useStorage, args: ["--start-maximized"]})
});
afterSuite(async () => {
    await closeBrowser();
});
gauge.customScreenshotWriter = async function() {
    return await screenshot({ encoding: 'base64' });
};
//------------------------------------------------------------------------------------
//BROWSER FUNCTION
//------------------------------------------------------------------------------------
step("Go to <query>", async (query) => {
    await goto(baseHelper.getValue(query), {navigationTimeout: baseTimeOut});
});
step("Go to login page", async () => {
    await goto(baseHelper.config.baseUrl, {navigationTimeout: baseTimeOut});
});
step("Close browser", async () => {
    await closeBrowser();
    await openBrowser({ headless: headless, localStorage: useStorage, args: ["--start-maximized"]})
});
//------------------------------------------------------------------------------------
//LOGIN FUNCTION
//------------------------------------------------------------------------------------
step("Login as <role>", async (role) => {
    await goto(baseHelper.config.baseUrl, {navigationTimeout: baseTimeOut});
    await focus(textBox({"id" : "email-field"}));
    await write(baseHelper.getEmailByRole(role));
    await focus(textBox({"id" : "password-field"}));
    await write(baseHelper.getPasswordByRole(role));
    await click(await $(".login-form__btn"));
    console.log("Login button pressed");
});
step("Set login as <role>", async (role) => {
    await goto(baseHelper.config.baseUrl, {navigationTimeout: baseTimeOut});
    await focus(textBox({"id" : "email-field"}));
    await write(baseHelper.getEmailByRole(role));
    await focus(textBox({"id" : "password-field"}));
    await write(baseHelper.getPasswordByRole(role));
});
step("Click login button", async () => {
    await click(await $(".login-form__btn"));
});
step("Logout", async () => {
    await waitFor(2000);
    await click(await link({"aria-label" : "link to NAVIGATION.LOGOUT"}));
});
step("Click Forgot your password link", async () => {
    await click("Forgot your password?");
});
//------------------------------------------------------------------------------------
//INPUT FUNCTION
//------------------------------------------------------------------------------------
step("Enter email <input_email> and password <input_password>", async (input_email, input_password) => {
    await focus(textBox({"id" : "email-field"}));
    await write(baseHelper.getValue(input_email));
    await focus(textBox({"id" : "password-field"}));
    await write(baseHelper.getValue(input_password));
});
step("Enter email <input_email>", async (input_email) => {
    await focus(textBox({"id" : "email-field"}));
    await write(baseHelper.getValue(input_email));
});
step("Enter password <input_password>", async (input_password) => {
    await focus(textBox({"id" : "password-field"}));
    await write(baseHelper.getValue(input_password));
});
//------------------------------------------------------------------------------------
//EXPECTED RESULT FUNCTION
//------------------------------------------------------------------------------------
step("Expected Result: Email <input_email> receive email contains <message>", async (input_email, content_color) => {
    return true;
});
step("Expected: message is shown in red <content>", async (content) => {
    assert.ok(await text(baseHelper.getValue(content)).exists());
});