describe('Index page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });

  it('should render App', function() {
    cy.screenshot('index');
  });
  it('should contain Hello World', () => {
    cy.contains('Hello World');
  });
});
