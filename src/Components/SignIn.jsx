import React, { useState } from 'react';
import {
    SignInContainer,
    SignInForm,
    SignInInput,
    SignInButton,
    SignInLink,
    AdditionalInfo,
    CopyRightText,
    SignInImg,
    SignInHeading,
    SignInLabel,
    SignInLinksContainer,
    SignInCheckBox,
    RememberMeCheckBox
} from './StyleComponents/StyleSignIn';
import { Link } from 'react-router-dom';
import lock from '../assets/padlock.png';

const Welcome = ({ user }) => {
    return `Вітаємо з успішним входом, ${user.firstName} ${user.lastName}!`;
};

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailValid = (value) => {
        return /^\w{3,}@\w{2,}.\w{2,}$/.test(value);
    }

    const isPasswordValid = (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
    }

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    const handleSignIn = () => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
            alert(Welcome({ user: storedUserData }));
        } else {
            alert('Неправильна електронна пошта або пароль');
        }
    };

    return (
        <SignInContainer>
            <SignInForm>
                <SignInImg src={lock} alt="sign lock" />
                <SignInHeading>Sign in</SignInHeading>
                <SignInInput
                    type="text"
                    placeholder="Email Address *"
                    value={email}
                    onChange={handleEmailChange}
                    style={{ borderColor: email.length > 0 ? (isEmailValid(email) ? 'green' : 'red') : 'initial' }}
                />
                <SignInInput
                    type="password"
                    placeholder="Password *"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ borderColor: password.length > 0 ? (isPasswordValid(password) ? 'green' : 'red') : 'initial' }}
                />
                <RememberMeCheckBox>
                    <SignInCheckBox type="checkbox" id='rememberMe' />
                    <SignInLabel htmlFor="rememberMe">Remember me</SignInLabel>
                </RememberMeCheckBox>
                <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
                <SignInLinksContainer>
                    <SignInLink>
                        <Link to="">Forgot password?</Link>
                    </SignInLink>
                    <SignInLink>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </SignInLink>
                </SignInLinksContainer>
                <AdditionalInfo>
                    <CopyRightText>CopyRight © Your Website 2020</CopyRightText>
                </AdditionalInfo>
            </SignInForm>
        </SignInContainer>
    );
};

export default SignIn;
