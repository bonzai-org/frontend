import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { submitLogin } from '../../fetchHelpers/authSubmit';
import AuthContext from '../../AuthContext';
import FormWrap from '../formWrap/formWrap';

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

  function handleinputUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputUsername(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitLogin(
      e,
      setError,
      inputUsername,
      password,
      () => navigate('/'),
      setAuthData
    );
  }

  function redirAuth() {
    navigate('/signup');
  }

  return (
    <FormWrap title="Log in" handleSubmit={handleSubmit} error={error}>
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
    </FormWrap>
  );
}

export default LoginForm;