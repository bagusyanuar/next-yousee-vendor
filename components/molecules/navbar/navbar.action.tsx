import React from 'react'
import styled from 'styled-components'
import { LinkProfile } from '@/components/atoms/link'

interface IProps { image: string, className?: string }
const NavbarAction: React.FC<IProps> = ({ image, className = '' }) => {
    return (
        <Wrapper className={className}>
            <LinkProfile />
        </Wrapper>
    )
}

export default NavbarAction

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`