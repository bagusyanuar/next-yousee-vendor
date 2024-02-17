import React from 'react'
import styled from 'styled-components'
import { LoginHeroMolecule } from '@/components/molecules/login'
import { LoginFormOrganism } from '@/components/organisms/login'
import { device } from '@/components/media'

function LoginTemplate() {
    return (
        <Wrapper>
            <LoginHeroMolecule />
            <LoginFormOrganism />
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