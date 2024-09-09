import React, { useState, useEffect } from 'react';
import styles from './AuthForm.module.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordError, setPasswordError] = useState('');

    // Use javascript's fetch to query Signup

    // Use javascript's fetch to query signup 
    async function querySignup() {
        let response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                confirmPassword,
                email
            }),
        })
        return response
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        let response = await querySignup()
        let data = await response.json()
        console.log(data)
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>
                        Username:
                        <input
                            name="username"
                            type="text"
                            onChange={handleUsernameChange}
                            value={username}
                            required
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
                            required
                        />
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label>
                        Password:
                        <input
                            name="confirmPassword"
                            type="confirmPassword"
                            onChange={handleConfirmPasswordChange}
                            value={confirmPassword}
                            required
                        />
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label>
                        Password:
                        <input
                            name="email"
                            type="email"
                            onChange={handleEmailChange}
                            value={email}
                            required
                        />
                    </label>
                </div>
                <button className={styles.btn} type="submit">
                    Submit
                </button>
                <hr />
            </form>
        </div>
    );
}

export default Signup;
