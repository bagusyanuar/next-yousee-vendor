import React, { HTMLInputTypeAttribute, useState } from 'react'
import styled from 'styled-components'

function PasswordLogin() {
    const [type, setType] = useState<HTMLInputTypeAttribute>('password')
    const [iconShow, setIconShow] = useState<string>('bx-show')

    const handleChangeType = () => {
        if (type === 'text') {
            setType('password')
            setIconShow('bx-show')
        }

        if (type === 'password') {
            setType('text')
            setIconShow('bx-low-vision')
        }
    }
    return (
        <Wrapper>
            <i className='bx bx-lock-alt prepend'></i>
            <input type={type} placeholder='password' />
            <i className={`bx ${iconShow} append`} onClick={handleChangeType}></i>
        </Wrapper>
    )
}

export default PasswordLogin

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--light-color);
  border-radius: 5px;
  width: 100%;

  &:focus-within {
      border-color: color-mix(in srgb, var(--light-color) 80%, black);
  }

  i.prepend {
    background-color: transparent;
    margin-left: 0.5rem;
    color: var(--dark-color);
  }

  i.append {
    background-color: transparent;
    margin-right: 0.5rem;
    color: var(--dark-color);
    cursor: pointer;
  }

  input {
      font-size: 0.8em;
      padding: 0.75rem 0.5rem;
      border-radius: 5px;
      background-color: transparent;
      color: var(--dark-color);
      width: 100%;
      &:focus {
        outline: none;
      }
  }
`