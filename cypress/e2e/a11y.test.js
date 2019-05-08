context('A11y', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
    cy.wait(1000);
  });
  it('Checks for a11y violations on load.', () => {
    cy.checkA11y();
  });
  // it('Has focusable buttons', () => {
  //   // cy.checkA11y();
  // });
});
