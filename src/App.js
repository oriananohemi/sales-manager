import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Router from './router/Router';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

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
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
