import React from 'react'
import { SidebarMenu } from '@/components/molecules/sidebar'
import Sidebar, { SidebarBrand, SidebarItem } from '@/components/atoms/sidebar'

function DashboardTemplate() {
    return (
        <main>
            <Sidebar>
                <SidebarBrand image='/assets/images/brand.png' className='mb-10' />
                <SidebarMenu />
            </Sidebar>
        </main>
    )
}

export default DashboardTemplate