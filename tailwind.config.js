/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        h1: '2.25rem',
        h2: '1.875rem',
        h3: '1.5rem',
        h4: '1.125rem',
        p1: '1rem',
        p2: '.875rem',
        p3: '.75rem',
        p4: '.625rem'
      },
      boxShadow: {
        'base': '0px 2px 12px 0px rgba(0, 0, 0, 0.12)',
      }
    },
    colors: {
      'base-black': '#000000',
      'base-white': '#ffffff',

      'tertiary-100': 'rgba(255, 0, 36, 1)',
      'tertiary-090': 'rgba(255, 0, 36, 0.9)',
      'tertiary-070': 'rgba(255, 0, 36, 0.7)',
      'tertiary-050': 'rgba(255, 0, 36, 0.5)',
      'tertiary-030': 'rgba(255, 0, 36, 0.3)',
      'tertiary-015': 'rgba(255, 0, 36, 0.15)',
      'tertiary-007': 'rgba(255, 0, 36, 0.07)',

      'secondary-100': 'rgba(255, 128, 0, 1)',
      'secondary-090': 'rgba(255, 128, 0, 0.9)',
      'secondary-070': 'rgba(255, 128, 0, 0.7)',
      'secondary-050': 'rgba(255, 128, 0, 0.5)',
      'secondary-030': 'rgba(255, 128, 0, 0.3)',
      'secondary-015': 'rgba(255, 128, 0, 0.15)',
      'secondary-007': 'rgba(255, 128, 0, 0.07)',

      'primary-100': 'rgba(255, 206, 0, 1)',
      'primary-090': 'rgba(255, 206, 0, 0.9)',
      'primary-070': 'rgba(255, 206, 0, 0.7)',
      'primary-050': 'rgba(255, 206, 0, 0.5)',
      'primary-030': 'rgba(255, 206, 0, 0.3)',
      'primary-015': 'rgba(255, 206, 0, 0.15)',
      'primary-007': 'rgba(255, 206, 0, 0.07)',

      'gray-100': 'rgba(0, 0, 0, 1)',
      'gray-090': 'rgba(0, 0, 0, 0.9)',
      'gray-070': 'rgba(0, 0, 0, 0.7)',
      'gray-050': 'rgba(0, 0, 0, 0.5)',
      'gray-030': 'rgba(0, 0, 0, 0.3)',
      'gray-015': 'rgba(0, 0, 0, 0.15)',
      'gray-007': 'rgba(0, 0, 0, 0.07)',
      'gray-003': 'rgba(0, 0, 0, 0.03)',

      'beige-100': 'rgba(214, 195, 128, 1)',

      'green-100': 'rgba(17, 85, 0, 1)',

      'success-dark': '#13624D',
      'success-base': '#35A688',
      'success-light': '#8BEED3',

      'warning-dark': '#D1BD02',
      'warning-base': '#F7E330',
      'warning-light': '#FFF595',

      'error-dark': '#C53019',
      'error-base': '#F35139',
      'error-light': '#FAC0B7',

      'info-dark': '#156AB8',
      'info-base': '#39B0F3',
      'info-light': '#B9E3FB'
    },
    maxHeight: {
      '530': '530px',
    },
    backgroundImage: {
      'radial-gradient': 'radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%)',
    },
    screens: {
      'mobile': {
        'max': '768px'
      },
    },
  },
  plugins: []
}
