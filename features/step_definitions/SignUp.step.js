import {Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";

import { Page } from "from";

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {

    browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    page = await context.newPage();

});

Given("User is On Sign Up Page",async ()=>{

})
When("User Enters credentials {string} and {string}",async ()=>{

})
When("User Clicks Signup button",async ()=>{

})
When("User clicks on {string} Title",async ()=>{

})
When("User enters {string}",async ()=>{

})
When("User enters DOB {string}", async ()=>{

})
When("User enters details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string} and {string}",async ()=>{

})
Then("User is redirected to accountCreated Page",async ()=>{

})
Then("User Receives Congratulations message",async ()=>{

})
After(async function () {

    await browser.close();

})