import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 700;

  span {
    background-color: ${({ theme }) => theme.colors.backgroundTimer};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
