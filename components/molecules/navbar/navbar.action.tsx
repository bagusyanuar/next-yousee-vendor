import React from 'react'
import styled from 'styled-components'
import { ButtonNavbarProfile, ButtonNavbarNotification } from '@/components/atoms/button'

interface IProps { image: string, className?: string }
const NavbarAction: React.FC<IProps> = ({ image, className = '' }) => {
    return (
        <Wrapper className={className}>
            <ButtonNavbarNotification className='me-5' />
            <ButtonNavbarProfile />
        </Wrapper>
    )
}

export default NavbarAction

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`