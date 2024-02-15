import React from 'react'
import styled from 'styled-components'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    parentClassName?: string,
    prependIcon?: string,
    appendIcon?: string
}
const InputIcon: React.FC<IProps> = ({ parentClassName = '', prependIcon, appendIcon, ...props }) => {
    return (
        <Wrapper
            className={parentClassName}
            $prepend={prependIcon ? true : false}
            $append={appendIcon ? true : false}
        >
            {prependIcon ? <i className={`prepend-icon bx ${prependIcon}`}></i> : ''}
            <input type='text' {...props} />
            {prependIcon ? <i className={`append-icon bx ${appendIcon}`}></i> : ''}
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
    display: ${({$prepend}) => $prepend ? 'inline-block' : 'none' };
  }
  
  i.append-icon {
    background-color: transparent;
    margin-right: 0.5rem;
    color: var(--dark-color);
    display: ${({$prepend}) => $prepend ? 'inline-block' : 'none' };
  }

  input {
      font-size: 0.8em;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: ${({$prepend}) => $prepend ? '0.5rem' : '0.75rem' };
      padding-right: ${({$append}) => $append ? '0.5rem' : '0.75rem' };
      border-radius: 5px;
      background-color: transparent;
      color: var(--dark-color);
      width: 100%;
      &:focus {
        outline: none;
      }
  }
`