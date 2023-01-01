import '../app/globals.css';
import { useState } from 'react';
import { auth, signIn } from "../firebase";
import Router from 'next/router';

const BlogPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    signIn(auth, email, password)
      .then(user => {
        // El usuario ha iniciado sesión correctamente
        console.log('Se ha iniciado sesión correctamente', user);
        Router.push('/');
      })
      .catch(error => {
        setError(error);
      });
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="email"
        value={email}
        placeholder="Correo"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        className="password"
        placeholder="Contraseña"
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default BlogPage;