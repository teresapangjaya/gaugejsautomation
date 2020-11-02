# 000003 Forgot Password
A page to reset the password, by sending reset link to user email

## 01. User forgot the password
* Go to "<baseUrl>"
* Click Forgot your password link
* Enter Email address "staff@example.com"
* Click Reset Password button
* Expected: Notification shows to inform user that password reset link has been sent to the user's email
* Click Back to Login button

02. Reset the password through email sent by system
Go to "https://mail.google.com/"
Enter Google Mail "example@gmail.com" 
Click Google Mail Next button
Enter Google Mail Password "password123"
Click Google Mail Login button
Click the email with title "Reset Password"
Click the first email that contain Reset Password link
Click "Reset Password" link
Expected: Set password page is shown for user to enter the new password
Enter New Password "password123" and Confirm Password "password123"
Click update button


03. Login with the new password
Enter Email "staff@example.com" and Password "password123"
Click login button 
Expected: Home Page screen is shown 
Logout

NOTE can't use scenario 2 because of the gmail blocked automation tools, so the scenario 3 can't be use too
