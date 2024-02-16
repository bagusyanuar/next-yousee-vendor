import React, { useState, HTMLInputTypeAttribute } from 'react'
import styled from 'styled-components'

interface IProps {
    value: string
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    withShowPassword?: boolean
}

const InputPassword: React.FC<IProps> = ({
    value,
    className = '',
    onChange = (e) => { },
    placeholder = '',
    withShowPassword = false,
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
        <Wrapper className={className} $showPassword={withShowPassword}>
            <input
                type={typeField}
                value={value}
                onChange={(e) => onChange(e)}
                placeholder={placeholder}
            />
            {withShowPassword ? <i className={`append-icon bx ${iconShow}`} onClick={handleChangeType}></i> : ''}
        </Wrapper>
    )
}

export default InputPassword

const Wrapper = styled.div<{ $showPassword: boolean }>`
    display: flex;
    align-items: center;
    border: 1px solid var(--light-color);
    border-radius: 5px;
    width: 100%;

    &:focus-within {
        border-color: color-mix(in srgb, var(--light-color) 80%, black);
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
      padding-left: 0.75rem;
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