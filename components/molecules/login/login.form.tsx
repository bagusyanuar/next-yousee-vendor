import React from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import {
    InputGroupTextIcon,
    InputGroupPasswordIcon
} from '@/components/atoms/form'
import { ButtonLoading } from '@/components/atoms/button'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks'
import {
    LoginState,
    SetUsername,
    SetPassword,
    SetLoadingLogin,
} from '@/src/redux/login/slice'
import { submit } from '@/src/redux/login/action'

interface IProps { className?: string }
const LoginForm: React.FC<IProps> = ({ className = '' }) => {
    const router = useRouter()
    const StateLogin = useAppSelector(LoginState)
    const dispatch = useAppDispatch()

    const handleLogin = () => {
        dispatch(submit())
    }
    return (
        <Wrapper>
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
            <ForgotPassword href='#'>Forgot Password</ForgotPassword>
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

export default LoginForm

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ForgotPassword = styled.a`
    font-size: 0.7em;
    font-weight: 600;
    color: var(--primary-color);
    display: inline-block;
    text-align: right;
    width: 100%;
    margin-bottom: 1rem;
`