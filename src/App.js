// Removed: import React from 'react';
import store from './Redux/Store';
import {Provider} from 'react-redux';
import Main from './containers/Main';
// import './App.css';

/**
 * This is the main App component which wraps the Main component
 * inside the Redux Provider.
 *
 * @return {JSX.Element} The rendered JSX element
 */
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
