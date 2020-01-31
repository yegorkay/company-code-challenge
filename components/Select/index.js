import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import styled from 'styled-components';
import { colors } from 'settings';


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
  width: ${(props) => props.secondary ? '112px' : '148px'};;

  .react-select {

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
    &__indicator-separator {
      display: none;
    }
    &__single-value {
      color: ${colors.edward};
    }
  }
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
  value: PropTypes.string.isRequired,
  instanceId: PropTypes.number.isRequired,
};

export default Select;
