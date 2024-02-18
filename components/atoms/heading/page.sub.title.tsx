import React from 'react'
import styled from 'styled-components'

interface IProps { text: string, className?: string }

const PageSubTitle: React.FC<IProps> = ({ text, className = '' }) => {
    return (
        <StyledSubTitle className={className}>
            {text}
        </StyledSubTitle>
    )
}

export default PageSubTitle

const StyledSubTitle = styled.p`
    color: color-mix(in srgb, var(--light-color) 70%, black);
    margin-bottom: 0;
`