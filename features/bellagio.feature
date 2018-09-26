Feature: Bellagio resource Tests of restaurants service

    Background:
        Given I open home page 'https://www.bellagio.com/en.html'

    # Scenario Outline: Check body header on a page
    #     When I click on '<reference_on_the_header>' reference on header
    #     Then I should see '<text>' text as a header of a body
    #     And  results wrapper should be present

    #     Examples:
    #         | reference_on_the_header | text                 |
    #         | RESTAURANTS             | RESTAURANTS          |
    #         | HOTEL                   | HOTEL ROOMS & SUITES |
    #         | ENTERTAINMENT          | ENTERTAINMENT        |

    # Scenario Outline: Filter on restaurants page
    #     When I click on 'RESTAURANTS' reference on header
    #     And choose options cousine = '<Cousine>', price = '<Price>', meal = '<Meal>'
    #     Then I see '<Result>' in results
    #     And Only One choice option

    #     Examples:
    #         | Cousine | Price | Meal                 | Result                 |
    #         | Italian | Clear | Breakfast and Brunch | LAGO BY JULIAN SERRANO |

Scenario: Check reservatin features
    When I click on 'Guest Services' reference on header
    And choose the option 'find reservation' 
    Then I should see 'Find Your Reservation' text as a header of a body
    When I choose Room in field reservation
    Then I see selected 'Room' in the reservation type

# Scenario: Search component
#     Given I choose search component
#     Then I see input field with text 'Search restaurants, shows, more…'
#     And 'disabled' button with text 'SEARCH'

# Scenario Outline: Search has results
#     Given I choose search component
#     When I search for '<text>'
#     Then I see results contains '<result>' in the body
#     Examples:
#         | text      | result           |
#         | du soleil | "O" BY CIRQUE DU SOLEIL® |

# Scenario Outline: Search no result
#     Given I choose search component
#     When I search for '<text>'
#     Then I see message '<result>' in the body of the page
#     Examples:
#         | text    | result                                                                                                              |
#         | dusolei | Sorry, your search for dusolei did not return any results. Please try different search terms or browse our sitemap. |

