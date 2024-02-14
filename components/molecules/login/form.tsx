import React from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { TextfieldLogin, PasswordfieldLogin } from '@/components/atoms/textfield'
import { ButtonLoading } from '@/components/atoms/button'
import { useAppDispatch, useAppSelector } from '@/internal/redux/hooks'
import {
    LoginState,
    SetUsername,
    SetPassword,
    SetLoadingLogin
} from '@/internal/redux/login/slice'

interface IProps { className?: string }

function FormLogin({ className = '' }: IProps) {
    const router = useRouter()
    const StateLogin = useAppSelector(LoginState)
    const dispatch = useAppDispatch()

    const handleLogin = () => {
        // router.push('/dashboard')
        dispatch(SetLoadingLogin(true))
        setTimeout(() => {
            dispatch(SetLoadingLogin(false))
        }, 1000);
    }

    return (
        <Wrapper className={className}>
            <TextfieldLogin
                className='mb-3'
                inputProps={{
                    placeholder: 'email',
                    onChange: (e) => {
                        dispatch(SetUsername(e.currentTarget.value))
                    },
                    value: StateLogin.Username
                }}
            />
            <PasswordfieldLogin
                inputProps={{
                    placeholder: 'password',
                    onChange: (e) => {
                        dispatch(SetPassword(e.currentTarget.value))
                    },
                    value: StateLogin.Password
                }}
            />
            <StyledForgotPassword href='#'>Forgot Password</StyledForgotPassword>
            <ButtonLoading
                className='w-full'
                onClick={handleLogin}
                isLoading={StateLogin.LoadingLogin}
            >
                Login
            </ButtonLoading>
        </Wrapper>
    )
}

export default FormLogin

const Wrapper = styled.div`
    width: 100%;
`

const StyledForgotPassword = styled.a`
    font-size: 0.7em;
    font-weight: 600;
    color: var(--primary-color);
    display: inline-block;
    text-align: right;
    width: 100%;
    margin-bottom: 1rem;
`