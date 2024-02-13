import React from 'react'
import styled from 'styled-components'

interface IProps { text: string, icon?: string, className?: string }
const SidebarItem = ({
    text,
    icon = 'bx-circle',
    className = ''
}: IProps) => {
    return (
        <Wrapper className={className}>
            <i className={`bx ${icon}`}></i>
            <span>{text}</span>
        </Wrapper>
    )
}

export default SidebarItem

const Wrapper = styled.a`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    color: var(--primary-color);
    transition: all ease-in-out 200ms;
    border-radius: 5px;
    padding: 0.75rem 0.5rem;
    font-size: 1em;

    &:hover {
        background-color: var(--primary-color);
        color: whitesmoke;
    }

    i {
        margin-right: 0.75rem;
    }

    span {
        font-weight: 400;
    }
`