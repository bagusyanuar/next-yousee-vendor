import React from 'react'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import { SidebarItem } from '@/components/atoms/sidebar'

interface IProps { className?: string }

const SidebarMenu: React.FC<IProps> = ({ className = '' }) => {
    const pathName = usePathname()
    console.log(pathName);

    return (
        <Wrapper className={className}>
            <SidebarItem to='/' text='Dashboard' icon='bxs-dashboard' className={pathName === '/dashboard' ? 'active' : ''} />
            <SidebarItem to='/' text='Titik Iklan' icon='bx-desktop' className={pathName === '/item' ? 'active' : ''} />
        </Wrapper>
    )
}

export default SidebarMenu

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`