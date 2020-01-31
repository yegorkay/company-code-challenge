import React from 'react';
import PropTypes from 'prop-types';
import { Grommet } from 'grommet';
import { theme } from 'settings';

const ThemeContainer = ({ children }) => (
  <Grommet theme={theme}>{children}</Grommet>
);

ThemeContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ThemeContainer;
