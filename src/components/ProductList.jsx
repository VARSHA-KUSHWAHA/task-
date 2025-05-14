function ProductList({ products }) {
    if (products.length === 0) return <p style={{ color: '#6b7280' }}>No Product Found</p>;
  
    return (
      <ul>
        {products.map((product, index) => (
          <li key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '0.75rem', borderRadius: '4px',  }}>
            <strong style={{ fontSize: '1.125rem' }}>{product.name}</strong> - <span>${product.price}</span>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ProductList;
  