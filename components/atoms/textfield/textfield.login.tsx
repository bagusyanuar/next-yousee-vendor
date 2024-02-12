import React from 'react'
import styled from 'styled-components'

interface IProps { className?: string }

const TextfieldLogin = ({ className = '' }: IProps) => {
  return (
    <Wrapper className={className}>
      <i className='bx bx-envelope'></i>
      <input type='text' placeholder='email' />
    </Wrapper>
  )
}

export default TextfieldLogin

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--light-color);
  border-radius: 5px;
  width: 100%;

  &:focus-within {
      border-color: color-mix(in srgb, var(--light-color) 80%, black);
  }

  i {
    background-color: transparent;
    margin-left: 0.5rem;
    color: var(--dark-color);
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