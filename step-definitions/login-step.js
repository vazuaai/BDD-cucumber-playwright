const { Given, When, Then } = require("@cucumber/cucumber")
const { LoginPage } = require("../page-objects/login-page")

const loginPage = new LoginPage()

Given("I visit a login page", async function () {
  await loginPage.navigateToLoginScreen()
})

When("I fill the login form with valid credentials", async function () {
  await loginPage.submitLoginForm()
})

Then("I should see the home page", async function () {
  await loginPage.assertUserIsLoggedIn()
})

Then("I wait for 3 seconds", async function () {
  await loginPage.pause()
})

When(
  /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
  async function (username, password) {
    await loginPage.submitLoginWithParameters(username, password)
  }
)
