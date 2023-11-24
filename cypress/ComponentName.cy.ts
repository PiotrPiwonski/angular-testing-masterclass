import {AppComponent} from "../src/app/app.component";

describe('ComponentName.cy.ts', () => {
  it('playground', () => {
    // cy.mount(AppComponent);
    cy.visit('/');
    cy.contains('All Courses');
  })
})
