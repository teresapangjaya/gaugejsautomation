# 000001 Login Page base_url
<br/>
<br/>1. If the Email and password are valid, then user shall enable to log in to the system
<br/>2. If the Email or password is not valid, then user shall not enable to log in to the system, with notification: "Your email or password was incorrect, please try again" and incorrect input (Email or Password) change to RED color
<br/>
<br/>EXPECTATION:
<br/>There are some specific requirement
<br/>- the inputted "Email" must be email format
<br/>- the inputted "Password" must be with asterix character to hide the typed password 

## 01 Success Login 
Description on how to login the system
* Login as "admin"
* Expected: Home Page screen is shown
* Logout

## 02 Failed Login with incorrect Email
* Go to login page
* Enter email "staff@example" and password "password123"
* Click login button
* Expected: message is shown in red "Your email or password was incorrect, please try again"
* Close browser