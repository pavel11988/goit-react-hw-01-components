import styled from '@emotion/styled';

export const Table = styled.table`
  border: 1px solid black;
  width: 500px;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const TransactionsNames = styled.thead`
  text-align: center;
  & > th {
    border: 1px solid black;
    background-color: purple;
    color: white;
  }
`;

export const TransactionsValues = styled.tbody`
  text-align: center;
`;
