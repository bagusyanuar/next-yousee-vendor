import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface IProps { image: string, to?: string, className?: string }
const SidebarBrand = ({
    image,
    to = '/dashboard',
    className = ''
}: IProps) => {
    return (
        <Wrapper href={to} className={className}>
            <Image src={image} height={150} width={150} alt='brand-image' />
        </Wrapper>
    )
}

export default SidebarBrand

const Wrapper = styled.a`
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
`