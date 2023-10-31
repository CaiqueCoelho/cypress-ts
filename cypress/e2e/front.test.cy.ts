import "cypress-map";

describe("Front testing in https://www.saucedemo.com", () => {
  it("GET Entries and filter by the Category: Authentication & Authorization", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="product_sort_container"] option:selected').should(
      "have.text",
      "Name (A to Z)"
    );

    cy.get('[data-test="product_sort_container"]').select("Name (Z to A)");

    cy.get('[data-test="product_sort_container"] option:selected').should(
      "have.text",
      "Name (Z to A)"
    );

    cy.get(".inventory_item_name")
      .map("innerText")
      .then((productsNames) => {
        const sortProductsNames = [...productsNames].sort().reverse();
        cy.log(productsNames[0]);
        cy.log(sortProductsNames[0]);
        expect(productsNames).to.be.deep.equal(sortProductsNames);
      });
  });

  it.only("Put products in cart using testing libary examples", () => {
    cy.visit("/");
    cy.getByPlaceholder("Username").type("standard_user");
    cy.getByPlaceholder("Password").type("secret_sauce");
    cy.getByAllText("Login").click();

    cy.getByAllText("Add to cart").first().click();
  });
});
