const queryTypes = {
  author: 'authorName',
  page: 'page',
  quote: 'text',
};

const headerOptions = [
  { value: queryTypes.author, label: 'Author' },
  { value: queryTypes.quote, label: 'Quote' },
];

const sortOptions = [
  { value: queryTypes.author, label: 'Author: A-Z' },
  { value: `-${queryTypes.author}`, label: 'Author: Z-A' },
  { value: queryTypes.quote, label: 'Quotes: A-Z' },
  { value: `-${queryTypes.quote}`, label: 'Quotes: Z-A' },
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'center',
  centerMode: true,
  centerPadding: '60px',
  variableWidth: true,
};

export {
  headerOptions, sortOptions, queryTypes, sliderSettings,
};
