import React from 'react';
import { StyledButton } from './Button.styles';
import PropsTypes from 'prop-types';

export interface ButtonPropsT extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonPropsT>(
  ({ children, variant, size, fullWidth, ...props }, ref) => (
    <StyledButton
      ref={ref}
      type="button"
      {...{ variant, size, fullWidth }}
      {...props}
    >
      {children}
    </StyledButton>
  )
);

Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  fullWidth: true,
};
Button.propTypes = {
  variant: PropsTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropsTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropsTypes.bool,
};
