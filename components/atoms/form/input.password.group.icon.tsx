import React, { useState, HTMLInputTypeAttribute } from 'react'
import styled from 'styled-components'

interface IProps {
    value: string
    icon: string
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label?: string | React.ReactNode
    labelClassName?: string
    errorText?: string
    errorClassName?: string
    withShowPassword?: boolean
}


const InputPasswordGroupIcon: React.FC<IProps> = ({
    value,
    icon,
    className = '',
    onChange = (e) => { },
    placeholder = '',
    label = '',
    labelClassName = '',
    errorText = '',
    errorClassName = '',
    withShowPassword = false
}) => {
    const [typeField, setTypeField] = useState<HTMLInputTypeAttribute>('password')
    const [iconShow, setIconShow] = useState<string>('bx-show')
    const handleChangeType = () => {
        if (typeField === 'text') {
            setTypeField('password')
            setIconShow('bx-show')
        }

        if (typeField === 'password') {
            setTypeField('text')
            setIconShow('bx-low-vision')
        }
    }

    return (
        <Wrapper className={className}>
            {
                label !== ''
                    ?
                    <StyledLabel className={labelClassName}>{label}</StyledLabel>
                    :
                    <></>
            }
            <InputWrapper $showPassword={withShowPassword}>
                <i className={`prepend-icon bx ${icon}`}></i>
                <input
                    type={typeField}
                    value={value}
                    onChange={(e) => onChange(e)}
                    placeholder={placeholder}
                />
                {withShowPassword ? <i className={`append-icon bx ${iconShow}`} onClick={handleChangeType}></i> : ''}
            </InputWrapper>
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

export default InputPasswordGroupIcon

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const InputWrapper = styled.div<{ $showPassword: boolean }>`
    display: flex;
    align-items: center;
    border: 1px solid var(--light-color);
    border-radius: 5px;
    width: 100%;

    &:focus-within {
        border-color: color-mix(in srgb, var(--light-color) 80%, black);
    }

    i.prepend-icon {
        background-color: transparent;
        margin-left: 0.5rem;
        color: var(--dark-color);
    }

    i.append-icon {
        background-color: transparent;
        margin-right: 0.5rem;
        color: var(--dark-color);
        cursor: pointer;
    }

    input {
      font-size: 0.8em;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: 0.5rem;
      padding-right: ${({ $showPassword }) => $showPassword ? '0.5rem' : '0.75rem'};
      border-radius: 5px;
      background-color: transparent;
      color: var(--dark-color);
      width: 100%;
      &:focus {
        outline: none;
      }
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