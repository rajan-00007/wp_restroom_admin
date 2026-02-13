import styled, { css } from "styled-components";
import { Button } from "@/components/ui/button";
import { GlobalStyles } from "@/components/styles/GlobalStyles";

const { colors, textSizes } = GlobalStyles;

/* Types */
type ButtonVariant = "primary" | "outline" | "soft" | "gradient" | "dark";

interface StyledButtonProps {
  width?: string;   // "40%", "100%"
  height?: string;  // "36px", "44px"
  variant?: ButtonVariant;
  radius?: string;
  $textSize?: number;
}

/* Variant Styles */
const variantStyles = {
  primary: css`
    background-color: ${colors.secondary.strong};
    /* border: 1px solid ${colors.secondary.main}; */
    color: ${colors.base.white};

    &:hover {
      background-color: ${colors.secondary.main};
    }
  `,

  outline: css`
    background-color: transparent;
    border: 2px solid ${colors.blue.main};
    color: ${colors.blue.strong};

/*     &:hover {
      background-color: ${colors.secondary.main};
      color: ${colors.base.white};
    } */
  `,

  soft: css`
    background-color: ${colors.neutral[300]};
    color: ${colors.neutral[700]};

    &:hover {
      background-color: ${colors.neutral[200]};
    }
  `,

  gradient: css`
    background: linear-gradient(
      90deg,
      ${colors.brand.primary.start},
      ${colors.brand.primary.end}
    );
    color: ${colors.base.white};

    &:hover {
      opacity: 0.9;
    }
  `,

  dark: css`
    background-color: ${colors.brand.primary.darkBackground};
    color: ${colors.base.white};

    &:hover {
      opacity: 0.9;
    }
  `,
};

/* Styled Button  */
export const StyledButton = styled(Button) <StyledButtonProps>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "38px"};

  padding: 0 18px;
  border-radius: ${({ radius }) => radius || "12px"};

  font-size: ${({ $textSize }) => $textSize ? `${$textSize}px` : `${textSizes.body.secondary}px`};
  font-weight: 500;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  transition: all 0.2s ease-in-out;

  ${({ variant }) => variantStyles[variant || "primary"]}

  &:disabled {
    background: ${colors.neutral[600]};
    color: ${colors.neutral[700]};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
