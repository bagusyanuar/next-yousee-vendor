import React from 'react'
import styled from 'styled-components'

interface IProps { text: string, to: string, icon?: string, className?: string }
const SidebarItem: React.FC<IProps> = ({
    text,
    to,
    icon = 'bx-circle',
    className = ''
}) => {
    return (
        <Wrapper className={className} href={to}>
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
    color: color-mix(in srgb, var(--light-color) 70%, black);
    transition: all ease-in-out 200ms;
    border-radius: 10px;
    padding: 0.75rem 0.75rem;
    font-size: 1em;

    &.active {
        background-color: var(--primary-color);
        color: whitesmoke;
    }

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