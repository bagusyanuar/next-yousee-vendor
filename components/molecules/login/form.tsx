import React from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import {
    InputGroupTextIcon,
    InputGroupPasswordIcon
} from '@/components/atoms/form'
import { ButtonLoading } from '@/components/atoms/button'
import { useAppDispatch, useAppSelector } from '@/internal/redux/hooks'
import {
    LoginState,
    SetUsername,
    SetPassword,
    SetLoadingLogin,
} from '@/src/redux/login/slice'
import { submit } from '@/src/redux/login/action'

interface IProps { className?: string }

function FormLogin({ className = '' }: IProps) {
    const router = useRouter()
    const StateLogin = useAppSelector(LoginState)
    const dispatch = useAppDispatch()

    const handleLogin = () => {
        dispatch(submit())
    }

    return (
        <Wrapper className={className}>
            <InputGroupTextIcon
                value={StateLogin.Username}
                className='mb-3'
                placeholder='email'
                icon={{ icon: 'bx-envelope' }}
                onChange={(e) => {
                    dispatch(SetUsername(e.currentTarget.value))
                }}
            />
            <InputGroupPasswordIcon
                value={StateLogin.Password}
                icon='bx-lock-alt'
                placeholder='password'
                onChange={(e) => {
                    dispatch(SetPassword(e.currentTarget.value))
                }}
                withShowPassword
            />
            {/* <PasswordfieldLogin
                inputProps={{
                    placeholder: 'password',
                    onChange: (e) => {
                        dispatch(SetPassword(e.currentTarget.value))
                    },
                    value: StateLogin.Password
                }}
            /> */}
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
    display: flex;
    flex-direction: column;
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