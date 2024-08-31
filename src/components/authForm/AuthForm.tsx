import React, { useState } from 'react';
import styles from './AuthForm.module.css';

function AuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoginForm(!isLoginForm);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (!validateEmail(emailValue)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }
    if (!isLoginForm && password !== passwordConfirm) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');
    alert(isLoginForm ? "ok cowboy, you're in" : 'I have no memory, I will not recognize you next time :)');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isLoginForm ? 'Log In' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLoginForm && (
          <div className={styles.formGroup}>
            <label>
              Username:
              <input
                name="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </label>
          </div>
        )}
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
        {!isLoginForm && (
          <div className={styles.formGroup}>
            <label>
              Confirm Password:
              <input
                name="confirmPassword"
                type="password"
                onChange={handlePasswordConfirmChange}
                value={passwordConfirm}
              />
            </label>
            {passwordError && <p className={styles.error}>{passwordError}</p>}
          </div>
        )}
        <button className={styles.btn} type="submit">
          Submit
        </button>
        <hr />
        <button
          className={`${styles.btn} ${styles.toggle}`}
          onClick={toggleForm}
        >
          {isLoginForm ? "Wait, I don't have an account!" : 'Wait, I already have an account!'}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;