Feature: login
    In order to perform authentication to access the KPO system
    As a user based on the role given James
    James want to login to the KPO system

  Background:
    Given James is at the kpo url page

  @login @rest @web
  Scenario Outline: login with correct credentials
    In order to perform authentication to access the KPO system
    As a user based on the role given James
    James wants to login with correct credentials
    When James login with username "<username>" and password "<password>"
    Then James is able to login

    Examples:
      | username | password |
      | kcp-admin-xxx | pass |
      | kcp-admin-xxx@xxx.com | pass |
  