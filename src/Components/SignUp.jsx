import React, { useState } from 'react';
import {
    SignUpContainer,
    SignUpForm,
    SignUpButton,
    SignUpLink,
    SignUpHeading,
    SignUpImg,
    CheckBox,
    SignUpCheckBox,
    SignUpLabel,
    AdditionalInfo,
    CopyRightText,
    NameInputsContainer,
    FirstNameInput,
    LastNameInput,
    SignUpInput
} from './StyleComponents/StyleSignUp';
import { Link } from 'react-router-dom';
import lock from '../assets/padlock.png';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFullNameValid = (value) => {
        return /^\w{3,}$/.test(value);
    };

    const isEmailValid = (value) => {
        return /^.{3,}@\w{2,}.\w{2,}$/.test(value);
    }

    const isPasswordValid = (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
    }

    const handleFirstNameChange = (e) => {
        const newFirstName = e.target.value;
        setFirstName(newFirstName);
    };
    
    const handleLastNameChange = (e) => {
        const newLastName = e.target.value;
        setLastName(newLastName);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };    

    const dataSignUp = () => {
        if (isFullNameValid(firstName) && isFullNameValid(lastName) && isEmailValid(email) && isPasswordValid(password)) {
            const userData = {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            alert('Реєстрація пройшла успішна');
        } else {
            alert('Виправте помилки');
        }
    };

    return (
        <SignUpContainer>
        <SignUpForm>
            <SignUpImg src={lock} alt="sign lock" />
            <SignUpHeading>Sign Up</SignUpHeading>
            <NameInputsContainer>
                <FirstNameInput 
                    type="text" 
                    placeholder="First Name *"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    style={{ borderColor: firstName.length > 0 ? (isFullNameValid(firstName) ? 'green' : 'red') : 'initial' }}
                />
                <LastNameInput
                    type="text" 
                    placeholder="Last Name *"
                    value={lastName}
                    onChange={handleLastNameChange}
                    style={{ borderColor: lastName.length > 0 ? (isFullNameValid(lastName) ? 'green' : 'red') : 'initial' }}
                />
            </NameInputsContainer>
            <SignUpInput 
                type="email" 
                placeholder="Email Address *" 
                value={email}
                onChange={handleEmailChange}
                style={{ borderColor: email.length > 0 ? (isEmailValid(email) ? 'green' : 'red') : 'initial' }}
            />
            <SignUpInput 
                type="password" 
                placeholder="Password *" 
                value={password}
                onChange={handlePasswordChange}
                style={{ borderColor: password.length > 0 ? (isPasswordValid(password) ? 'green' : 'red') : 'initial' }}
            />
            <CheckBox>
                <SignUpCheckBox type="checkbox" id='' />
                <SignUpLabel htmlFor="">I want to receive inspiration, marketing promotions and updates via email</SignUpLabel>
            </CheckBox>
            <SignUpButton onClick={dataSignUp}>Sign Up</SignUpButton>
            <SignUpLink>
            Already have an account? <Link to="/signin">Sign In</Link>
            </SignUpLink>
            <AdditionalInfo>
                <CopyRightText>CopyRight © Your Website 2020</CopyRightText>
            </AdditionalInfo>
        </SignUpForm>
        </SignUpContainer>
    );
};

export default SignUp;
