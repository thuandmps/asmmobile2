import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: {
      accesstoken: '',
    },
  },
  reducers: {
    addAuth: (state, action) => {
      state.authData.accesstoken = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

export const {addAuth} = authSlice.actions;

export const authSelector = state => state.authReducer.authData;
