import styled from '@emotion/styled';

export const Card = styled.li`
  list-style: none;
  display: flex;

  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  width: 500px;

  align-items: center;
  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const StatusOnline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: green;
`;

export const StatusOffline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 10px;
  border: 1px solid black;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Name = styled.h2``;
