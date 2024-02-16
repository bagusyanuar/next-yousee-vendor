import React from 'react'
import styled from 'styled-components'

type TIcon = {
    position: 'prepend' | 'append'
    icon: string
}

interface IProps {
    value: string
    icon: TIcon
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label?: string | React.ReactNode
    labelClassName?: string
    errorText?: string
    errorClassName?: string
}

const InputGroupIcon: React.FC<IProps> = ({
    value,
    icon,
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
            <InputWrapper
                $prepend={icon.position === 'prepend' ? true : false}
                $append={icon.position === 'append' ? true : false}
            >
                {icon.position === 'prepend' ? <i className={`prepend-icon bx ${icon.icon}`}></i> : ''}
                <input
                    type='text'
                    value={value}
                    onChange={(e) => { onChange(e) }}
                    placeholder={placeholder} />

                {icon.position === 'append' ? <i className={`append-icon bx ${icon.icon}`}></i> : ''}
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

export default InputGroupIcon

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const InputWrapper = styled.div<{ $prepend: boolean, $append: boolean }>`
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
        display: ${({ $prepend }) => $prepend ? 'inline-block' : 'none'};
    }
    
    i.append-icon {
        background-color: transparent;
        margin-right: 0.5rem;
        color: var(--dark-color);
        display: ${({ $append }) => $append ? 'inline-block' : 'none'};
    }

    input {
        font-size: 0.8em;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        padding-left: ${({ $prepend }) => $prepend ? '0.5rem' : '0.75rem'};
        padding-right: ${({ $append }) => $append ? '0.5rem' : '0.75rem'};
        border-radius: 5px;
        background-color: transparent;
        color: var(--dark-color);
        width: 100%;
        &:focus {
            outline: none;
        }
    }
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