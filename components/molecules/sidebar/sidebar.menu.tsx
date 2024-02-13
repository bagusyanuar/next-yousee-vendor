import React from 'react'
import styled from 'styled-components'
import { SidebarItem } from '@/components/atoms/sidebar'

const SidebarMenu = () => {
    return (
        <Wrapper>
            <SidebarItem text='Dashboard' icon='bxs-dashboard' />
            <SidebarItem text='Item' icon='bx-desktop' />
        </Wrapper>
    )
}

export default SidebarMenu

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25;
`