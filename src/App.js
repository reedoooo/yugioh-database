import React from "react";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import Main from "./containers/Main";
// import "./App.css";

function App() {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
}

export default App;
