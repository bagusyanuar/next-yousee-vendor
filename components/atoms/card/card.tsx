import React from 'react'
import styled from 'styled-components'
import { CardRadius } from '@/components/util'

interface IProps {
    children?: React.ReactNode
    className?: string
    onClick?: () => void
}
const Card: React.FC<IProps> = ({
    children,
    className = '',
    onClick = () => { }
}) => {
    return (
        <StyledCard className={className} onClick={onClick}>
            {children}
        </StyledCard>
    )
}

export default Card

const StyledCard = styled.div`
    background-color: white;
    border-radius: ${CardRadius.medium};
    /* padding: 1rem 1rem; */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`