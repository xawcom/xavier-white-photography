/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="cypress-testing-library/typings" />

describe('project', () => {
  beforeEach(() => {
    cy.visit('/')
      .getByLabelText(/view project "astro"/i)
      .click({ force: true })
      .waitForRouteChange()
  })

  it('should be linked from the index page', () => {
    cy.assertRoute('/astro')
  })
  it('should have a category, title, description', () => {
    cy.getByText(/photography/i)
      .getByText(/Night Sky - In all its glory/i)
      .getByText(/The Night Sky in all its wonderous glory./i)
  })
  it('should have images', () => {
    cy.getByAltText(/Astro2/i)
  })
  it('should have a contact button', () => {
    cy.getByText(/contact us/i)
  })
})
