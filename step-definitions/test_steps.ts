import { Given,When,Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import{page} from "./hooks"
import{expect} from "@playwright/test"

let loginPage :LoginPage;

Given('Launch Application', async function () {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    console.log("Launch")
   
});

When('Enter the username {string} and password {string}', async function (user, pass) {
    await loginPage.login(user,pass);    
});

When('Click the login button', async function () {
    await loginPage.loginButton();
});

Then('Validate the HomePage', async function () {
   await console.log("home page")
});