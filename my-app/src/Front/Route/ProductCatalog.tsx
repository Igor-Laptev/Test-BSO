import React, { useEffect } from 'react';
import { useGetProductsQuery } from '../Api/productApi';
import { connectWebSocket } from '../Api/webSocket';
import { ProductDto } from '../Dto/product.dto';
import { Product } from '../Mod/product.model';

const ProductCatalog = () => {
  const {
    data: productsData,
    error,
    isLoading,
  } = useGetProductsQuery(undefined);

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

  const products = productsData?.map(
    (productData: ProductDto) =>
      new Product(
        productData.id,
        productData.title,
        productData.image,
        productData.price
      )
  );

  return (
    <div>
      <h2>Product Catalog</h2>
      <div>
        {products?.map((product: Product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.displayPrice()}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
