import React from 'react'
import styled from 'styled-components'

interface IProps { icon: string, to: string, className?: string }
const LinkCardCircle: React.FC<IProps> = ({ icon, to, className = '' }) => {
    return (
        <StyledLinkCardCircle href={to} className={className}>
            <i className='bx bx-right-arrow-alt'></i>
        </StyledLinkCardCircle>
    )
}

export default LinkCardCircle

const StyledLinkCardCircle = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    background-color: white;
    color: var(--primary-color)
`