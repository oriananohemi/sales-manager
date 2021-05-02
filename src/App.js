import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Router from './router/Router';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222053"
    },
    secondary: {
      main: "#76ec9a"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
