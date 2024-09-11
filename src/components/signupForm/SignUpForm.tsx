import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HttpStatusCode } from '../../http-codes';
import AuthContext from '../../AuthContext';
import styles from './SignUpForm.module.css';

function SignupForm() {
  const APIBASE = 'http://localhost:3000/api/';
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setAuthData } = useContext(AuthContext);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setEmailError('');
    setPasswordError('');
    try {
      const response = await fetch(APIBASE + 'auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          username,
          password,
          confirmPassword,
          email
        })
      });
      if (response.status === HttpStatusCode.Ok) {
        setError(null);
        const data = await response.json();
        setAuthData(data.username, data.profilePhoto);
        navigate('/');
      } else if (response.status === HttpStatusCode.BadRequest) {
        setError(
          'Invalid signup details. Please check your input and try again.'
        );
      } else if (response.status === HttpStatusCode.Conflict) {
        setError('Username and or email unavailable.');
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
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign up</h1>
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
      </form>
    </div>
  );
}

export default SignupForm;
