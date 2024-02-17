import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { device } from '@/components/media'

interface IProps { className?: string }

const LoginHero: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper className={className}>
            <Image src='/assets/images/hero.jpg' height={1200} width={1200} alt='hero-image' priority />
        </Wrapper>
    )
}

export default LoginHero

const Wrapper = styled.div`
    display: none;

    @media ${device.tablet} {
      display: flex;
      height: 100vh;
      width: 100%;
      background-color: var(--primary-color);
      flex: 1;

      img {
          height: 100vh;
          width: 100%;
          object-fit: cover;
          object-position: center center;
      }
    }

    @media ${device.laptop} {
        flex: 3;
    }
`