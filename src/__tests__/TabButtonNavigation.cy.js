import TabButtonNavigation from '../components/TabButtonNavigation.vue'

describe('<TabButtonNavigation />', () => {
  it('renders', () => {
    cy.mount(TabButtonNavigation)
  })
  it('has four RouterLinks', () => {
    cy.mount(TabButtonNavigation)
    cy.get('RouterLink').should('have.length', 4)
  })
})
