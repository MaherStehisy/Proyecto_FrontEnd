import { createMuiTheme } from '@material-ui/core/styles';
import Purple from '@material-ui/core/colors/deepPurple';

export default createMuiTheme({
  spacing: 4,
  palette: {
    primary: Purple,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontSize: 12,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});