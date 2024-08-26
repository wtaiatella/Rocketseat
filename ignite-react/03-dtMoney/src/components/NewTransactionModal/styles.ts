import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0; /* top:0 botton:0 left:0 right:0*/
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.colors.background};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;

    input {
      padding: 1rem;
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors.backgroundInput};
      background: ${({ theme }) => theme.colors.backgroundInput};
      color: ${({ theme }) => theme.colors.text300};

      &::placeholder {
        color: ${({ theme }) => theme.colors.text300Placeholder};
      }
    }

    button[type="submit"] {
      height: 3.5rem;
      border: 0;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primaryForeground};
      border-radius: 6px;
      padding: 0 1.25rem;
      margin-top: 1.5rem;
      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme.colors.backgroundTransactionTypeButton};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.colors.text300};
  outline: none;

  &:focus {
    box-shadow: none;
  }

  svg {
    color: ${({ variant, theme }) => theme.colors[variant]};
  }

  &[data-state="unchecked"]:hover {
    background: ${({ theme }) =>
      theme.colors.backgroundTransactionTypeButtonHover};
  }

  &[data-state="checked"] {
    background: ${({ variant, theme }) => theme.colors[variant]};
    color: ${({ theme }) => theme.colors.primaryForeground};
    svg {
      color: ${({ theme }) => theme.colors.primaryForeground};
    }
  }
`;
