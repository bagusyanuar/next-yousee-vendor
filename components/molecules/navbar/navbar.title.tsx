import React from 'react'
import styled from 'styled-components'
import { PageTitle, PageSubTitle } from '@/components/atoms/heading'

interface IProps {
    title: string
    subTitle: string
    withBackButton?: boolean
    className?: string
}
const NavbarTitle: React.FC<IProps> = ({
    title,
    subTitle,
    withBackButton = false,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <PageTitle text={title} />
            <PageSubTitle text={subTitle} />
        </Wrapper>
    )
}

export default NavbarTitle

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`