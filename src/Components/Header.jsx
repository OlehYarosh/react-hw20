import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
`;

const SignButton = styled(Link)`
    margin: 0 10px;
    padding: 8px 16px;
    background-color: #87ceeb;
    color: black;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #0056b3;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
        <SignButton to="/signin">Sign In</SignButton>
        <SignButton to="/signup">Sign Up</SignButton>
        </HeaderContainer>
    );
};

export default Header;
