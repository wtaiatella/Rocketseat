import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5em;
  }
`;

export const BaseCountDownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors["primary-foreground"]};
  padding: 1rem 2rem;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.125rem;
  cursor: pointer;
  outline: none;
  transition: filter 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StartCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors["primary-hover"]};
  }
`;

export const StopCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme.colors.backgroundStopButton};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.backgroundStopButtonHover};
  }
`;
