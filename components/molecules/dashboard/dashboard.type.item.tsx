import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Card } from '@/components/atoms/card'
import { CardPadding } from '@/components/util'

interface IProps { icon: string, qty: number, name: string, className?: string }
const DashboardItemType: React.FC<IProps> = ({
    icon,
    qty,
    name,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <TypeIconWrapper>
                <Image src={icon} width={15} height={15} alt='type-image' />
            </TypeIconWrapper>
            <TypeInfoWrapper>
                <TypeQuantity>{qty}</TypeQuantity>
                <TypeName>{name}</TypeName>
            </TypeInfoWrapper>
        </Wrapper>
    )
}

export default DashboardItemType

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`
const TypeIconWrapper = styled(Card)`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
`

const TypeInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const TypeQuantity = styled.p`
    font-size: 0.8em;
    font-weight: 700;
    margin-bottom: 0;
`

const TypeName = styled.p`
    font-size: 0.8em;
    color: color-mix(in srgb, var(--dark-color) 70%, white);
`