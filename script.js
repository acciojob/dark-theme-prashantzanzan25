describe('Theme Swap Test', () => {
  it('Check dark theme', () => {
    cy.visit('http://localhost:3000'); // Change the URL if needed
    cy.get("button#swap").click();
    cy.get("div#app").should("have.class", "night");
    cy.get("button#swap").click();
    cy.get("div#app").should("not.have.class", "night");
  });
});
