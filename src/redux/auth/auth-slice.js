import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import operations from 'redux/transactions/transactions-operations';

const initialState = {
  user: { name: null, email: null, balance: 0 },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null, balance: 0 };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
    },
    [operations.createTransaction.fulfilled](state, { payload }) {
      state.user.balance = +payload.balance;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
  },
});

export default authSlice.reducer;
