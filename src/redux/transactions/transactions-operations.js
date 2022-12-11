import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from 'services/api/api';

const createTransaction = createAsyncThunk(
  'transaction/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.createTransaction(credentials);

      return data;
    } catch (error) {
      toast.error('Something went wrong! Please, try again');
      const {
        response: { status },
      } = error;
      return thunkAPI.rejectWithValue(status);
    }
  }
);

const getCategory = createAsyncThunk('category/get', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  try {
    const { data } = await API.getCategories();
    return data;
  } catch (error) {}
});

const operations = {
  getCategory,
  createTransaction,
};

export default operations;
