Feature('TodoMvc');

Before((I) => {
  I.amOnPage('/');
});

Scenario('create todo item', (I) => {
  I.fillField('What needs to be done?', 'Write a guide');
  I.pressKey('Enter');
  I.see('Write a guide', '.todo-list');
  I.see('1 item left', '.todo-count');
});
