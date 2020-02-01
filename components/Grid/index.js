import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { device } from 'settings';

const Grid = styled.section`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(356px,1fr));
  grid-gap: 32px 32px;
  grid-auto-rows: minmax(308px, 1fr);

  @media ${device.mobileM} {
    grid-template-columns: none;
    grid-gap: 20px;
  }
`;

export default Grid;
