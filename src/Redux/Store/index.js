import {configureStore} from '@reduxjs/toolkit';
import reducer from '../Reducers';

const initialState = {
  lister: [],
  deck: {main: [], extra: []},
  isLoading: false,
  hasMoreItemsToLoad: false,
  nextPageToLoad: '',
};

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
});

export default store;
