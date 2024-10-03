import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitSignUp } from '../../fetchHelpers/authSubmit';
import styles from './SignUpForm.module.css';
import AuthContext from '../../AuthContext';
import FormWrap from '../formWrap/formWrap';

function SignUpForm() {
  const [inputUsername, setInputUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
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

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const emailValue = e.target.value;
    setEmail(emailValue);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handlePasswordConfirmChange(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submitSignUp(
      e,
      email,
      password,
      confirmPassword,
      inputUsername,
      setEmailError,
      setPasswordError,
      setError,
      () => navigate('/'),
      setAuthData
    );
  }

  function redirAuth() {
    navigate('/login');
  }

  return (
    <FormWrap title="Sign up" handleSubmit={handleSubmit} error={error}>
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
          Email:
          <input
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </label>
        {emailError && <p className={styles.error}>{emailError}</p>}
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
      <div className={styles.formGroup}>
        <label>
          Confirm Password:
          <input
            name="confirmPassword"
            type="password"
            onChange={handlePasswordConfirmChange}
            value={confirmPassword}
          />
        </label>
        {passwordError && <p className={styles.error}>{passwordError}</p>}
      </div>
      <button className={styles.btn} type="submit">
        Sign Up
      </button>
      <button
        onClick={redirAuth}
        className={`${styles.btn} ${styles.toggle}`}
      >
        Log in
      </button>
    </FormWrap>
  );
}

export default SignUpForm;