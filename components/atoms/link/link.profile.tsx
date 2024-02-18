import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface IProps { image?: string, className?: string }
const LinkProfile: React.FC<IProps> = ({
    image = '/assets/images/avatar.png',
    className = ''
}) => {
    return (
        <Wrapper href='#'>
            <Image src={image} height={80} width={80} alt='profile-picture' />
        </Wrapper>
    )
}

export default LinkProfile

const Wrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    img {
        height: 45px;
        width: 45px;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
    }
`