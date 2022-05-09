import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from './Field.component';

export default {
  title: 'Components/form/Field/TextArea',
  component: Field.TextArea,
  subcomponents: { Field, label: Field.Label },
} as Meta;

export const Default: Story = ({ ...props }) => {
  return (
    <Field>
      <Field.Label>TextArea</Field.Label>
      <Field.TextArea {...props} />
    </Field>
  );
};

Default.args = {
  placeholder: 'Placeholder content',
  isResizable: true,
};
