import React, { useContext } from 'react';
import { StyledInput } from '../Field.styles';
import { FieldContext } from '../../../utils/context/fieldContext';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<'input'>
>((props, ref) => {
  const id = useContext(FieldContext);
  return <StyledInput ref={ref} {...{ id }} {...props} />;
});

Input.displayName = 'Field.Input';
