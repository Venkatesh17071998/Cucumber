$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/LoginPage.feature");
formatter.feature({
  "name": "Verifying Facebook Details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying adactin with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on facebook page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" click login",
  "keyword": "When "
});
formatter.step({
  "name": "user should search hotels \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoom Type\u003e\", \"\u003cNumber of Rooms\u003e\",\"\u003cCheck In Date\u003e\",\"\u003cCheck Out Date\u003e\",\"\u003cAdults per Room\u003e\"and \"\u003cChildren per Room\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should select hotel and click continue",
  "keyword": "And "
});
formatter.step({
  "name": "user should book a hotel have to enter \"\u003cFirst Name\u003e\",\"\u003cLast Name\u003e\",\"\u003cBilling Address\u003e\",\"\u003cCredit Card No.\u003e\",\"\u003cCredit Card Type\u003e\",\"\u003cExpiry month\u003e\", \"\u003cExpiry year\u003e\"and \"\u003cCVV Number\u003e\" to book a hotel",
  "keyword": "And "
});
formatter.step({
  "name": "user should get the order id",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotels",
        "Room Type",
        "Number of Rooms",
        "Check In Date",
        "Check Out Date",
        "Adults per Room",
        "Children per Room",
        "First Name",
        "Last Name",
        "Billing Address",
        "Credit Card No.",
        "Credit Card Type",
        "Expiry month",
        "Expiry year",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "Abcdefghi123",
        "Abcd@1234",
        "Sydney",
        "Hotel Creek",
        "Double",
        "2 - Two",
        "16/11/2021",
        "17/11/2021",
        "2 - Two",
        "2- Two",
        "Venkatesh",
        "M",
        "Thoraipakkam",
        "1234123412341234",
        "VISA",
        "May",
        "2022",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying adactin with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepClass.user_is_on_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Abcdefghi123\" and \"Abcd@1234\" click login",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepClass.user_should_enter_and_click_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should search hotels \"Sydney\",\"Hotel Creek\",\"Double\", \"2 - Two\",\"16/11/2021\",\"17/11/2021\",\"2 - Two\"and \"2- Two\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepClass.user_should_search_hotels_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should select hotel and click continue",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepClass.user_should_select_hotel_and_click_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should book a hotel have to enter \"Venkatesh\",\"M\",\"Thoraipakkam\",\"1234123412341234\",\"VISA\",\"May\", \"2022\"and \"123\" to book a hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepClass.user_should_book_a_hotel_have_to_enter_and_to_book_a_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get the order id",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepClass.user_should_get_the_order_id()"
});
formatter.result({
  "status": "passed"
});
});