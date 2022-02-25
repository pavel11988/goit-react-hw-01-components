import styled from '@emotion/styled';

// * {
//     padding: 0;
//     margin: 0;
// }

export const Card = styled.div`
  width: 300px;
  border: 1px solid rgb(107, 107, 107);
  border-radius: 10px;
  margin-top: 30px;
`;

export const Info = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  background-color: rgb(89, 170, 195);
`;

export const Username = styled.p`
  font-size: large;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: gray;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  color: gray;
  margin-bottom: 10px;
`;

export const StatisticList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: rgb(224, 224, 224);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StatisticItem = styled.li`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
  border-top: 1px solid grey;
  color: rgb(98, 98, 98);
`;

export const StatisticValue = styled.span`
  margin-top: 5px;
  color: black;
  font-size: large;
  font-weight: 700;
`;
