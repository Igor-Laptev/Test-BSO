import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    register: builder.mutation({
      query: (newUser) => ({
        url: 'auth/local/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: 'auth/local',
        method: 'POST',
        body: user,
      }),
    }),
    getCart: builder.query({
      query: (userId) => `users/${userId}/cart`,
    }),
    addToCart: builder.mutation({
      query: ({ userId, productId }) => ({
        url: `users/${userId}/cart`,
        method: 'PUT',
        body: { productId },
      }),
    }),
    removeFromCart: builder.mutation({
      query: ({ userId, productId }) => ({
        url: `users/${userId}/cart/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useRegisterMutation,
  useLoginMutation,
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} = productApi;
