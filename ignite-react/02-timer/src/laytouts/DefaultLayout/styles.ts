import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);

  padding: 2.5rem;
  margin: 5rem auto;

  background: ${({ theme }) => theme.colors.backgroundLayout};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
