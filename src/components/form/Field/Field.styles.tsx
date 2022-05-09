import styled from 'styled-components';
import { transparentize } from 'polished';
import {
  SECONDARY_TEXT_COLOR,
  PRIMARY_COLOR,
  DISABLED_OPACITY,
} from '../../../tokens/colors';

export const StyledLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.4rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${SECONDARY_TEXT_COLOR};
  background-color: transparent;
  border: 1px solid ${PRIMARY_COLOR};
  appearance: none;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${PRIMARY_COLOR};
    box-shadow: 0 0 0 0.2rem ${transparentize(0.75, PRIMARY_COLOR)};
  }

  &:disabled {
    opacity: ${DISABLED_OPACITY};
  }
`;

export const StyledTextArea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})<{ isResizable?: boolean }>`
  resize: ${({ isResizable }) => !isResizable && 'none'};
`;
