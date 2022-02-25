import styled from '@emotion/styled';
import color from './randomColor';

export const StatisticItem = styled.li`
  width: 70px;
  height: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 25px;
  color: white;
  -webkit-text-stroke: 0.5px #000000;
  background-color: ${color};
`;
