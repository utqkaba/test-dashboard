describe("Login Page - Successful Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should login successfully with correct credentials", () => {
    cy.get('input[type="email"]').type("admin@admin");
    cy.get('input[type="password"]').type("admin.123.");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/welcome");
    cy.contains("admin@admin").should("be.visible");
  });
});
