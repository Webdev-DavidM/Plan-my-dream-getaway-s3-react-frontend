/// <reference types="cypress" />

describe("testing the select travellers section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.getByData("autocomplete-field")
      .find("input")
      .type("London", { force: true });
    cy.getByData("autocomplete-place").eq(0).click();
  });
  it("If the user presses the next button before at least one interest is selected, an error message shows", () => {
    // cy.getByData("next-button").click();
    // cy.getByData("error-message").should("be.visible");
  });
  it("if the user selects at least one interest, the error message disappears", () => {});
  it("if the user selects at least one interest, and presses next they go to the select travellers page", () => {});
});
