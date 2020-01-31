import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from 'settings';
import CaretIcon from './caret.svg';

const Caret = styled(CaretIcon)`
  position: absolute;
  right: 12px;
  top: 46%;
`;

const SelectContainer = (props) => {
  const {
    onChange, value, name, options, className,
  } = props;
  const [selectedOption = value, setSelectedOption] = React.useState(options[0].value);
  return (
    <div className={className}>
      <select
        name={name}
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
          onChange(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Caret />
    </div>
  );
};

const Select = styled(SelectContainer)`
  position: relative;
  height: 100%;

  select {
    height: 100%;
    padding: 9px 30px 9px 20px;

    font-size: 16px;
    line-height: 21px;

    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: ${(props) => (props.secondary ? 0 : '4px')};
    border-top-right-radius: ${(props) => (props.secondary ? 0 : '4px')};

    letter-spacing: 0.5px;
    color: ${colors.edward};

    border: 1px solid
      ${(props) => (props.secondary ? colors['athens-gray'] : colors.iron)};
    background: ${(props) => props.secondary ? colors['athens-gray'] : 'white'};

    -webkit-appearance: none;

    &:focus,
    &:active {
      outline: none;
      box-shadow: 0 0 3px 2px ${colors.brand};
    }
  }
`;

SelectContainer.defaultProps = {
  className: '',
};

SelectContainer.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
