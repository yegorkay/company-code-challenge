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
  focusOnSelect: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'center',
  centerMode: true,
  centerPadding: 0,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        variableWidth: false,
      },
    },
  ],
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export {
  headerOptions, sortOptions, queryTypes, sliderSettings, device,
};
