$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NewsValidation.feature");
formatter.feature({
  "line": 1,
  "name": "News Validation",
  "description": "",
  "id": "news-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14866443841,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Guardian news website",
  "keyword": "Given "
});
formatter.match({
  "location": "NewsValidationSteps.navigateToGuardianWebsite()"
});
formatter.result({
  "duration": 10409697134,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Confirm the news article from The Guardian is valid",
  "description": "",
  "id": "news-validation;confirm-the-news-article-from-the-guardian-is-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Read the first news article",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Search for similar information on Google",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate the news article\u0027s valid",
  "keyword": "And "
});
formatter.match({
  "location": "NewsValidationSteps.readFirstNewsArticle()"
});
formatter.result({
  "duration": 51529713,
  "status": "passed"
});
formatter.match({
  "location": "NewsValidationSteps.searchSimilarInformationOnGoogle()"
});
formatter.result({
  "duration": 2440961773,
  "status": "passed"
});
formatter.match({
  "location": "NewsValidationSteps.validateNewsArticleValidity()"
});
formatter.result({
  "duration": 3024849216,
  "status": "passed"
});
formatter.after({
  "duration": 768627804,
  "status": "passed"
});
formatter.before({
  "duration": 7343563798,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Guardian news website",
  "keyword": "Given "
});
formatter.match({
  "location": "NewsValidationSteps.navigateToGuardianWebsite()"
});
formatter.result({
  "duration": 5892121444,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify with negative search data",
  "description": "",
  "id": "news-validation;verify-with-negative-search-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Reverse the article name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Search for similar information on Google",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate invalid news article",
  "keyword": "And "
});
formatter.match({
  "location": "NewsValidationSteps.readFirstNewsArticleInReverse()"
});
formatter.result({
  "duration": 150375862,
  "status": "passed"
});
formatter.match({
  "location": "NewsValidationSteps.searchSimilarInformationOnGoogle()"
});
formatter.result({
  "duration": 5049201390,
  "status": "passed"
});
formatter.match({
  "location": "NewsValidationSteps.validateNewsArticleIsInvalid()"
});
formatter.result({
  "duration": 5025171894,
  "status": "passed"
});
formatter.after({
  "duration": 1392209122,
  "status": "passed"
});
});