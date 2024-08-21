import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;

  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.text};
  font-size: inherit;
  font-weight: bold;
  padding: 0 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.shadow};
  }

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important; /* Remove the calendar icon */
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
