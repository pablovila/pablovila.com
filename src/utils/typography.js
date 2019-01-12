import Typography from 'typography'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'
import { COLORS } from '../styles/constants'

const typography = new Typography({
  baseFontSize: '19px',
  baseLineHeight: 1.58,
  googleFonts: [
    {
      name: 'Roboto Slab',
      styles: ['700'],
    },
    {
      name: 'Roboto',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Roboto Slab', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.73)',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = '#b22222'
    const vr = verticalRhythm({
      baseFontSize: '17px',
      baseLineHeight: '28px',
    })
    return {
      a: {
        color: 'hsla(0,0%,0%,0.73)',
        backgroundColor: 'transparent',
        borderBottom: `2px solid ${linkColor}`,
        textDecoration: 'none',
        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
      },
      'a:hover,a:active': {
        backgroundColor: 'rgba(178, 34, 34, 0.5)',
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(2),
      },
      // children ol, ul
      'li>ol,li>ul': {
        marginLeft: '20px',
        marginBottom: 0,
      },
      strong: {
        color: `${COLORS.red}`,
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
        color: gray(35),
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
          color: gray(41),
          paddingLeft: rhythm(9 / 16),
          fontStyle: 'italic',
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
        },
      },
    }
  },
})

export default typography
