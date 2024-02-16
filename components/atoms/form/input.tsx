import React from 'react'
import styled from 'styled-components'

interface IProps {
    value: string
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

const Input: React.FC<IProps> = ({
    value,
    className = '',
    onChange = (e) => { },
    placeholder = ''
}) => {
    return (
        <StyledInput
            type='text'
            value={value}
            onChange={(e) => onChange(e)}
            className={className}
            placeholder={placeholder}
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