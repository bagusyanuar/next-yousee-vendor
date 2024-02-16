import React from 'react'
import styled from 'styled-components'

interface IProps {
    value: string
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label?: string | React.ReactNode
    labelClassName?: string
    errorText?: string
    errorClassName?: string
}

const InputGroup: React.FC<IProps> = ({
    value,
    className = '',
    onChange = (e) => { },
    placeholder = '',
    label = '',
    labelClassName = '',
    errorText = '',
    errorClassName = ''
}) => {
    return (
        <Wrapper className={className}>
            {
                label !== ''
                    ?
                    <StyledLabel className={labelClassName}>{label}</StyledLabel>
                    :
                    <></>
            }
            <StyledInput
                type='text'
                value={value}
                onChange={(e) => onChange(e)}
                placeholder={placeholder}
            />
            {
                errorText !== ''
                    ?
                    <StyledErrorText className={errorClassName}>
                        {errorText}
                    </StyledErrorText>
                    :
                    <></>
            }
        </Wrapper>
    )
}

export default InputGroup

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

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

const StyledLabel = styled.label`
    font-size: 0.8em;
    color: var(--dark-color);
    display: inline-block;
    padding: 0 2px;
`

const StyledErrorText = styled.span`
    font-size: 0.7em;
    padding: 0 2px;
    color: var(--danger-color);
`