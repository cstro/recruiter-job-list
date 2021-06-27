/* global cy */

describe("Filters", () => {
  it("updates search results when a filter is disabled", () => {
    cy.visit("localhost:3000")

    cy.getBySel("search-result-count").should("have.text", "20")
    cy.getBySel("job-list-item").should("have.length", 20)

    cy.get("[type='checkbox'][name='five_star']").click()

    cy.getBySel("search-result-count").should("have.text", "12")
    cy.getBySel("job-list-item").should("have.length", 12)
  })

  it("only displays results for enabled statuses", () => {
    cy.visit("localhost:3000")

    cy.get("[type='checkbox'][name='expired']").click()
    cy.get("[type='checkbox'][name='closed']").click()

    // Check that the statuses only contain the enabled status
    cy.getBySel("job-status").should("include.text", "Position filled")

    // and explicitly don't contain the disabled statuses
    cy.getBySel("job-status").should("not.include.text", "Expired")
    cy.getBySel("job-status").should("not.include.text", "Closed")
  })

  it("returns single result when correct filters are toggled off", () => {
    cy.visit("localhost:3000")

    // Setup toggles so that only one results, "Senior Electronics/PCB Design Engineer", is returned.
    cy.get("[type='checkbox'][name='expired']").click()
    cy.get("[type='checkbox'][name='closed']").click()
    cy.get("[type='checkbox'][name='unknown']").click()
    cy.get("[type='checkbox'][name='between_30_45']").click()
    cy.get("[type='checkbox'][name='under_30']").click()
    cy.get("[type='checkbox'][name='four_star']").click()
    cy.get("[type='checkbox'][name='three_star']").click()

    cy.getBySel("job-list-item").should("have.length", 1)
    cy.getBySel("job-list-item")
      .first()
      .should("include.text", "Senior Electronics/PCB Design Engineer")
  })

  it("shows no results message when there are no matched", () => {
    cy.visit("localhost:3000")

    cy.get("[type='checkbox'][name='expired']").click()
    cy.get("[type='checkbox'][name='closed']").click()
    cy.get("[type='checkbox'][name='position_filled']").click()

    cy.getBySel("job-list-item").should("have.length", 0)
    cy.contains("No results found")
  })
})
