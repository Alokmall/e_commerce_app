import { useContext } from 'react';
import { ProductContext } from '../context/Productcontext';
import ProductList from '../components/ProductList';

export default function Home() {
  const { products, loading } = useContext(ProductContext);
  return loading ? <p>Loading…</p> : <ProductList products={products} />;
}
