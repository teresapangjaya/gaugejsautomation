/* globals gauge*/
const { 
    openBrowser, write, click, link, closeBrowser, goto, press, screenshot, text, focus, textBox, color, evaluate, exists, button, $, waitFor
}               = require('taiko');
var fs          = require('fs');
const assert    = require("assert");
const headless  = process.env.headless_chrome.toLowerCase() === 'true';
eval(fs.readFileSync('./tests/base_helper.js')+'');

//------------------------------------------------------------------------------------
//CLICK FUNCTION
//------------------------------------------------------------------------------------
step("Click Reset Password button", async () => {
    await click(await button("Reset Password"));
});
step("Click cancel on forgot password page", async () => {
    await click("Cancel");
});
step("Click Back to Login button", async () => {
    await click("Back to login");
});
step("Click <query> link", async (query) => {
    await click(await link(query));
});
step("Click update button", async () => {
    await click(await text("Update password"));
});
//------------------------------------------------------------------------------------
//INPUT FUNCTION
//------------------------------------------------------------------------------------
step("Enter Email address <input_email>", async (input_email) => {
    await focus(textBox({"id" : "username-field"}));
    await write(baseHelper.getValue(input_email));
});
step("Enter New Password <input_password> and Confirm Password <input_confirm_password>", async (input_password, input_confirm_password) => {
    await focus(textBox({"id" : "password-field"}));
    await write(baseHelper.getValue(input_password));
    await focus(textBox({"id" : "confirm-password-field"}));
    await write(baseHelper.getValue(input_confirm_password));
});
step("Enter Email <input_email> and Password <input_password>", async (input_email, input_password) => {
    await focus(textBox({"id" : "email-field"}));
    await write(input_email);
    await focus(textBox({"id" : "password-field"}));
    await write(input_password);
    await click(await $(".login-form__btn"));
});
//------------------------------------------------------------------------------------
//EXPECTED RESULT FUNCTION
//------------------------------------------------------------------------------------
step("Expected: Notification shows to inform user that password reset link has been sent to the user's email", async () => {
    assert.ok(await text(baseHelper.getValue("Password reset link has been sent to your email.")).exists());
});
step("Expected: Set password page is shown for user to enter the new password", async () => {
    assert.ok(await text(baseHelper.getValue("Set Password")).exists());
});
// Google Mail
step("Enter Google Mail <input_email>", async (input_email) => {
    await waitFor((Math.random() * 11) * 1000);
    await focus(textBox({"name" : "identifier"}));
    await write(baseHelper.getValue(input_email), '', {delay : ((Math.random() * 2) * 1000)});
});
step("Enter Google Mail Password <input_password>", async (input_password) => {
    await waitFor((Math.random() * 8) * 1000);
    await focus(textBox({"name" : "password"}));
    await write(baseHelper.getValue(input_password), '', {delay : ((Math.random() * 2) * 1000)});
});
step("Click Google Mail Next button", async () => {
    await waitFor((Math.random() * 9) * 1000);
    //await click(await $("#identifierNext"));
    await press("Enter");
});
step("Click Google Mail Login button", async () => {
    await waitFor((Math.random() * 10) * 1000);
    await press("Enter");
});
step("Click the email with title <query>", async (query) => {
    await waitFor((Math.random() * 7) * 1000);
    await click(await text(baseHelper.getValue(query)));
});
step("Click the first email that contain Reset Password link", async () => {
    await waitFor((Math.random() * 8) * 1000);
    await click(await text("You have requested to reset your password."));
});