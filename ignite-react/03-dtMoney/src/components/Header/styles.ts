import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.backgroundHeader};
  padding: 2.5rem 0 7.5rem;
  text-align: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  height: 3rem;
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-size: 1rem;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;
