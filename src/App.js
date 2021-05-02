import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Router from './router/Router';
import './App.css';

import Header from './components/Header';

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
      <Header/>
      <Router />
    </ThemeProvider>
  );
}

export default App;
