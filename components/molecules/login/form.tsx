import React from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

import { TextfieldLogin, PasswordfieldLogin } from '@/components/atoms/textfield'
import Button from '@/components/atoms/button'



interface IProps { className?: string }

function FormLogin({ className = '' }: IProps) {
    const router = useRouter()

    const handleLogin = () => {
        router.push('/dashboard')
    }

    return (
        <Wrapper className={className}>
            <TextfieldLogin className='mb-3' />
            <PasswordfieldLogin />
            <StyledForgotPassword>
                <a href='#'>Forgot Password</a>
            </StyledForgotPassword>
            <Button
                text='Login'
                className='w-full'
                onClick={handleLogin}
            />
        </Wrapper>
    )
}

export default FormLogin

const Wrapper = styled.div`
    width: 100%;
`

const StyledForgotPassword = styled.div`
    width: 100%;
    text-align: right;
    margin-bottom: 1rem;
    a {
        font-size: 0.7em;
        font-weight: 600;
        color: var(--primary-color);
    }
`