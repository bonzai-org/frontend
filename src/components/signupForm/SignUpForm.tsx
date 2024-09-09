import React, { useState } from 'react';
import styles from './SignUpForm.module.css';

interface SignupFormProps {
  onSubmit: (
    username: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) => void;
}

function SignupForm({ onSubmit }: SignupFormProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
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
    onSubmit(username, email, password, confirmPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}

export default SignupForm;
