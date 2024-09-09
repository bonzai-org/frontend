import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthForm.module.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate()

    // Use javascript's fetch to query login
    async function queryLogin() {
        let loginResponse = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
        return loginResponse
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        let response = await queryLogin()
        if (response.status === 200) {
            navigate('/home')
        }
        console.log(response.status)
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
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
                    Submit
                </button>
                <hr />
            </form>
        </div>
    );
}

export default Login;
