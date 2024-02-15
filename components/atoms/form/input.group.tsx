import React from 'react'
import styled from 'styled-components'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string | React.ReactNode
    validatorText?: string
    validatorType?: 'error' | 'success'
}
const InputGroup: React.FC<IProps> = ({ label, validatorText, validatorType, ...props }) => {
    return (
        <div>
            <label htmlFor={props.id ? props.id : ''}>{label}</label>
            <StyledInput
                type='text'
                {...props}
            />
            <StyledValidatorText $type={validatorType ? validatorType : 'error'}>
                {validatorText}
            </StyledValidatorText>
        </div>
    )
}

export default InputGroup

const StyledInput = styled.input`
    background-color: transparent;
    border: 1px solid var(--light-color);
    border-radius: 5px;
    font-size: 0.8em;
    padding: 0.75rem 0.75rem;
    color: var(--dark-color);
    width: 100%;
    margin-bottom: 0;

    &:focus {
        border-color: color-mix(in srgb, var(--light-color) 80%, black);
        outline: none;
    }
`

const StyledValidatorText = styled.span < { $type: 'error' | 'success' } > `
    font-size: 0.7em;
    padding: 0 2px;
    color: ${({ $type }) => $type === 'success' ? 'var(--success-color)' : 'var(--danger-color)'};
`