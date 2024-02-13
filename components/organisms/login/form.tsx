import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FormLogin as FormLayoutLogin, TaglineLogin } from '@/components/molecules/login'
import { device } from '@/components/media'

interface IProps { className?: string }
const FormLogin = ({ className = '' }: IProps) => {
    return (
        <Wrapper className={className}>
            <FormLoginWrapper>
                <Image src='/assets/images/brand.png' alt='brand-image' height={200} width={200} priority />
                <TaglineLogin />
                <FormLayoutLogin />
            </FormLoginWrapper>
        </Wrapper>
    )
}

export default FormLogin

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    flex: 1;
    background-color: color-mix(in srgb, var(--light-color) 20%, white) ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.laptop} {
        flex: 2;
    }
`

const FormLoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5rem;

    img {
        margin-bottom: 1rem;
    }

    @media ${device.tabletS} {
        padding: 0 7.5rem;
    }
    
    @media ${device.tablet} {
        padding: 0 3.5rem;
    }
    
    @media ${device.tabletL} {
        padding: 0 5rem;
    }
    
    @media ${device.laptopS} {
        padding: 0 5rem;
    }

    @media ${device.laptop} {
        padding: 0 7.5rem;
    }
`