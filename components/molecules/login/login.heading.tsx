import React from 'react'
import styled from 'styled-components'

interface IProps { className?: string }

const LoginHeading: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper className={className}>
            <h1>Login To Your Account</h1>
            <p>Welcome back to Yousee Vendor App. Manage Your Advertise</p>
        </Wrapper>
    )
}

export default LoginHeading

const Wrapper = styled.div`
    width: 100%;
    text-align: center;

    h1 {
        color: var(--dark-color);
        font-size: 1.25em;
        font-weight: 500;
    }

    p {
        font-size: 0.8em;
        color: var(--light-color);
    }
`