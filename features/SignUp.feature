Feature: All Scenarios for SignUp Page
    Background:
        Given User is On Sign Up Page
        
        Scenario Outline:
            When User Enters credentials "<name>" and "<email>"
            And User Clicks Signup button
            And User clicks on "<title>" Title
            And User enters "<password>"
            And User enters DOB "<dob>"
            And User enters details "<firstname>", "<lastname>", "<company>", "<address>", "<country>", "<state>", "<city>", "<zip>" and "<mobileNumber>"
            Then User is redirected to accountCreated Page
            And User Receives Congratulations message
        Examples:
        |name|email|title|password|dob|firstname|lastname|company|address|country|state|city|zip|mobileNumber|

