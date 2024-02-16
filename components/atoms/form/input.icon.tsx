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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string
}

const InputIcon: React.FC<IProps> = ({
  value,
  icon,
  className = '',
  onChange = (e) => { },
  placeholder = ''
}) => {
  return (
    <Wrapper
      className={className}
      $prepend={icon.position === 'prepend' ? true : false}
      $append={icon.position === 'append' ? true : false}
    >
      {icon.position === 'prepend' ? <i className={`prepend-icon bx ${icon.icon}`}></i> : ''}
      <input type='text' value={value} onChange={(e) => { onChange(e) }} placeholder={placeholder} />
      {icon.position === 'append' ? <i className={`append-icon bx ${icon.icon}`}></i> : ''}
    </Wrapper>
  )
}

export default InputIcon

const Wrapper = styled.div<{ $prepend: boolean, $append: boolean }>`
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