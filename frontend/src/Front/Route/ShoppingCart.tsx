import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { removeFromCart } from '../Store/cartSlice';
import { ProductDto } from '../Dto/product.dto';
import { connectWebSocket } from '../Api/webSocket';
import '../Style/ShoppingCart.css';

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    connectWebSocket();
  }, []);

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className='shopping-cart-container'>
      <h2>Shopping Cart</h2>
      {cart.products.map((product: ProductDto) => (
        <div key={product.id} className='shopping-cart-item'>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleRemoveFromCart(product.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
