import styled, { css } from 'styled-components';
import {
  DANGER_COLOR,
  DANGER_TEXT_COLOR,
  DISABLED_OPACITY,
  SECONDARY_TEXT_COLOR,
  SECONDARY_COLOR,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../../tokens/colors';
import { transparentize } from 'polished';
import { ButtonPropsT } from './Button.component';

const colorStyles = ({ variant }: ButtonPropsT) => {
  let color = SECONDARY_TEXT_COLOR,
    backgroundColor = SECONDARY_COLOR;

  if (variant === 'primary') {
    color = PRIMARY_TEXT_COLOR;
    backgroundColor = PRIMARY_COLOR;
  } else if (variant === 'danger') {
    color = DANGER_TEXT_COLOR;
    backgroundColor = DANGER_COLOR;
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${backgroundColor};

    &:focus-visible {
      border-color: ${color};
      box-shadow: 0 0 0 0.2rem ${transparentize(0.45, backgroundColor)};
    }
  `;
};

export const StyledButton = styled.button<ButtonPropsT>`
  cursor: pointer;
  display: ${({ fullWidth }) => (fullWidth ? 'block' : 'inline-block')};
  width: ${({ fullWidth }) => fullWidth && '100%'};
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0.25rem 0.5rem';

      case 'medium':
        return '0.4rem 0.75rem';

      case 'large':
        return '0.5rem 1rem';
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0.875rem';

      case 'medium':
        return '1rem';

      case 'large':
        return '1.25rem';
    }
  }};
  line-height: 1.5;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: inherit;
    opacity: ${DISABLED_OPACITY};
  }

  ${colorStyles}
`;
