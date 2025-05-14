import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-4 mt-10 border-t "
    style={{
      textAlign: 'center',
      position: 'sticky',
      bottom: 0,
      width: '100%',
    }}
    >
      <p>&copy; { new Date().getFullYear()} Product App by @....</p>
    </footer>
  );
}

export default Footer;
