import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';



const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter basename="/">
      <React.StrictMode>
        <App />
      </React.StrictMode>
   </BrowserRouter>
);

serviceWorker.unregister();
