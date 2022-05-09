import React from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>(({ children, ...props }, ref) => (
  <button ref={ref} type="button" {...props}>
    {children}
  </button>
));

Button.displayName = 'Button';
