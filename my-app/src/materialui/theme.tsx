import {createMuiTheme} from '@material-ui/core/styles'

const base = {
  palette: {
    primary: {
      light: '#ffffff',
      main: '#fff3e0',
      dark: '#ccc0ae',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ffddc1',
      main: '#ffab91',
      dark: '#c97b63',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: [
      "游明朝体", "Yu Mincho", "YuMincho", "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", "serif"
    ].join(','),
  },
};

const defaultTheme = createMuiTheme(  // #1
  Object.assign(base)
);

const mui = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: "3rem",
        [defaultTheme.breakpoints.down("xs")]: {
          fontSize: "2rem"
        }
      }
    }
  }
};

export const theme = mui;
