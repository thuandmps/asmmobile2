import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: {
      products: [],
    },
  },
  reducers: {
    addProduct: (state, action) => {
      const items = [...state.cartData.products];
      const item = action.payload;
      const index = items.findIndex(element => element._id === item._id);

      if (index !== -1) {
        items[index].quanlity = item.quanlity ? item.quanlity + 1 : 1;
      } else {
        item.quanlity = 1;
        items.push(item);
      }

      state.cartData.products = items;
    },
    nimusProduct: (state, action) => {
      const items = [...state.cartData.products];
      const item = action.payload;
      const index = items.findIndex(element => element._id === item._id);

      if (index !== -1) {
        const quanlity = items[index].quanlity;

        if (quanlity === 1) {
          items.splice(index, 1);
        } else {
          items[index].quanlity = quanlity - 1;
        }
      }

      state.cartData.products = items;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {addProduct, nimusProduct} = cartSlice.actions;

export const cartSelector = state => state.cartReducer.cartData;
