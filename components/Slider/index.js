import React from 'react';
import ReactSlider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sliderSettings, colors } from 'settings';
import Card from '../Card';

const SliderWrapper = ({ data, className }) => {
  const renderCards = (quoteData, index) => {
    const { text, authorName } = quoteData;
    return (
      <Card
        isSingle
        key={index}
        quote={text}
        position={index + 1}
        author={authorName === '' ? <>&mdash;</> : authorName}
      />
    );
  };
  return data.length > 0 ? (
    <div className={className}>
      <ReactSlider {...sliderSettings}>
        {data.map(renderCards)}
      </ReactSlider>
    </div>
  ) : null;
};

const Slider = styled(SliderWrapper)`

  .slick-track {
    margin: 40px 0 40px;
  }

  .slick-slide {
    opacity: 0.6;
    transform: scale(0.92);
    transition: 0.4s ease;
    width: 780px;
  }

  .slick-active {
    opacity: 1;
    transition: 0.4s ease;
    transform: scale(1);
  }

  .slick-dots {

    li {
      button:before {
        opacity: 1;
        font-size: 28px;
        color: ${colors.iron};
      }

      &.slick-active {
        button:before {
          color: ${colors.edward};
        }
      }
    }
  }
`;

SliderWrapper.defaultProps = {
  className: '',
};

SliderWrapper.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    authorName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Slider;
