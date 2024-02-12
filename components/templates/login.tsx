import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { TextfieldLogin, PasswordfieldLogin } from '@/components/atoms/textfield'

function LoginTemplate() {
    return (
        <Wrapper>
            <Hero />
            <FormLoginWrapper>
                <Image src='/assets/images/brand.png' alt='brand-image' height={200} width={200} />
                <h1>Login To Your Account</h1>
                <div className='form-login-wrapper'>
                    <TextfieldLogin className='mb-3' />
                    <PasswordfieldLogin />
                    <a href='#' className='forgot-password'>Forgot Password</a>
                </div>
            </FormLoginWrapper>
        </Wrapper>
    )
}

export default LoginTemplate

const Wrapper = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Hero = styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--primary-color);
    flex: 3;
`

const FormLoginWrapper = styled.div`
    height: 100vh;
    width: 100%;
    flex: 2;
    background-color: color-mix(in srgb, var(--light-color) 20%, white) ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        margin-bottom: 1rem;
    }

    h1 {
        color: var(--dark-color);
        font-size: 1.25em;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    .form-login-wrapper {
        width: 100%;
        padding: 0 7.5rem;

        .forgot-password {
            font-size: 0.8em;
        }
    }
`