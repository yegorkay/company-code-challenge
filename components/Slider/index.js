import React from 'react';
import ReactSlider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sliderSettings, colors, device } from 'settings';
import Card from '../Card';

const SliderWrapper = ({ data, className, id }) => {
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

  const foundSlide = data.findIndex((quote) => quote.id === parseInt(id, 0));

  if (foundSlide === 0) {
    return (
      <div className={className}>
        <ReactSlider initialSlide={foundSlide} {...sliderSettings}>
          {data.map(renderCards)}
        </ReactSlider>
      </div>
    );
  }

  return data.length > 0 && foundSlide > 0 ? (
    <div className={className}>
      <ReactSlider initialSlide={foundSlide} {...sliderSettings}>
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
    width: 768px;

    @media ${device.tablet} {
      height: auto;
      transform: scale(1);
      opacity: 0;
    }
  }

  .slick-active {
    opacity: 1;
    transition: 0.4s ease;
    transform: scale(1);
  }

  .slick-list {
    @media ${device.tablet} {
      margin: 0 20px;
    }
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

      @media ${device.tablet} {
        bottom: 0;
        margin: -2px;

        button:before {
          font-size: 24px;
        }
      }
    }
  }
`;

SliderWrapper.defaultProps = {
  className: '',
  id: 0,
};

SliderWrapper.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    authorName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  id: PropTypes.number,
};

export default Slider;
