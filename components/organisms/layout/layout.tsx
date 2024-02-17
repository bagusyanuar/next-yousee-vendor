import React from 'react'
import styled from 'styled-components'
import {
    SidebarOrganism
} from '@/components/organisms/sidebar'

interface IProps {
    children?: React.ReactNode
}
const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <Wrapper>
            <SidebarOrganism />
        </Wrapper>
    )
}

export default Layout

const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    background-color: color-mix(in srgb, var(--light-color) 20%, white) ;
`