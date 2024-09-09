import React, { useState } from 'react';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
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
    </form>
  );
}

export default LoginForm;
