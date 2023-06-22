Feature: News Validation

  Background:
    Given I am on the Guardian news website

  Scenario: Confirm the news article from The Guardian is valid
    When Read the first news article
    Then Search for similar information on Google
    And Validate the news article's valid


  Scenario: Verify with negative search data
    When Reverse the article name
    Then Search for similar information on Google
    And Validate invalid news article
