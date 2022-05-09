import { render, screen } from '@testing-library/react';
import { Button } from './Button.component';
import React from 'react';

describe('Button', () => {
  test('applies default type of button', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  test('applies specific type if provided', () => {
    const testAttributeValue = 'submit';
    render(<Button type={testAttributeValue}>Click</Button>);

    expect(screen.getByRole('button')).toHaveAttribute(
      'type',
      testAttributeValue
    );
  });

  test('applies valid atribute to element', () => {
    const testAttributeValue = 'test';
    render(<Button aria-label={testAttributeValue}>Click</Button>);

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      testAttributeValue
    );
  });
});
