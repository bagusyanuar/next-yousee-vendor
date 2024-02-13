import React from 'react'
import styled from 'styled-components'

const TaglineLogin = () => {
    return (
        <Wrapper>
            <h1>Login To Your Account</h1>
            <p>Welcome back to Yousee Vendor App. Manage Your Advertise</p>
        </Wrapper>
    )
}

export default TaglineLogin

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
        margin-bottom: 1rem;
    }
`