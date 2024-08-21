import styled from "styled-components";

export const HistoryContainer = styled.main`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5;
    margin-bottom: 1rem;
  }
`;

export const HistoryList = styled.ul`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      text-align: left;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.backgroundTableHeader};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme.colors.backgroundTableRow};
      border-top: 4px solid ${({ theme }) => theme.colors.backgroundTableBorder};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 45%;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }

    tr {
      &:last-child {
        td {
          &:first-child {
            border-bottom-left-radius: 8px;
          }
          &:last-child {
            border-bottom-right-radius: 8px;
          }
        }
      }
    }
  }
`;

type StatusVariant = "Completed" | "Canceled" | "In Progress";

interface StatusProps {
  variant: StatusVariant;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors[props.variant]};
  }
`;
