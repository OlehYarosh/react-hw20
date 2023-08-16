import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: white;
`;

export const SignInForm = styled.form`
    width: 350px;
    padding: 40px;
    border-radius: 5px;
    background-color: #151414;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SignInImg = styled.img`
    width: 8%;
    height: 6%;
    display: block;
    margin: auto;
    background-color: #FF92A5;
    padding: 10px;
    border-radius: 50%;
`;

export const SignInHeading = styled.h3`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

export const SignInInput = styled.input`
    width: 93%;
    padding: 10px;
    margin-top: 10px;
    border: 2px solid #272626;
    border-radius: 5px;
    font-size: 14px;
    background-color: #151414;
    color: white;
`;

export const RememberMeCheckBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;

    input {
        margin-right: 5px;
    }
`;

export const SignInCheckBox = styled.input`
    margin-right: 5px;
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
`;

export const SignInLabel = styled.label`
    font-weight: 500;
`;

export const SignInButton = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: #87ceeb;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #0056b3;
    }
`;

export const SignInLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

export const SignInLink = styled.span`
    font-size: 11px;

    a {
        color: #007bff;
        text-decoration: none;
    }
`;

export const AdditionalInfo = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CopyRightText = styled.p`
    font-size: 12px;
    color: #999;
`;
