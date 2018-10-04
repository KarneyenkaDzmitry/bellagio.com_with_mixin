Feature: Feature Name

Background:
        Given I am on the home page 'https://www.bellagio.com/en.html'
        
@Redirections
    Scenario Outline: Every page should contain header [h1] on it's body
        Given I am on '<Page>' page
        Then I should see '<text>' text as a header of a body
        And  results wrapper should be present

        Examples:
            | Page          | text                 |
            | RESTAURANTS   | RESTAURANTS          |
            | HOTEL         | HOTEL ROOMS & SUITES |
            | ENTERTAINMENT | ENTERTAINMENT        |