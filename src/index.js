import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {UserProvider} from './context/UserProvider';

const root = document.getElementById('root');
createRoot(root).render(
    <BrowserRouter basename="/">
      <React.StrictMode>
        <UserProvider>
          <App />
        </UserProvider>
      </React.StrictMode>
    </BrowserRouter>,
);

serviceWorker.unregister();
