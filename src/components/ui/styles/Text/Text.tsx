import React from "react";
import { StyledText, variants, TextProps } from "./Text.Styled";

// Use -> <Text props... >Hello </Text>

const Text: React.FC<TextProps> = ({
  variant = "bodyPrimary",
  children,
  color,
  weight,
  align,
  lineHeight,
  as,
}) => {
  const { tag, size } = variants[variant];

  const ComponentTag = as || tag;

  return (
    <StyledText
      as={ComponentTag}
      size={size}
      color={color}
      weight={weight}
      align={align}
      lineHeight={lineHeight}
    >
      {children}
    </StyledText>
  );
};

export default Text;
