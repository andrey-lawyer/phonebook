import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'https://contactsbook.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk(
  'auth/register',
  // 'users/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk(
  'auth/login',
  // 'users/login',

  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/*

 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
