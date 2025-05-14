function SearchBar({ onSearch }) {
    return (
      <input
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        placeholder="Search Products..."
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }
  
  export default SearchBar;