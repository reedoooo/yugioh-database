// Mock fetch
import {render, act, waitFor} from '@testing-library/react';
import Main from '../Main'; // Please adjust the path based on your folder structure
import {UserContext} from '../context/UserContext';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({users: [{username: 'testUser'}]}),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('Main component', () => {
  it('should render correctly', async () => {
    await act(async () => {
      render(
          <UserContext.Provider value={{user: {token: 'testToken'}}}>
            <Main />
          </UserContext.Provider>,
      );
    });
  });

  it('should make API call on mount if user is defined', async () => {
    await act(async () => {
      render(
          <UserContext.Provider value={{user: {token: 'testToken'}}}>
            <Main />
          </UserContext.Provider>,
      );
    });

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should not make API call on mount if user is undefined', async () => {
    await act(async () => {
      render(
          <UserContext.Provider value={{user: undefined}}>
            <Main />
          </UserContext.Provider>,
      );
    });

    expect(fetch).toHaveBeenCalledTimes(0);
  });

  it('should handle successful API response', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({users: [{username: 'testUser'}]}),
      }),
    );

    await act(async () => {
      render(
          <UserContext.Provider value={{user: {token: 'testToken'}}}>
            <Main />
          </UserContext.Provider>,
      );
    });

    // You might want to test if the data is correctly used in your component
  });

  it('should handle unsuccessful API response', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      }),
    );

    await act(async () => {
      render(
          <UserContext.Provider value={{user: {token: 'testToken'}}}>
            <Main />
          </UserContext.Provider>,
      );
    });

    // You might want to test if the error is correctly handled in your component
  });
});
