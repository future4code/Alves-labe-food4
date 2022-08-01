import Router from "./Router/Router";
import GlobalState from "./Global/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
