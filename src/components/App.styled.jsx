import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 50px;
`; //it's tagged template literal

export const FriendList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const StatisticUpload = styled.section`
  max-width: max-content;
  background-color: azure;
  padding-top: 15px;
  margin-top: 20px;
  border: 1px solid gray;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
}
`;

export const Transactions = styled.table`
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
