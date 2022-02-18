import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('When button is pressed a new item is added', () => {
  render(<App />);

  const itemInput = screen.getByRole('textbox');

  userEvent.type(itemInput, 'Banana');

  const button = screen.getByRole('button', { name: /add item/i });

  userEvent.click(button);

  const item = screen.getByText('Banana');
});

test('The delete button removes an entry', () => {
  render(<App />);

  const button = screen.getByLabelText('Delete Meat');

  const item = screen.getByText('Meat');

  userEvent.click(button);

  expect(item).not.toBeInTheDocument('Meat');
});

test('The edit button changes an entry', () => {
  render(<App />);

  const button = screen.getByLabelText('Edit Meat');

  userEvent.click(button);

  const input = screen.getByDisplayValue('Meat');

  userEvent.type(input, 's');

  const saveButton = screen.getByLabelText('Save Button');

  userEvent.click(saveButton);

  const item = screen.getByText('Meats');
});

test('There are 3 list items at start and clear should remove', () => {
  render(<App />);

  const itemList = screen.getAllByRole('listitem');

  expect(itemList).toHaveLength(3);

  const button = screen.getByRole('button', {
    name: /clear/i,
  });

  userEvent.click(button);

  const clearList = screen.queryAllByRole('listitem');

  expect(clearList).toHaveLength(0);
});
