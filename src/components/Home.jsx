import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Footer from './Footer';
function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const addProduct = (product) => {
    const isDuplicate = products.some(p => p.name.toLowerCase() === product.name.toLowerCase());
    if (!isDuplicate) setProducts([...products, product]);
    else alert('Product already exists');
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
 

  return (
     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1, padding: '2rem', maxWidth: '700px', margin: 'auto', width: '100%' }}>
        <button
          style={{
            float: 'right',
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: 'none',
            marginBottom: '1.5rem'
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Product Manager</h1>
        <ProductForm onAdd={addProduct} />
        <SearchBar onSearch={setQuery} />
        <ProductList products={filteredProducts} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;