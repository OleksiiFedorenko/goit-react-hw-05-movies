import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-left: 216px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  list-style: none;
  padding-left: 0;
`;

export const InfoLink = styled(Link)`
  color: #362d62;

  &:hover,
  &:focus {
    color: #ff9400;
  }
`;
