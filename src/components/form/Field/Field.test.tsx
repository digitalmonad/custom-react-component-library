import { render, screen } from '@testing-library/react';
import { Field } from './Field.component';
import React from 'react';

jest.mock('../../../utils/hooks/useUniqueId');

describe('Field', () => {
  describe('Label', () => {
    test('applies unique ID for htmlFor attribute', () => {
      const testLabel = 'label';

      render(
        <Field>
          <Field.Label>{testLabel}</Field.Label>
        </Field>
      );

      expect(screen.getByText(testLabel)).toHaveAttribute('for', 'unique-id');
    });
  });

  describe('Input', () => {
    test('applies unique ID for htmlFor attribute', () => {
      const testLabel = 'input';

      render(
        <Field>
          <Field.Label>{testLabel}</Field.Label>
          <Field.Input />
        </Field>
      );

      expect(screen.getByLabelText(testLabel)).toHaveAttribute(
        'id',
        'unique-id'
      );
    });
  });

  describe('TextArea', () => {
    test('applies unique ID for htmlFor attribute', () => {
      const testLabel = 'textarea';

      render(
        <Field>
          <Field.Label>{testLabel}</Field.Label>
          <Field.TextArea />
        </Field>
      );

      expect(screen.getByLabelText(testLabel)).toHaveAttribute(
        'id',
        'unique-id'
      );
    });
  });
});
