import Router from "./Router/Router";
import GlobalState from "./Global/GlobalState";
import { createGlobalStyle } from "styled-components";

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
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
