describe('Navigation', () => {
  it('Renders the home view on root', () => {
    cy.visit('/')
    cy.get('[data-cy="home-view"]').should('exist')
    cy.get('header').should('exist')
    cy.get('[data-cy="nav-list"]').should('exist')
    cy.get('[data-cy="socials-navigation"]').should('exist')
  })
  it('Navigates to root when the header is selected', () => {
    cy.visit('/projects')

    cy.get('header').click().get('[data-cy="home-view"]').should('exist')
  })
  it('Renders the projects view on /projects', () => {
    cy.visit('/projects')
    cy.get('[data-cy="projects"]').should('exist')
    cy.get('header').should('exist')
    cy.get('[data-cy="nav-list"]').should('exist')
    cy.get('[data-cy="socials-navigation"]').should('exist')
  })
  it('Navigates to /projects when projects is selected from the NavList', () => {
    cy.visit('/')
    cy.get('[data-cy="projects-link"]').click()
    cy.location('pathname').should('equal', '/projects')
    cy.get('[data-cy="projects"]').should('exist')
  })
  it('Renders the experience view on /experience', () => {
    cy.visit('/experience')
    cy.get('[data-cy="experience"]').should('exist')
    cy.get('header').should('exist')
    cy.get('[data-cy="nav-list"]').should('exist')
    cy.get('[data-cy="socials-navigation"]').should('exist')
  })
  it('Navigates to /experience when Experience is selected from the NavList', () => {
    cy.visit('/')
    cy.get('[data-cy="experience-link"]').click()
    cy.location('pathname').should('equal', '/experience')
    cy.get('[data-cy="experience"]').should('exist')
  })
  it('Renders the contact view on /contact', () => {
    cy.visit('/contact')
    cy.get('[data-cy="contact"]').should('exist')
    cy.get('header').should('exist')
    cy.get('[data-cy="nav-list"]').should('exist')
    cy.get('[data-cy="socials-navigation"]').should('exist')
  })
  it('Navigates to /contact when Contact is selected from the NavList', () => {
    cy.visit('/')
    cy.get('[data-cy="contact-link"]').click()
    cy.location('pathname').should('equal', '/contact')
    cy.get('[data-cy="contact"]').should('exist')
  })
})

describe('/projects -> Select projects by dropdown', () => {
  beforeEach(() => {
    cy.visit('/projects')
  })
  it('Lists all the projects', () => {
    const projects = require('../../src/assets/projects')
    cy.get('#project-select').children().should('have.length', projects.length)
  })
  it('changes the project displayed when a project is selected', () => {
    cy.get('h3').contains('NC news')
    cy.get('#project-select').select("RumbleQuiz")
    cy.get("h3").contains("RumbleQuiz")
  })
})

describe("/contact -> contact form", () => {
  beforeEach(() => {
    cy.visit("/contact")
  })
  it("should be empty by default", () => {
    cy.get('#from_name').should('be.empty')
    cy.get('#from_email').should('be.empty')
    cy.get('#message').should('be.empty')
  })
  // it("should not allow submission if any fields are empty")
  // it("displays a message saying fields are empty")
  // it("should not allow submission if email address isn't valid")
  // it("displays a message saying the email address isn't valid")
  // it("empties all the fields when the form has been successfully submitted")
  // it("displays a message if a form was sent successfully")
  // it("displays a message if the form wasn't sent successfully due to a network error")
})