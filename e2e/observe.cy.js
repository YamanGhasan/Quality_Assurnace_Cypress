// Test Suite: Observal Goal
describe('Observal Goal', () => {
  beforeEach(() => {
    // Log in as a staff member
    cy.visit('https://goal-dev.mdx.ac.uk/accounts/login');
    cy.get('[name="login_as"]').select('staff');
    cy.get('#id_username').type('Yaman');
    cy.get('#id_password').type('غشةشى1234');
    cy.get('form').submit();

    // Wait for authentication and redirection to complete
    cy.url().should('not.include', 'accounts/login');
    cy.url().should('include', '/staff/');

    // Select the desired module
    cy.contains('.list-group-item', 'GroupQ/Nablus: GroupQ')
      .find('a.nav-link')
      .click();

    // Manually navigate to the GOALs page
    cy.visit('https://goal-dev.mdx.ac.uk/staff/36/goals/');
  });

  // Test: Check the "All Goals" checkbox and perform other actions
  it('should check the "All Goals" checkbox and perform other actions', () => {
    // Check the "All Goals" checkbox
    cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });

    // Check the "All Groups" checkbox and specific group checkboxes
    cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
    cy.get('input#group_None').check({ force: true });
    cy.get('input#group_1').check({ force: true });
    cy.get('input#group_2').check({ force: true });

    // Check specific topic and goal checkboxes
    cy.get('input#topic_78').check({ force: true });
    cy.get('input#goal_1167').check({ force: true });

    cy.get('input#topic_79').check({ force: true });
    cy.get('input#goal_1168').check({ force: true });

    cy.get('input#topic_189').check({ force: true });
    cy.get('input#goal_1465').check({ force: true });

    // Uncheck the "Not observed" checkbox
    cy.get('input#not_observed').uncheck({ force: true });

          // Click the "Observe" button
    cy.get('button.btn-primary')
    .contains('Observe')
      .click();
      cy.wait(2000); // Delay for 1 second

    // Use a Cypress selector to locate the grade select element and select a grade
    cy.get('select[name="grade"]').select('5');

    cy.wait(1000); // Delay for 1 second

    // Assert that the selected grade is indeed '5'
    cy.get('select[name="grade"]').should('have.value', '5');
 

    // Assert that the spinner is hidden after clicking the button
    cy.get('.btn-danger .spinner-border').should('not.be.visible');

    cy.wait(1000); // Delay for 1 second

           // Click the "Unobserve" button
           cy.get('button.btn.btn-danger')
           .contains('Unobserve')
           .click();

           cy.wait(1000); // Delay for 1 second
  });


 

//    Test: No goal selected
  it('should undo an observation', () => {

      // Click the "Observe" button
    cy.get('button.btn-primary')
.contains('Observe')
.click();

cy.wait(2000); // Delay for 1 second
 
 
  });

  
     // Test:Expected by now only
  it('should check the "All Goals" checkbox and perform other actions', () => {
    // Check the "All Goals" checkbox
    cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });

    // Check the "All Groups" checkbox and specific group checkboxes
    cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
    cy.get('input#group_None').check({ force: true });
    cy.get('input#group_1').check({ force: true });
    cy.get('input#group_2').check({ force: true });

    // Check specific topic and goal checkboxes
    cy.get('input#topic_78').check({ force: true });
    cy.get('input#goal_1167').check({ force: true });

    cy.get('input#topic_79').check({ force: true });
    cy.get('input#goal_1168').check({ force: true });

    cy.get('input#topic_189').check({ force: true });
    cy.get('input#goal_1465').check({ force: true });

    // Uncheck the "Not observed" checkbox
    cy.get('input#not_observed').uncheck({ force: true });

    cy.wait(2000); // Delay for 1 second
    // Check the "Expected by now only" checkbox
cy.get('input[name="deadline_filter"][id="expected_ByNow"]').check({ force: true });

          // Click the "Observe" button
    cy.get('button.btn-primary')
    .contains('Observe')
      .click();
  

    // Assert that the spinner is hidden after clicking the button
    cy.get('.btn-danger .spinner-border').should('not.be.visible');

    cy.wait(1000); // Delay for 1 second
 

  });


  //    Test: Apple filter
  it('Apply filters" button', () => {

 // Click the "Apply filters" button
cy.get('button.btn.btn-primary.mt-2.w-100')
.contains('Apply filters')
.click();

// Check the "All Goals" checkbox
cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });

// Check the "All Groups" checkbox and specific group checkboxes
// cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
cy.get('input#group_None').check({ force: true });
cy.get('input#group_1').check({ force: true });
cy.get('input#group_2').check({ force: true });

// Check specific topic and goal checkboxes
cy.get('input#topic_78').check({ force: true });
cy.get('input#goal_1167').check({ force: true });

cy.get('input#topic_79').check({ force: true });
cy.get('input#goal_1168').check({ force: true });

cy.get('input#topic_189').check({ force: true });
cy.get('input#goal_1465').check({ force: true });

// Uncheck the "Not observed" checkbox
cy.get('input#not_observed').uncheck({ force: true });

cy.wait(2000); // Delay for 1 second
 
cy.wait(2000); // Delay for 1 second

 // Click the "Apply filters" button
 cy.get('button.btn.btn-primary.mt-2.w-100')
 .contains('Apply filters')
 .click();
});


 //    Test: Apple filter
 it('Apply filters on group" button', () => {

  // Click the "Apply filters" button
 cy.get('button.btn.btn-primary.mt-2.w-100')
 .contains('Apply filters')
 .click();
 
 // Check the "All Goals" checkbox
 cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
 
 // Check the "All Groups" checkbox and specific group checkboxes
 // cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
 // Uncheck the checkbox
 cy.get('input#level_Low').uncheck({ force: true });


 cy.get('input#group_None').check({ force: true });
 cy.get('input#group_1').check({ force: true });
 cy.get('input#group_2').check({ force: true });
 
 // Check specific topic and goal checkboxes
 cy.get('input#topic_78').check({ force: true });
 cy.get('input#goal_1167').check({ force: true });
 
 cy.get('input#topic_79').check({ force: true });
 cy.get('input#goal_1168').check({ force: true });
 
 cy.get('input#topic_189').check({ force: true });
 cy.get('input#goal_1465').check({ force: true });
 
 // Uncheck the "Not observed" checkbox
 cy.get('input#not_observed').uncheck({ force: true });
 
 cy.wait(2000); // Delay for 1 second
  
 
  // Click the "Apply filters" button
  cy.get('button.btn.btn-primary.mt-2.w-100')
  .contains('Apply filters')
  .click();
 });

  //    Test: Apple filter
  it('Apply filters on goal" button', () => {

    // Click the "Apply filters" button
   cy.get('button.btn.btn-primary.mt-2.w-100')
   .contains('Apply filters')
   .click();
   
   // Check the "All Goals" checkbox
   cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
   
   // Check the "All Groups" checkbox and specific group checkboxes
   // cy.get('input[type="checkbox"][name="all_groups"][id="all_groups"]').check({ force: true });
   // Uncheck the checkbox
   cy.get('input#level_Low').uncheck({ force: true });
  
  
   cy.get('input#group_None').check({ force: true });
   cy.get('input#group_1').check({ force: true });
   cy.get('input#group_2').check({ force: true });
   
   // Check specific topic and goal checkboxes
   cy.get('input#topic_78').uncheck({ force: true });
   cy.get('input#goal_1167').uncheck({ force: true });
   
   cy.get('input#topic_79').uncheck({ force: true });
   cy.get('input#goal_1168').uncheck({ force: true });
   
   cy.get('input#topic_189').check({ force: true });
   cy.get('input#goal_1465').check({ force: true });
   
   // Uncheck the "Not observed" checkbox
   cy.get('input#not_observed').uncheck({ force: true });
   
   cy.wait(1000); // Delay for 1 second
 
   
    // Click the "Apply filters" button
    cy.get('button.btn.btn-primary.mt-2.w-100')
    .contains('Apply filters')
    .click();
   });

    //    Test: Apple filter
  it('Apply filters on other goal" button', () => {

    // Click the "Apply filters" button
   cy.get('button.btn.btn-primary.mt-2.w-100')
   .contains('Apply filters')
   .click();
   
   // Check the "All Goals" checkbox
   cy.get('input[type="checkbox"][name="all_goals"][id="all_goals"]').check({ force: true });
 
 
   // Uncheck the checkbox
   cy.get('input#level_Medium').uncheck({ force: true });
   cy.get('input#level_Low').uncheck({ force: true });
  
   cy.get('input#group_None').check({ force: true });
   cy.get('input#group_1').check({ force: true });
   cy.get('input#group_2').check({ force: true });
   
   // Check specific topic and goal checkboxes
   cy.get('input#topic_78').uncheck({ force: true });
   cy.get('input#goal_1167').uncheck({ force: true });
   
   cy.get('input#topic_79').uncheck({ force: true });
   cy.get('input#goal_1168').uncheck({ force: true });
   
   cy.get('input#topic_189').check({ force: true });
   cy.get('input#goal_1465').check({ force: true });
   
   // Uncheck the "Not observed" checkbox
   cy.get('input#not_observed').uncheck({ force: true });
   
   cy.wait(1000); // Delay for 1 second
  
    // Click the "Apply filters" button
    cy.get('button.btn.btn-primary.mt-2.w-100')
    .contains('Apply filters')
    .click();
   });
});
 

 