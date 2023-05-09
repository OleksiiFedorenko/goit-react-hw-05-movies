import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  text-align: left;
  margin-top: 20px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const BackLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #362d62;

  &:hover,
  &:focus {
    color: #ff9400;
  }
`;
