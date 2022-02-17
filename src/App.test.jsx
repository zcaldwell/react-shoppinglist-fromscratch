import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('When button is pressed a new item is added', () => {
  render(<App />);

  const itemInput = screen.getByRole('textbox');
  expect(itemInput).toBeInTheDocument();

  userEvent.type(itemInput, 'Banana');
  expect(itemInput.value).toBe('Banana');

  const button = screen.getByRole('button', { name: /add item/i });
  expect(button).toBeInTheDocument();

  userEvent.click(button);
  const item = screen.getByText('Banana');
  expect(item).toBeInTheDocument();
});
