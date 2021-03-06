import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HomePage from './screens/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0055D4',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: '#fff',
    },
    secondary: {
      light: '#257BFA',
      main: '#ffffff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#53905F',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    backgroundColor: '#F1F4F9'
  },
});

function App() {
  return (
    <div style={{ backgroundColor: '#F1F4F9' }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
