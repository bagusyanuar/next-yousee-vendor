import React from 'react'
import styled from 'styled-components'

interface IProps { text: string, className?: string, onClick?: () => void }
const Button = ({
    text,
    onClick = () => { },
    className = ''
}: IProps) => {
    return (
        <StyledButton
            className={className}
            onClick={onClick}
        >
            {text}
        </StyledButton>
    )
}

export default Button

const StyledButton = styled.button`
    background-color: color-mix(in srgb, var(--primary-color) 80%, black);
    color: whitesmoke;
    padding: 0.75rem 2.5rem;
    font-size: 0.8em;
    border-radius: 5px;
`