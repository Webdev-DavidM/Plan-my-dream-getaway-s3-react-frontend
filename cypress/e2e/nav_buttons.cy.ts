/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000");
  });
  it("Checks if the button is disabled if on first step on the nav footer", () => {
    // Use a data attribute to target your button and check if it's disabled
    cy.get("[data-cy=previous]").should("be.disabled");
  });
  it("Checks if the next button has disappeared and the save button appears if we are on the results page", () => {
    // Use a data attribute to target your button and check if it's disabled

    // cy.get("[data-cy=previous]").should("exist");
    const nextButton = cy.get("[data-cy=next]");
    nextButton.click();
    nextButton.click();
    nextButton.click();
    cy.get("[data-cy=next]").should("not.exist");
    cy.get("[data-cy=save]").should("exist");

    // cy.window()
    //   .its("store")
    //   .invoke("dispatch", setSearchStep(step + 1))
    //   .then(() => {
    //     cy.get("[data-cy=save]").should("exist");
    //     cy.get("[data-cy=next]").should("not.exist");
    //   });
    // cy.get("[data-cy=save]").should("exist");
    // cy.window()
    //   .its("store")
    //   .invoke("state", "searchStep")
    //   .then((state) => {
    //     const step = state.user.searchStep;

    //     cy.window()
    //       .its("store")
    //       .invoke("dispatch", setSearchStep(step + 1))
    //       .then(() => {
    //         cy.get("[data-cy=save]").should("exist");
    //         cy.get("[data-cy=next]").should("not.exist");
    //       });

    //     expect(state).to.equal(4);
    //   });
  });

  // check if the app has updated its UI
});
