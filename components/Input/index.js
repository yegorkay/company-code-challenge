import React from 'react'; // eslint-disable-line no-unused-vars
import { TextInput } from 'grommet';
import styled from 'styled-components';
import { colors } from 'settings';

const Input = styled(TextInput)`
  width: 100%;
  font-size: 16px;
  line-height: 21px;
  border-radius: 0;
  [contenteditable] {
    caret-color: ${colors.cerulean};
  }
`;

export default Input;
