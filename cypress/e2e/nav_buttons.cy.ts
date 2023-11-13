/// <reference types="cypress" />

describe("testing navigation buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it.only("Checks if the button is disabled if on first step on the nav footer", () => {
    cy.getByData("previous").should("be.disabled");
  });
  it("Checks if the next button has disappeared and the save button appears if we are on the results page", () => {
    const nextButton = cy.get("[data-cy=next]");
    nextButton.click();
    nextButton.click();
    nextButton.click();
    cy.getByData("save").should("exist");
    cy.getByData("next").should("not.exist");

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
