export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '660px',
  tabletL: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
} as const

export const defaultTheme = {
  white: '#fff',

  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
  'gray-400': '#8D8D99',
  'gray-500': '#7C7C8A',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-900': '#121214',

  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-300': '#F75A68',
  'red-500': '#AB222E',
  'red-700': '#7A1921',

  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tablet: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
} as const
