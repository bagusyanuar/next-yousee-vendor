import React from 'react'
import Sidebar, { SidebarBrand, SidebarItem } from '@/components/atoms/sidebar'

function DashboardTemplate() {
    return (
        <main>
            <Sidebar>
                <SidebarBrand image='/assets/images/brand.png' className='mb-10' />
                <SidebarItem text='Dashboard'/>
            </Sidebar>
        </main>
    )
}

export default DashboardTemplate