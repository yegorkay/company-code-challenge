/**
 * Global theme object.
 * Color names come from:
 * http://chir.ag/projects/name-that-color/
 */

const select = {
  icons: {
    color: 'edward',
  },
  options: {
    text: {
      color: 'edward',
    },
  },
};

const button = {
  border: {
    color: 'transparent',
    radius: '4px',
  },
  padding: {
    vertical: '20px',
  },
  primary: {
    color: 'red',
  },
};

const text = {
  xsmall: {
    size: '12px',
    height: '16px',
  },
  small: {
    size: '14px',
    height: '19px',
  },
  medium: {
    size: '16px',
    height: '21px',
  },
  large: {
    size: '20px',
    height: '27px',
  },
  xlarge: {
    size: '22.5px',
    height: '30px',
  },
};

const colors = {
  brand: '#EB5424',
  'athens-gray': '#F9F9FB',
  'mine-shaft': '#333333',
  edward: '#A5A8A8',
  iron: '#E3E5E7',
  scorpion: '#606060',
  cerulean: '#0D96C6',
  text: {
    light: 'mine-shaft',
  },
};

const global = {
  input: {
    weight: 400,
  },
  focus: {
    border: {
      color: 'brand',
    },
  },
  active: {
    background: {
      color: '#E3E5E7',
      opacity: '1',
    },
    color: '#333333',
  },
  font: {
    family: 'Fakt ProUI',
  },
  edgeSize: {
    medium: '20px',
    large: '32px',
    xlarge: '40px',
    xxlarge: '60px',
  },
  colors,
  elevation: {
    medium: '0px 5px 10px rgba(0, 0, 0, 0.1)',
  },
  round: {
    small: '4px',
  },
  control: {
    border: {
      color: 'iron',
    },
  },
};

const theme = {
  select,
  button,
  text,
  global,
};

export { theme, colors };
