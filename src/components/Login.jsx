import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1' 
      },
        body: JSON.stringify({
         email: 'eve.holt@reqres.in',
         password: 'cityslicka'
          }),
      });

      const data = await res.json();
      console.log("🌐 API Response:", data);
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
       navigate('/home');
       console.log("Navigated to /home");

      } else {
        alert('Login failed: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      console.error('Error logging in:', err);
      alert('Error logging in');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '5rem auto', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>Login</h2>
      <input
        style={{ width: '100%', padding: '0.5rem', marginBottom: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ width: '100%', padding: '0.5rem', marginBottom: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem', width: '100%', borderRadius: '4px', border: 'none' }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
