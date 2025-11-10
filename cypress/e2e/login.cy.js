describe("Login Page - Successful Login", () => {
  beforeEach(() => {
    // Uygulamayı aç
    cy.visit("/");
  });

  it("should login successfully with correct credentials", () => {
    // Email inputuna değer gir
    cy.get('input[type="email"]').type("admin@admin");

    // Password inputuna değer gir
    cy.get('input[type="password"]').type("admin.123.");

    // Login butonuna tıkla
    cy.get('button[type="submit"]').click();

    // Başarılı giriş sonrası /welcome sayfasına yönlendirme kontrolü
    cy.url().should("include", "/welcome");

    // /welcome sayfasında kullanıcı email’inin görünmesini kontrol et
    cy.contains("admin@admin").should("be.visible");
  });
});
