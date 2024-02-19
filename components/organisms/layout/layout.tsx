import React from 'react'
import styled from 'styled-components'
import { NavbarOrganism } from '@/components/organisms/navbar'
import { SidebarOrganism } from '@/components/organisms/sidebar'

interface IProps {
    title: string
    subTitle: string
    withBackButton?: boolean
    children?: React.ReactNode
}
const Layout: React.FC<IProps> = ({
    children,
    title,
    subTitle,
    withBackButton = false,
}) => {
    return (
        <Wrapper>
            <SidebarOrganism />
            <ContentWrapper>
                <NavbarOrganism title={title} subTitle={subTitle} withBackButton={withBackButton} />
                <Content>
                    {children}
                </Content>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Layout

const Wrapper = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: color-mix(in srgb, var(--light-color) 20%, white);
`

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 260px;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const Content = styled.div`
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`