import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthForm.module.css';

function SendCredentials() {
    const navigate = useNavigate()

    // Use javascript's fetch to query login
    // Use javascript's fetch to query launch app
    async function sendCredentials() {
        let response = await fetch('http://localhost:3000/api/auth', {
            method: 'GET',
            credentials: 'include'
        })
        console.log(response.status)
        let json = await response.json()
        console.log(json)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <button onClick={sendCredentials}>Submit credentials</button>
        </div>
    );
}

export default SendCredentials;
