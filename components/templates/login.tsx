import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FormLogin } from '@/components/organisms/login'

function LoginTemplate() {


    return (
        <Wrapper>
            <Hero />
            <FormLoginWrapper>
                <FormLogin />
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
`