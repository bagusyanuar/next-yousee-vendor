import React from 'react'
import styled from 'styled-components'

interface IProps { children?: React.ReactNode, className?: string }

const Sidebar: React.FC<IProps> = ({ children, className = '' }) => {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.25rem;
    width: 240px;
    height: 100vh;
    position: fixed;
    background-color: white;
    border-radius: 10px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */

`