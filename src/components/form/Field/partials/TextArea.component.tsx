import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledTextArea } from '../Field.styles';
import { FieldContext } from '../../../../utils/context/fieldContext';

export interface TextAreaPropsT
  extends React.ComponentPropsWithRef<'textarea'> {
  isResizable?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaPropsT>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext);
    return <StyledTextArea ref={ref} {...{ id, isResizable }} {...props} />;
  }
);

TextArea.displayName = 'Field.Input';
TextArea.defaultProps = {
  isResizable: false,
};

TextArea.propTypes = {
  isResizable: PropTypes.bool,
};
