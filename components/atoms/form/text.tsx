import React from 'react'
import styled from 'styled-components'

interface IProps {
    className?: string
}
const Text: React.FC<IProps> = ({ className }) => {
    return (
        <StyledText type='text' />
    )
}

export default Text

const StyledText = styled.input`
    background-color: transparent;
    border: 1px solid var(--light-color);
    border-radius: 5px;
    font-size: 0.8em;
    padding: 0.75rem 0.5rem;
    color: var(--dark-color);
    width: 100%;

    &:focus {
        border-color: color-mix(in srgb, var(--light-color) 80%, black);
        outline: none;
    }
`