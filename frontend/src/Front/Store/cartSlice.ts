import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDto } from '../Dto/product.dto';

interface CartState {
  products: ProductDto[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductDto>) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
