import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { textSizes } from "../../../styles/typography";

interface StyledInputProps {
  height?: number;
}

export const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  height: ${({ height }) => (height ? `${height}px` : "45px")};
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${colors.neutral[700]};
  background-color: ${colors.base.white};
  padding: 18px 16px;
  font-size: ${textSizes.ui.primaryButton}px;
  color: ${colors.neutral[800]};
  font-weight:400;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${colors.neutral[700]};
  }

  &:focus {
    border-color: ${colors.brand.primary.start};
    box-shadow: 0 0 0 2px ${colors.brand.primary.start}33;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: ${colors.neutral[100]};
  }

  &[type="file"] {
    border: 0;
    background-color: transparent;
    font-size: ${textSizes.body.secondary}px;
    font-weight: 500;
  }
`;
