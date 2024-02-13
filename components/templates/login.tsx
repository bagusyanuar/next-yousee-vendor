import React from 'react'
import styled from 'styled-components'
import { HeroLogin } from '@/components/molecules/login'
import { FormLogin } from '@/components/organisms/login'
import { device } from '@/components/media'

function LoginTemplate() {
    return (
        <Wrapper>
            <HeroLogin />
            <FormLogin />
        </Wrapper>
    )
}

export default LoginTemplate

const Wrapper = styled.main`
    height: 100vh;
    width: 100%;
    

    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`