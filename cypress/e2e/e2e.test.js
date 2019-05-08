describe('User happy path homepage', () => {
  it('Visits home page and checks for navbar links.', () => {
    cy.visit('/')
      .queryByText(/Home/i)
      .should('exist')
      .queryByText(/Page 2/i)
      .should('exist');
  });
});
