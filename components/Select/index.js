import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import styled from 'styled-components';
import { colors, device } from 'settings';


const SelectWrapper = (props) => {
  const {
    options, value, onChange, instanceId, className,
  } = props;
  return (
    <div className={className}>
      <ReactSelect
        value={value}
        options={options}
        onChange={onChange}
        isSearchable={false}
        instanceId={instanceId}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: colors.iron,
            primary: colors.brand,
          },
        })}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

const Select = styled(SelectWrapper)`
  width: ${(props) => props.secondary ? '25%' : '148px'};

  .react-select {

    &__single-value {
      font-size: 16px;
      line-height: 21px;
    }

    &__control {
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
      border-bottom-right-radius: ${(props) => (props.secondary ? 0 : '4px')};
      border-top-right-radius: ${(props) => (props.secondary ? 0 : '4px')};

      background: ${(props) => props.secondary ? colors['athens-gray'] : 'white'};

      ${(props) => props.secondary && `
        border-right: 1px solid ${colors.iron};
        border-left: none;
        border-top: none;
        border-bottom: none;
        &:hover {
          border-right-color: ${colors.iron};
        }
      `}
    }
    &__indicator {
      color: ${colors.edward};
    }
    &__indicator-separator {
      display: none;
    }
    &__single-value {
      color: ${colors.edward};
    }
    &__value-container {
      margin: 0 0 0 16px;
    }
    &__option {
      text-align: center;
    }
  }

  ${(props) => props.secondary && `
    @media ${device.tablet} {
      width: 120px;
    }
    @media ${device.mobileS} {
      width: 95px;
    }
  `}
`;

SelectWrapper.defaultProps = {
  className: '',
};

SelectWrapper.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
  })).isRequired,
  value: PropTypes.objectOf({
    value: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
  }).isRequired,
  instanceId: PropTypes.number.isRequired,
};

export default Select;
