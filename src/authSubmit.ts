import { HttpStatusCode } from './http-codes';
import { handleFetch } from './handleFetchReq';
import { handleAuthSuccess } from './handleFetchRes';

const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export async function submitSignUp(
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    confirmPassword: string,
    inputUsername: string,
    setEmailError: React.Dispatch<React.SetStateAction<string | null>>,
    setPasswordError: React.Dispatch<React.SetStateAction<string | null>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
    redirToHome: () => void,
    setAuth: (username: string, profilePhoto: string) => void
) {
    e.preventDefault();

    if (!validateEmail(email)) {
        setEmailError('Invalid email format');
        return;
    }
    if (password !== confirmPassword) {
        setPasswordError('Passwords do not match');
        return;
    }
    setEmailError('');
    setPasswordError('');
    try {
        const response = await handleFetch('POST', 'auth/signup', {
            username: inputUsername,
            password,
            confirmPassword,
            email
        });

        if (response.status === HttpStatusCode.Ok) {
            handleAuthSuccess(response, setError, redirToHome, setAuth);
        } else if (response.status === HttpStatusCode.BadRequest) {
            setError('Invalid signup details. Please check your input and try again.');
        } else if (response.status === HttpStatusCode.Conflict) {
            setError('Username and/or email unavailable.');
        } else {
            setError('An unexpected error occurred. Please try again.');
        }
    } catch (error) {
        setError('An error occurred. Please check your network connection and try again.');
    }
};