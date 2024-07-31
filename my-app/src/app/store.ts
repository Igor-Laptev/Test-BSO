import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Front/Store/authSlice';
import cartReducer from '../Front/Store/cartSlice';
import { productApi } from '../Front/Api/productApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
