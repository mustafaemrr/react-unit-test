import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Tests', () => {
  let increaseButton, decreaseButton, count;
  const setup = () => render(<Counter />);

  beforeEach(() => {
    setup();
    count = screen.getByText('0');
    decreaseButton = screen.getByText('Decrease');
    increaseButton = screen.getByText('Increase');
  });

  it('Decrease button', () => {    
    userEvent.click(decreaseButton);
    expect(count).toHaveTextContent('-1');
  });

  it('Increase button', () => {    
    userEvent.click(increaseButton);
    expect(count).toHaveTextContent('1');
  });
});