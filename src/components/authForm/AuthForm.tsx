import React, { useState } from 'react';
import styles from './AuthForm.module.css';

function AuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoginForm(!isLoginForm);
  };

  if (isLoginForm) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Log In</h1>
        <form onSubmit={() => alert("ok cowboy, you're in")}>
          <div className={styles.formGroup}>
            <label>
              Email
              <input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label>
              Password
              <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
          </div>

          <button className={styles.btn} type="submit">
            Submit
          </button>
          <hr />
          <button
            className={`${styles.btn} ${styles.toggle}`}
            onClick={toggleForm}
          >
            Wait, I don't have an account!
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Sign Up</h1>
        <form
          onSubmit={() =>
            alert('I have no memory, I will not recognize you next time :)')
          }
        >
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
          <div className={styles.formGroup}>
            <label>
              Email:
              <input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Password:
              <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setPasswordConfirm(e.target.value)}
                value={passwordConfirm}
              />
            </label>
          </div>

          <button className={`${styles.btn} ${styles.submit}`} type="submit">
            Submit
          </button>
          <button
            className={`${styles.btn} ${styles.toggle}`}
            onClick={toggleForm}
          >
            Wait, I already have an account!
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;