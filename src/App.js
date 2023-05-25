import React from "react";
import Home from "./pages/home/Home";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./Redux/Store";

import { Provider } from "react-redux";
// import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
