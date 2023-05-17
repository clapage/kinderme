import { useState } from 'react';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/login', { email, password });
      router.push('/'); // Redirect to home page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="text-4xl">
      Login Page
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Log in</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
