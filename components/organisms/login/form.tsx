import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FormLogin as FormLayoutLogin, TaglineLogin } from '@/components/molecules/login'

const FormLogin = () => {
    return (
        <Wrapper>
            <Image src='/assets/images/brand.png' alt='brand-image' height={200} width={200} />
            <TaglineLogin />
            <FormLayoutLogin />
        </Wrapper>
    )
}

export default FormLogin

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 7.5rem;

    img {
        margin-bottom: 1rem;
    }
`