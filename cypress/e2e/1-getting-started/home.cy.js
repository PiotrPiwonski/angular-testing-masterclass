

describe('Home Page', () => {
  it('should diplay a list of courses', () => {
    cy.visit('/');
    cy.contains('All Courses');
  });
});
