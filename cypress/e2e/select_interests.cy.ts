/// <reference types="cypress" />

describe("testing the select interests section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.getByData("autocomplete-field")
      .find("input")
      .type("London", { force: true });
    cy.getByData("autocomplete-place").eq(0).click();
  });
  it.only("If the user presses the next button with no interest selected is selected, an error message shows", () => {
    cy.getByData("next").click();
    cy.getByData("error-message").should("be.visible");
  });
  it("if the user selects at least one interest, and presses next they go to the select travellers page", () => {});
});
