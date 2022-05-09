import React, { useContext } from 'react';
import { StyledLabel } from '../Field.styles';
import { FieldContext } from '../../../../utils/context/fieldContext';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);
  return <StyledLabel ref={ref} htmlFor={id} {...props} />;
});

Label.displayName = 'Field.Label';
