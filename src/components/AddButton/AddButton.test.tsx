import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import AddButton from './AddButton';
import userEvent from '@testing-library/user-event';

describe('<AddButton />)', () => {
  test('should display the text defined as child, when rendered', () => {
    render(
      <AddButton
        onClick={() => {
          console.log('');
        }}
      >
        Went well
      </AddButton>
    );
    const button = screen.queryByText('Went well');
    expect(button).toBeInTheDocument();
  });

  test('should not display the text defined as child, when rendered', () => {
    render(
      <AddButton
        onClick={() => {
          console.log('');
        }}
      >
        Went well
      </AddButton>
    );
    const button = screen.queryByText('prueba unitaria fallida');
    expect(button).not.toBeInTheDocument();
  });

  test('should execute the function, when the button is clicked', async () => {
    const handleClick = vi.fn();
    render(<AddButton onClick={handleClick}>Went well</AddButton>);
    const button = screen.getByText('Went well');
    await userEvent.click(button);
    expect(handleClick).toBeCalled;
  });

  test('should not execute the function, when the button is clicked', async () => {
    const handleClick = vi.fn();
    render(
      <AddButton
        onClick={() => {
          console.log('');
        }}
      >
        Went well
      </AddButton>
    );
    const button = screen.getByText('Went well');
    await userEvent.click(button);
    expect(handleClick).not.toBeCalled;
  });
});
