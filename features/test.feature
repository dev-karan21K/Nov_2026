@tag2
Feature: Login page Validation

    Background: 
    Given Launch Application

    @tag2
    Scenario: Validate the valid username and password
        When Enter the username "Aiite" and password "Asdifefi"
        And Click the login button
        Then Validate the HomePage

   
    Scenario: Validate the invalid username and password
        When Enter the username "Aiite1212" and password "Asdife12121fi"
        And Click the login button
        Then Validate the HomePage

     @tag1
    Scenario Outline: LoginPage validation
        When Enter the username "<username>" and password "<password>"
        And Click the login button
        Then Validate the HomePage
        Examples:
            | username | password |
            | Admin1   | pass1    |
            | Admin2   | pass2    |
            | Admin3   | pass3    |