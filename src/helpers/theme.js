import { createMuiTheme, colors } from '@material-ui/core';
import { ptBR as ptbr } from '@material-ui/core/locale';

const defaultTheme = createMuiTheme();

const white = '#ffffff';
const black = '#000000';

const overrides = {
  MuiToolbar: {
    gutters: {
      [defaultTheme.breakpoints.up('sm')]: {
        paddingLeft: 12,
        paddingRight: 12,
      },
    },
  },
};

const palette = {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[800],
    light: colors.green[100],
  },
  warning: {
    contrastText: white,
    dark: colors.teal[900],
    main: colors.teal[500],
    light: colors.teal[100],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.grey[900],
    secondary: colors.grey[50],
    link: colors.teal[600],
  },
  icon: colors.grey[600],
  divider: colors.grey[200],
};

const typography = {
  h1: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px',
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px',
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '24px',
    letterSpacing: '-0.06px',
    lineHeight: '28px',
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px',
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '30px',
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body1: {
    color: palette.text.primary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body2: {
    color: palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px',
  },
  button: {
    color: palette.text.primary,
    fontSize: '14px',
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px',
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase',
  },
};

const theme = createMuiTheme(
  {
    overrides,
    palette,
    typography,
  },
  ptbr
);

export default theme;
