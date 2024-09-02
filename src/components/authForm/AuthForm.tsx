import React, { useState, useEffect } from 'react';
import styles from './AuthForm.module.css';

function AuthForm() {
  const APIBASE = 'localhost:3000/api/';
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
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoginForm && !validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }
    if (!isLoginForm && password !== passwordConfirm) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');
    const request = isLoginForm
      ? async function () {
          fetch(APIBASE + 'login');
        }
      : async function () {
          fetch(APIBASE + 'signup');
        };
    const response = await request();
    console.log(response);
    // if error, display error
    // else, handle response
    alert(
      isLoginForm
        ? "ok cowboy, you're in"
        : 'I have no memory, I will not recognize you next time :)'
    );
  };

  useEffect(() => {
    if (!isLoginForm && username) {
      // Simulate an API call to check if the username is available
      console.log(`Checking availability for username: ${username}`);
      // Here you would typically make an API call to check username availability
      // For now, we just log the username
    }
  }, [username, isLoginForm]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isLoginForm ? 'Log In' : 'Sign Up'}</h1>
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
        {!isLoginForm && (
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
        )}
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
          {isLoginForm
            ? "Wait, I don't have an account!"
            : 'Wait, I already have an account!'}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
