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
const mui = {
};
export const theme = createMuiTheme(  // #1
  Object.assign(base, mui)
);