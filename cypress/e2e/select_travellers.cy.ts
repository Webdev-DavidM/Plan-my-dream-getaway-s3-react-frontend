/// <reference types="cypress" />

describe("testing the select travellers section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.getByData("autocomplete-field")
      .find("input")
      .type("London", { force: true });
    cy.getByData("autocomplete-place").eq(0).click();
    cy.getByData("interestChip").eq(0).click();
    cy.getByData("next").click();
  });
  it("If the user presses the next button with no traveller selected, an error message shows", () => {
    cy.getByData("next").click();
    cy.getByData("error-message").should("be.visible");
  });
  it("if the user selects at least one traveller, the error message disappears", () => {
    cy.getByData("next").click();
    cy.getByData("placeChip").eq(0).click();
    cy.getByData("error-message").should("not.exist");
  });
});
