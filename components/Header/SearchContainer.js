import React from 'react'; // eslint-disable-line no-unused-vars
import { Box } from 'grommet';
import styled from 'styled-components';
import { device } from 'settings';

const SearchContainer = styled(Box)`
  width: 478px;
  border-radius: 4px;
  height: 40px;

  form {
    width: 75%;
    display: flex;
    position: relative;

    button {
      position: absolute;
      top: 52%;
      right: -4px;
      padding: 0 8px;
      transform: translate(-50%, -50%);
    }

    @media ${device.tablet} {
      width: calc(100% - 120px);
    }

    @media ${device.mobileS} {
      width: calc(100% - 95px);
    }
  }

  @media ${device.tablet} {
    width: 100%;
    border-radius: 0;
    background: white;

    ${(props) => props.showSearch
    ? `
      position: relative;
      `
    : `
      position: absolute;
      bottom: 0;
      z-index: -1;
    `};
  }
`;

export default SearchContainer;
