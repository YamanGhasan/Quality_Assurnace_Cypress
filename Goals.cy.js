describe('Goals', () => {
    it('should check the "All Goals" checkbox', () => {
      // تسجيل الدخول كستاف
      cy.visit('https://goal-dev.mdx.ac.uk/accounts/login');
      cy.get('[name="login_as"]').select('staff');
      cy.get('#id_username').type('LeenBarri');
      cy.get('#id_password').type('159951leen@');
      cy.get('form').submit();
  
      
      cy.url().should('not.include', 'accounts/login');
      cy.url().should('include', '/staff/');
  
      // اختيالا الموديل
      cy.contains('.list-group-item', 'GroupQ/Nablus: GroupQ')
        .find('a.nav-link')
        .click();
        // بعد تسجيل الدخول  يقوم بالانتقال إلى صفحة الجول
  cy.visit('https://goal-dev.mdx.ac.uk/staff/36/staffs/') // URL الجول
  cy.url().should('include', '/staffs');
  cy.contains('Add staff').click(); //  الضغط على الزر اضافة staff 
  cy.get('#new_staff').type('admin'); // اختيار اسم الستاف
  cy.contains('Add staff').click();// اضافته
  cy.contains('admin').should('exist') ; // للتحقق من وجود عنصر او لا 
  cy.get('#staff_LeenBarri > .sorting_1').click();
  cy.get('.dtr-data > .row > :nth-child(1) > a').click();
  cy.get('#edit_staff_LeenBarri > :nth-child(4) > .textinput').type('Leen');// لتعديل او اضافة الاسم الاول
  cy.get('#edit_staff_LeenBarri > :nth-child(5) > .textinput').type('Barri');// لتعديل او اضافة الاسم التاني
  cy.get('#edit_staff_LeenBarri > :nth-child(6) > .textinput').type('s12010268@stu.najah.edu');// لتعديل او اضافة الايميل
  cy.get('#staff_admin > .sorting_1').click();// للوصول الى التعديل او الحدف للستاف ادمن
  cy.get('.dtr-data > .row > :nth-child(2) > [data-href="admin"]').click(); // الضغط ع حذف
  cy.get('#confirm-delete > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click(); //الضغط على ريموف وتاكيد الحدف

  cy.contains('Search').click(); // البحث عن ستاف معين
  cy.get('label > .form-control').type('LeenBarri');// البحث عن ستاف لين
  cy.visit('https://goal-dev.mdx.ac.uk/staff/36/academic/'); // الانتقال الى صفحة academic
  cy.get('.col-sm-2 > .btn').click();// اضافة weak
  cy.get('#delete_5').click();// حدف weak
  cy.get('#save_calendar').click();// حفظ التغيرات
  cy.get('.modal-footer > .btn').click();
  cy.get('#week_3').click();// تغيرالتاريخ
  cy.get('#save_calendar').click();// حفظ التغيرات

  

})
    })