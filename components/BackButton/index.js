import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';
import styled from 'styled-components';
import { colors, device } from 'settings';
import Arrow from './arrow.svg';

const BackButtonWrapper = ({ onClick, className }) => (
  <Button className={className} role="link" onClick={onClick}><Arrow />Go Back</Button>
);

BackButtonWrapper.defaultProps = {
  className: '',
};

BackButtonWrapper.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const BackButton = styled(BackButtonWrapper)`
  color: ${colors.cerulean};
  display: inline-flex;
  align-items: center;
  max-width: 100px;
  font-size: 16px;
  line-height: 21px;

  svg {
    margin: 0 17px 0 0;
  }

  @media ${device.tablet} {
    margin: 0 0 20px;
  }
`;

export default BackButton;
