import spok from "cy-spok";

describe("API testing", () => {
  it("GET Entries and filter by the Category: Authentication & Authorization", () => {
    let entriesAuthCategory = [];
    cy.api(
      { url: "https://api.publicapis.org/entries" },
      "GET Entries and filter by the Category: Authentication & Authorization"
    ).then((responseEntries) => {
      expect(responseEntries.status).to.eq(200);
      assert.isArray(
        responseEntries.body.entries,
        "Todos Response is an array"
      );
      responseEntries.body.entries.forEach((entry) => {
        if (entry.Category === "Authentication & Authorization") {
          entriesAuthCategory.push(entry);
        }
      });
      expect(entriesAuthCategory.length).to.be.equals(7);
      cy.log(entriesAuthCategory.length);
      entriesAuthCategory.forEach((entry) => {
        cy.log(JSON.stringify(entry));
        cy.wrap(entry).should(
          spok({
            API: spok.string,
            Description: spok.string,
            Auth: spok.string,
            HTTPS: spok.type("boolean"),
            Cors: spok.string,
            Link: spok.string,
            Category: "Authentication & Authorization",
          })
        );
      });
    });
  });
});
