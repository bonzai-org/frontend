import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthForm.module.css';
import LoginForm from '../loginForm/LoginForm';
import SignUpForm from '../signupForm/SignUpForm';
import { HttpStatusCode } from '../../http-codes';
import AuthContext from '../../AuthContext';

function AuthForm() {
  const APIBASE = 'http://localhost:3000/api/';
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setAuthData } = useContext(AuthContext);

  const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoginForm(!isLoginForm);
    setError(null); // Clear error when toggling forms
  };

  const handleLoginSubmit = async (username: string, password: string) => {
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

  const handleSignupSubmit = async (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isLoginForm ? 'Log In' : 'Sign Up'}</h1>
      {error && <div className={styles.error}>{error}</div>}
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
