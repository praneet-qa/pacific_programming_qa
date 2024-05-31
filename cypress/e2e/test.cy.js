/*
1- How does Cypress handle asynchronous operations and why is this beneficial?
  A: Cypress handles asynchronous operations by automatic waiting, where it waits for commands and assertions to resolve before moving on to the next step in the test. Additionally, Cypress utilizes command chaining, where each command returns a promise that resolves when the command completes. Cypress also retries commands and assertions until they pass or reach a timeout threshold. This is useful for asynchronous tasks that take longer to complete. Cypress also has automatic error handling to provide details and logs to debug asynchronous issues. With these features, Cypress makes code simpler, as the tests can be written synchronously, which is easier to read and understand. It reduces flakiness caused by timing issues, eliminates the need for waits and timeouts, making tests run faster and more efficiently, saving resources and time. Lastly, Cypress provides detailed error messages and debugging tools, making it easier to diagnose and fix issues related to asynchronous tasks.


2- How would you mock an API response in a Cypress test? Provide a brief example.
  A: In Cypress, we use the 'cy.intercept()' command to mock an API response. This command intercepts the HTTP requests made by the application and allows you to respond with predefined data.

  Example:  
  cy.intercept('GET', '/api/data', { fixture: 'example_response.json' }).as('expectedMockedData')
  cy.visit('/some_page_that_uses_the_api)
  cy.wait('@expectedMockedData')
  cy.get('[data-test="Country"]').should('contain', 'Mocked Data Value')


3- Explain how Cypress handles test retries on failures. How can you configure it?
  A: Cypress handles test retries on failures automatically. By default, the limit is 4 retries for each failed assertion or command. You can increase this number either in the Cypress configuration file or where the assertion is placed. You can also add "retry()" after individual commands to directly run them again. Additionally, you can configure retries globally in the cypress.json file using "runMode", which specifies the number of retries for each test run.

*/

describe("Sample Page UI test", () => {
  // 4. Write a simple test to verify the page title is "Sample Page" and the "Welcome to the Sample Page" header is visible.
  it("should have the correct page title", () => {
    cy.visit("/sample.html");
    cy.title().should("eq", "Sample Page");
  });

  it("should display the welcome message", () => {
    cy.visit("/sample.html");
    cy.contains("h1", "Welcome to the Sample Page").should("be.visible");
  });

  // 5. Write a simple test to verify that the button with the text ‘Login’ is present on the webpage.
  it("should have the login button", () => {
    cy.visit("/sample.html");
    cy.contains("button", "Login").should("be.visible");
  });

  // 6. Verify that the hidden section remains hidden after entering an invalid username and password and clicking on the "Login" button and then verify the login functionality works fine.
  it("should keep hidden section hidden after entering invalid credentials", () => {
    cy.visit("/sample.html");
    cy.get("#username").type("invalid_user");
    cy.get("#password").type("invalid_password");
    cy.get("#login-btn").click();
    cy.get("#hidden-section").should("have.class", "hidden");
  });

  it("should display hidden section after entering valid credentials", () => {
    cy.visit("/sample.html");
    cy.get("#username").type("user");
    cy.get("#password").type("pass");
    cy.get("#login-btn").click();
    cy.get("#hidden-section").should("not.have.class", "hidden");
  });

  // 7. Verify the "Login" button has the correct class and styling.
  it('should have the correct class and styling for the "Login" button', () => {
    cy.visit("/sample.html");
    cy.get("#login-btn")
      .should("have.class", "btn") // Check if it has the class 'btn'
      .and("have.css", "background-color", "rgb(76, 175, 80)") // Check background color
      .and("have.css", "color", "rgb(255, 255, 255)") // Check text color
      .and("have.css", "padding", "10px 20px") // Check padding
      .and("have.css", "border", "0px none rgb(255, 255, 255)") // Check border
      .and("have.css", "cursor", "pointer"); // Check cursor
  });

  // 8. Verify that the information section has the exact 3 headers, and the displayed data should be equal to this list :expectedItems = [“Canada”,”British Columbia”,”Current Date” ]
  it("should have exactly three headers in the information section", () => {
    cy.visit("/sample.html");
    cy.get(".info .header-section p").should("have.length", 3);
  });

  it("should display the expected data in the information section", () => {
    const expectedItems = ["Canada", "British Columbia", getCurrentDate()];

    cy.visit("/sample.html");
    cy.get(".info .data-section p").each(($el, index) => {
      cy.wrap($el).should("contain.text", expectedItems[index]);
    });
  });
});

// This method should exist in a utility file and be imported as below to be used in the above tests.
// import { getCurrentDate } from "./utils/commonUtils";
export function getCurrentDate() {
  const options = { month: "long", day: "2-digit", year: "numeric" };
  const date = new Date();
  return date.toLocaleDateString("en-US", options);
}
