import React from 'react';
import styles from './formWrap.module.css';

interface FormWrapProps {
    title: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    error: string | null;
    children: React.ReactNode;
}

const FormWrap: React.FC<FormWrapProps> = ({ title, handleSubmit, error, children }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <form onSubmit={handleSubmit}>
                {children}
            </form>
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default FormWrap;