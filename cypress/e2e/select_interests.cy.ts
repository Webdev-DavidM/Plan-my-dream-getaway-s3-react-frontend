/// <reference types="cypress" />

describe("testing the select interests section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.getByData("autocomplete-field")
      .find("input")
      .type("London", { force: true });
    cy.getByData("autocomplete-place").eq(0).click();
  });
  it("If the user presses the next button with no interest selected is selected, an error message shows", () => {
    cy.getByData("next").click();
    cy.getByData("error-message").should("be.visible");
  });
  it.only("if the user selects at least one interest, the error message disappears", () => {
    cy.getByData("next").click();
    cy.getByData("interestChip").eq(0).click();
    cy.getByData("error-message").should("not.exist");
  });
});
