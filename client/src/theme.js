import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#457ba0',
      main: '#074f71',
      dark: '#002745',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffe467',
      main: '#fab234',
      dark: '#c28300',
      contrastText: '#000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
