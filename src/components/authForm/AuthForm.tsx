import React, { useState } from 'react';
import styles from './AuthForm.module.css';
import LoginForm from '../loginForm/LoginForm';
import SignUpForm from '../signupForm/SignUpForm';

function AuthForm() {
  const APIBASE = 'http://localhost:3000/api/';
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoginForm(!isLoginForm);
  };

  const handleLoginSubmit = async (username: string, password: string) => {
    const response = await fetch(APIBASE + 'auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    console.log(response);
    // Handle response
  };

  const handleSignupSubmit = async (
    username: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    const response = await fetch(APIBASE + 'auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmPassword: passwordConfirm
      })
    });
    console.log(response);
    // Handle response
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isLoginForm ? 'Log In' : 'Sign Up'}</h1>
      {isLoginForm ? (
        <LoginForm onSubmit={handleLoginSubmit} />
      ) : (
        <SignUpForm onSubmit={handleSignupSubmit} />
      )}
      <hr />
      <button className={`${styles.btn} ${styles.toggle}`} onClick={toggleForm}>
        {isLoginForm
          ? "Wait, I don't have an account!"
          : 'Wait, I already have an account!'}
      </button>
    </div>
  );
}

export default AuthForm;
