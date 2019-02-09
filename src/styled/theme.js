
const primary = '#236167'
const primaryDark = '#044046'
const greyLight = '#DAE7E8'
const greyDark = '#AAB7B8'
const fontSizes = [
  12, 16, 18, 22, 26, 36, 48, 58
]
const space = [
  0, 4, 8, 16, 32, 64, 128, 256
]

const serif = '"Maitree", system-ui, sans-serif'
const sans = '"Hind", system-ui, sans-serif'

export default {
  ...fontSizes,
  ...space,
  fonts: { sans, serif },
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    primary: primary,
    primaryDark: primaryDark,
    greyLight: greyLight,
    greyDark: greyDark,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .225)',
    large: '0 0 24px rgba(0, 0, 0, .225)'
  },
  Button: {
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: fontSizes[2],
    paddingTop: space[3],
    paddingBottom: space[3],
    paddingLeft: space[4],
    paddingRight: space[4],
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: primary,
      '&:hover': {
        color: '#fff',
        backgroundColor: primaryDark,
      }
    },
    white: {
      color: '#fff',
      backgroundColor: 'rgba(255,255,255,0.2)',
      boxShadow: 'inset 0 0 0 2px',
      fontWeight: 400,
      '&:hover': {
        color: primary,
        backgroundColor: '#fff'
      }
    }
  },
  cards: {
    grey: {
      backgroundColor: greyLight,
    },
    pricing: {
      border: '3px solid ' + primary,
      padding: space[4],
      textAlign: 'center',
    },
    primary: {
      border: '3px solid ' + primary,
      padding: space[4],
      textAlign: 'center',
      backgroundColor: primary,
      color: 'white',
      boxShadow: '0 0 24px rgba(0, 0, 0, .125)',
    }
  },
  Heading: {
    fontFamily: serif
  },
  headings: {
    h1: {
      fontSize: fontSizes[6],
      fontWeight: 700,
    },
    h2: {
      fontSize: fontSizes[5],
      fontWeight: 700,
    },
    h3: {
      fontSize: fontSizes[4],
      fontWeight: 700,
    },
    h4: {
      fontSize: fontSizes[2],
      fontWeight: 700,
    }
  },
  icons: {
    defaultDisplay: 'flex',
    defaultSize: '16px',
    sizeMini: '16px',
    sizeMedium: '32px',
    sizeLarge: '64px'
  }
}