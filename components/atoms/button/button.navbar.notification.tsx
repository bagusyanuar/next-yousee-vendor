import React from 'react'
import styled from 'styled-components'

interface IProps { className?: string }
const ButtonNavbarNotification: React.FC<IProps> = ({ className = '' }) => {
    return (
        <StyledLinkNavbarNotification className={className}>
            <i className='bx bx-bell'></i>
            <StyledBadgeNotification>
                <span>3</span>
            </StyledBadgeNotification>
        </StyledLinkNavbarNotification>
    )
}

export default ButtonNavbarNotification

const StyledLinkNavbarNotification = styled.a`
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &:hover {
        background-color: color-mix(in srgb, var(--dark-color) 20%, white);
    }

    i {
        color: var(--dark-color);
        font-size: 1.5em;
    }
`

const StyledBadgeNotification = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background-color: color-mix(in srgb, var(--danger-color) 60%, white);
    border-radius: 5px;

    span {
        font-size: 0.6em;
        color: white;
        margin-bottom: 0;
        line-height: 1;
    }
`