import React from 'react'
import styled from 'styled-components'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

const Input: React.FC<IProps> = (props) => {
    return (
        <StyledInput
            type='text'
            {...props}
        />
    )
}

export default Input

const StyledInput = styled.input`
    background-color: transparent;
    border: 1px solid var(--light-color);
    border-radius: 5px;
    font-size: 0.8em;
    padding: 0.75rem 0.75rem;
    color: var(--dark-color);
    width: 100%;

    &:focus {
        border-color: color-mix(in srgb, var(--light-color) 80%, black);
        outline: none;
    }
`