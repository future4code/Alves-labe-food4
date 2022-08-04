import Router from "./Router/Router";
import GlobalState from "./Global/GlobalState";
import { createGlobalStyle } from "styled-components";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";

const GlobalStyle = createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
      }
      body{
        width: 100%;
        min-height: 100vh;
      }
`
function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
    </ThemeProvider>
  );
}

export default App;
