// import { fakerUser } from '../../../src/test/factories/user'

// const { email, password, passwordConfirmation } = fakerUser

describe('Register', () => {
  beforeEach(() => {
    cy.visit('/register')
  })

  it.only('renders form', () => {
    cy.get('#registerFormContainer').within(() => {
      cy.get('img.chakra-image').should('be.visible')
      cy.get('form#registerForm').should('be.visible').as('registerForm')
    })

    cy.get('@registerForm').within(() => {
      cy.get('#errorAlertBox').should('not.exist')

      cy.get('.chakra-heading').should('contain.text', 'Register').and('be.visible')

      // Must have be 3 of form-control group
      cy.get('.chakra-form-control').should('have.length', 3)

      cy.get('#email-label').within(() => {
        cy.root().should('have.text', 'Email*')
      })
      cy.get('#password-label').should('have.text', 'Password*')
      cy.get('#passwordConfirmation-label').should('have.text', 'Password Confirmation*')
    })
  })

  it('allows users to navigate to the Login page', () => {
    cy.contains('Already have an account? Login').should('be.visible').click()
    cy.url().should('match', /\/login/)
  })

  it.skip('allows users to navigate to the Forgot password page', () => {
    // TODO: code here
  })

  describe('validates email format', () => {
    context('email format is invalid', () => {
      it('highlights email input border', () => {
        // code here
      })
    })

    context('email format is valid', () => {
      it('does not highlights email input border')
      // code here
    })
  })

  describe('validates password are matched', () => {
    // code here
  })
})
