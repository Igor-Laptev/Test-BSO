import React, { useEffect } from 'react';
import { useGetProductsQuery } from '../Api/productApi';
import { connectWebSocket } from '../Api/webSocket';
import { ProductDto } from '../Dto/product.dto';
import { Product } from '../Mod/product.model';
import '../Style/ProductCatalog.css';

const ProductCatalog = () => {
  const { data: products, error, isLoading } = useGetProductsQuery(undefined);

  useEffect(() => {
    connectWebSocket();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    if ('status' in error) {
      return <div>Error: {error.status}</div>;
    } else {
      return <div>Error: {error.message}</div>;
    }
  }

  return (
    <div className='product-catalog-container'>
      <h2>Product Catalog</h2>
      <div>
        {products &&
          products.map((productData: ProductDto) => {
            const product = new Product(
              productData.id,
              productData.title,
              productData.image,
              productData.price
            );
            return (
              <div key={product.id} className='product-card'>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <p>{product.displayPrice()}</p>
                <button>Add to Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductCatalog;
