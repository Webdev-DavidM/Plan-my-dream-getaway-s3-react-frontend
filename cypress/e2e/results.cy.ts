/// <reference types="cypress" />

describe("testing the results section", () => {
  beforeEach(() => {
    // cy.visit("http://localhost:3000");
    // cy.getByData("autocomplete-field")
    //   .find("input")
    //   .type("London", { force: true });
    // cy.getByData("autocomplete-place").eq(0).click();
    // cy.getByData("interestChip").eq(0).click();
    // cy.getByData("next").click();
    // cy.getByData("placeChip").eq(0).click();
    // cy.getByData("next").click();
  });
  it("When we first go to the results page, the loading spinner should be visible", () => {
    // cy.getByData("loading-spinner").should("be.visible");
  });
  it("When the data is loaded from the API, then the loading spinner should disappear", () => {
    // i will need to set at least a 20 second timeout for this test to pass as OpenAi is slow
  });
});
