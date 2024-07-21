describe('Logout', () => {
  beforeEach(()=>{
    cy.login()
    cy.visit('/')
  })
  it('logout successfully', () => {
    cy.logout()

    cy.get('#new_user > .submit-container > .btn').should('be.visible')
  })

})
