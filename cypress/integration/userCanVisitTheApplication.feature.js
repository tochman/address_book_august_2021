context('user visits the application', () => {
  it('is expected to display a header', () => {
    cy.visit('/')
    cy.get('h1').should('contain.text', 'Address Book')
  });
});