import React from 'react'
import styled from 'styled-components'

interface IProps { text: string, className?: string }

const PageTitle: React.FC<IProps> = ({
    text,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            {text}
        </Wrapper>
    )
}

export default PageTitle

const Wrapper = styled.h1`
    font-size: 1.75em;
    font-weight: 500;
    color: var(--dark-color);
`