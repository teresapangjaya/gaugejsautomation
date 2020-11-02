/* globals gauge*/
const { 
    $, openBrowser, write, click, link, closeBrowser, goto, press, screenshot, text, focus, textBox, color, evaluate, exists, button, hover, waitFor, dropDown, into,
    checkBox, radioButton, confirm, alert, doubleClick, accept, dismiss
}               = require('taiko');
var fs          = require('fs');
const assert    = require("assert");
const headless  = process.env.headless_chrome.toLowerCase() === 'true';
eval(fs.readFileSync('./tests/base_helper.js')+'');

step("Test <query>", async (query) => {
    console.log(baseHelper.getValue(query));
    return true;
});
step("Load username <file>", async (file) => {
    console.log(file.rows);
    console.log(file.headers);
    return true;
});
// Check if Text is visible
step("Text is visible <query>", async (query) => {
    assert.ok(await text(query).isVisible());
});

step("Text is not visible <query>", async (query) => {
    assert.fail(await text(query).isVisible());
});

//Development Do Not Use
step("Text <query> is <fontColor>", async (query, fontColor) => {
    let options = {args: [{fontColor: fontColor}]}
    assert.ok(await evaluate(text(query), (element, args) => {
        console.log(element.style.color);
        element.style.color = args[0].fontColor;
   }, options));
});


//Create Patient
step("Input user id <input_email> and password <input_password>", async (input_email, input_password) => {
    await focus(textBox({"name" : "userId"}));
    await write(baseHelper.getValue(input_email));
    await focus(textBox({"name" : "password"}));
    await write(baseHelper.getValue(input_password));
    await click("Login");
});
step("Go to create patient page", async () => {
    await hover(await text('MMS Menu'));
    await click("Registration");
    await click("Patient Profiling");
    await click("Create Patient Profile");
});
step("Click add button", async () => {
    await click(button({"name" : "act"}));
    confirm('Do you want to print Patient Card ?', async () => await dismiss());
    confirm('Do you want to print Label ?', async () => await dismiss());
    //Patient has been successfully added.
});
step("Select patient type <input>", async (input) => {
    await waitFor(1000);
    await click(dropDown({name:"occupation"}));
    await write(input, into(dropDown({name:"occupation"})));
    await click(dropDown({name:"occupation"}));
});
step("Select title <input>", async (input) => {
    await waitFor(1000);
    await click(dropDown({name:"title"}));
    await write(input, into(dropDown({name:"title"})));
    await click(dropDown({name:"title"}));
});
step("Tick patient has died <input>", async (input) => {
    await waitFor(1000);
    if(input == 1){
        await click(checkBox({name:"webHasDied"}));
    }
});
step("Choose Blood Type has died <input>", async (input) => {
    await waitFor(1000);
    await click(radioButton({name:"bloodType", value:input}));
});
step("Fill firstname <input>", async (input) => {
    await focus(textBox({"name" : "firstName"}));
    await write(baseHelper.getValue(input));
});
step("Fill lastname <input>", async (input) => {
    await focus(textBox({"name" : "lastName"}));
    await write(baseHelper.getValue(input));
});
step("Fill place of birth <input> and date of birth <input2>", async (input, input2) => {
    await focus(textBox({"name" : "placeOfBirth"}));
    await write(baseHelper.getValue(input));
    await focus(textBox({"name" : "dob"}));
    await write(baseHelper.getValue(input2));
});
step("Fill address <address>", async (input) => {
    await focus(textBox({"name" : "address"}));
    await write(baseHelper.getValue(input));
});
step("Click logout button2", async () => {
    await click(await text("Logout"));
});

// Multiple Insert Product
step("Input user id <input_email> and password <input_password> for MMS System", async (input_email, input_password) => {
    await focus(textBox({"name" : "UserName"}));
    await write(baseHelper.getValue(input_email));
    await focus(textBox({"name" : "Password"}));
    await write(baseHelper.getValue(input_password));
    await click("login");
});
step("Go to create receive goods", async () => {
    await hover(await text('Menu MMS'));
    await waitFor(1000);
    await click("Persediaan");
    await waitFor(1000);
    await click("Transaksi");
    await waitFor(1000);
    await click("Penerimaan Barang");
    await waitFor(1000);
    await click("Buat Penerimaan Barang");
});
step("Input products based on CSV <file>", async (file) => {
    for(var index in file.rows){
        var itemIndex       = index;
        var item            = file.rows[index];
        var productSku      = item.cells[1];
        var productName     = item.cells[2];
        var productQty      = item.cells[3];
        var productRemarks  = item.cells[4];
        await waitFor(2000);
        await click("Tambah Baris Baru");
        await waitFor(2000);
        alert('Gagal membaca barcode, Barcode ID tidak ditemukan', async () => await accept());
        await click(textBox({"name" : "ItemNumbergridArea"+(itemIndex)}));
        await write(baseHelper.getValue(productSku));
        await waitFor(2000);
        await hover(textBox({"name" : "ItemNumbergridArea"+(itemIndex)}));
        await click(textBox({"name" : "ItemNumbergridArea"+(itemIndex)}));
        await click(text(productName));
        // await focus(textBox({"name" : "ItemNamegridArea"+(itemIndex)+"UI"}));
        // await write(baseHelper.getValue(productName));
        await waitFor(1000);
        await focus(textBox({"name" : "ReceivedQtygridArea"+(itemIndex)+"_masked"}));
        await write(baseHelper.getValue(productQty));
        await waitFor(1000);
        await focus(textBox({"name" : "NotesgridArea"+(itemIndex)}));
        alert('Gagal membaca barcode, Barcode ID tidak ditemukan', async () => await accept());
        await write(baseHelper.getValue(productRemarks));
    }
});