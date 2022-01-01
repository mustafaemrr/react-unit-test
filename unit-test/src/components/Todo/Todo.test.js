import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from '.';

describe('Todo Tests', () => {
  let button, input;

  beforeEach(() => {
    render(<Todo/>);

    button = screen.getByText('Add');
    input = screen.getByLabelText('Text');
  });

  it('Default objects should be displayed on the screen.', () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });

  it('Input and button should be on the screen', () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('The value entered in the input should be added to the list', () => {
    const data = 'Item 4';

    userEvent.type(input, data);
    userEvent.click(button);

    expect(screen.getByText(data)).toBeInTheDocument();
  });
});