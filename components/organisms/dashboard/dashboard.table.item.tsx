import React from 'react'
import { Card } from '@/components/atoms/card'
import styled from 'styled-components'
import { CardPadding } from '@/components/util'

interface IProps { className?: string }
const DashboardTableItem: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper>
            <p>Data Table Items </p>
        </Wrapper>
    )
}

export default DashboardTableItem

const Wrapper = styled(Card)`
    padding: ${CardPadding.large};
    min-height: 300px;

    p {
        font-weight: 600;
        font-size: 1em;
        color: var(--dark-color);
    }
`