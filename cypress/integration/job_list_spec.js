/* global cy */

describe("Job List", () => {
  it("Shows recruiter name and rating on result", () => {
    cy.visit("localhost:3000")

    cy.getBySel("job-list-item")
      .first()
      // The recruiter name of the first result
      .should("include.text", "Cover Management Recruitment LTD")

    // The first result has a 3/5 star rating, so check for 3 active stars and 2 inactive ones.
    cy.getBySel("job-list-item")
      .first()
      .find("[data-test=active-star]")
      .should("have.length", 3)

    cy.getBySel("job-list-item")
      .first()
      .find("[data-test=inactive-star]")
      .should("have.length", 2)
  })
})
