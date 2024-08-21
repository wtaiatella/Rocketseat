import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  fontSizes: {
    primary: "12px",
    secondary: "16px",
    danger: "18px",
    success: "20px",
  },
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: none;
  margin: 8px;

  ${(props) => {
    if (props.variant === "primary") {
      return css`
        background-color: ${props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text};
      `;
    }
    if (props.variant === "secondary") {
      return css`
        background-color: ${props.theme.colors.secondary};
        font-size: ${buttonVariants.fontSizes.secondary};
      `;
    }
    if (props.variant === "danger") {
      return css`
        background-color: ${props.theme.colors.danger};
        font-size: ${buttonVariants.fontSizes.danger};
      `;
    }
    if (props.variant === "success") {
      return css`
        background-color: ${props.theme.colors.success};
        font-size: ${buttonVariants.fontSizes.success};
      `;
    }
  }};
`;
