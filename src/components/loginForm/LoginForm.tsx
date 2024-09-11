import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { HttpStatusCode } from '../../http-codes';
import AuthContext from '../../AuthContext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setAuthData } = useContext(AuthContext);

  const APIBASE = 'http://localhost:3000/api/';

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(APIBASE + 'auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ username, password })
      });
      if (response.status === HttpStatusCode.Ok) {
        setError(null);
        const data = await response.json();
        setAuthData(data.username, data.profilePhoto);
        navigate('/');
      } else if (
        response.status === HttpStatusCode.Unauthorized ||
        response.status === HttpStatusCode.BadRequest
      ) {
        setError('Invalid username and/or password.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } catch (error) {
      setError(
        'An error occurred. Please check your network connection and try again.'
      );
    }
  };

  const redirAuth = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.formGroup}>
          <label>
            Username:
            <input
              name="username"
              type="text"
              onChange={handleUsernameChange}
              value={username}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            Password:
            <input
              name="password"
              type="password"
              onChange={handlePasswordChange}
              value={password}
            />
          </label>
        </div>
        <button className={styles.btn} type="submit">
          Log In
        </button>
        <button
          onClick={redirAuth}
          className={`${styles.btn} ${styles.toggle}`}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
