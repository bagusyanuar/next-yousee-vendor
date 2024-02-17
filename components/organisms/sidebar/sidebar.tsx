import React from 'react'
import styled from 'styled-components'
import { SidebarWrapper } from '@/components/atoms/sidebar'

interface IProps { className?: string }
const Sidebar: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper>
            <SidebarWrapper>
                
            </SidebarWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    padding: 1rem 1rem;
`