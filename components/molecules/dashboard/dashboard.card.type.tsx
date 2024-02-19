import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/atoms/card'
import styled from 'styled-components'

interface IProps {
    icon: string
    title: string
    subTitle: string
    className?: string
}

const DashboardCardType: React.FC<IProps> = ({
    icon,
    title,
    subTitle,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <Image src={icon} height={25} width={25} alt='type-image' />
            <InformationWrapper>
                <h5>{title}</h5>
                <h1>{subTitle}</h1>
            </InformationWrapper>
        </Wrapper>
    )
}

export default DashboardCardType

const Wrapper = styled(Card)`
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;

    img {
        margin-right: 1.25rem;
    }
`

const InformationWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    h5 {
        font-size: 0.8em;
        color: color-mix(in srgb, var(--dark-color) 70%, white);
        margin-bottom: 0.25rem;
    }

    h1 {
        font-size: 1.75em;
        font-weight: 500;
        color: var(--dark-color);
        line-height: 1;
    }
`