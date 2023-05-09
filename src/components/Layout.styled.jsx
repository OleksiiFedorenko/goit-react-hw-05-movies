import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainMenu = styled.ul`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 40px;
  margin-bottom: 0;
  margin-top: 0;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 6px;
  padding-bottom: 6px;
  list-style: none;
  background-color: #362d62;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MenuLink = styled(NavLink)`
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  color: #ceccf4;

  &:hover,
  &:focus {
    color: #ff9400;
  }

  &.active {
    color: #fff;
    text-decoration: overline;
  }
`;
