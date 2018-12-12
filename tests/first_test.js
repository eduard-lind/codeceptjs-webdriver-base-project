Feature('TodoMvc');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Create todo item', (I) => {
  I.waitForText('Helping you select an MV* framework');
  I.click('React');
  I.waitForVisible('input.new-todo');
  I.fillField('What needs to be done?', 'Write a guide');
  I.pressKey('Enter');
  I.see('Write a guide', '.todo-list');
  I.see('1 item left', '.todo-count');
});
