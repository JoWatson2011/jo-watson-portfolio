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
    cy.location('pathname').should('equal', "/contact")
    cy.get('[data-cy="contact"]').should('exist')
  })
})
