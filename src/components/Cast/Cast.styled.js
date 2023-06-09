import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  text-align: center;
`;
