Feature('First steps in TodoMvc');

Scenario('Navigate to TODOList main page', (I) => {
  I.amOnPage('/');
  I.waitForText('Helping you select an MV* framework');
  I.click('React');
  I.saveScreenshot('FirstTestResult.png');
});

Scenario('Create a todo list', (I) => {
  I.amOnPage('/');
  I.waitForText('Helping you select an MV* framework');
  I.click('React');
  I.waitForVisible('input.new-todo');
  I.fillField('What needs to be done?', 'first');
  I.pressKey('Enter');
  I.waitForText('first', 5, 'ul.todo-list li label');

  I.fillField('What needs to be done?', 'second');
  I.pressKey('Enter');
  I.waitForText('second', 5, 'ul.todo-list li label');

  I.fillField('What needs to be done?', 'third');
  I.pressKey('Enter');
  I.waitForText('third', 5, 'ul.todo-list li label');

  I.saveScreenshot('FirstTestResult.png');
});
