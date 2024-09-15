import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { submitLogin } from '../../authSubmit';
import AuthContext from '../../AuthContext';

function LoginForm() {
  const [inputUsername, setInputUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { setAuthData, username } = useContext(AuthContext);

  useEffect(() => {
    if (username) {
      navigate('/');
    }
  }, [username, navigate]);

  const handleinputUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    submitLogin(e, setError, inputUsername, password, () => navigate('/'), setAuthData
    );
  }

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
              name="inputUsername"
              type="text"
              onChange={handleinputUsernameChange}
              value={inputUsername}
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
