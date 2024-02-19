import React from 'react'
// import { SidebarMenu } from '@/components/molecules/sidebar'
// import Sidebar, { SidebarBrand, SidebarItem } from '@/components/atoms/sidebar'
import { Layout } from '@/components/organisms/layout'
import { DashboardCardInfoOrganism } from '@/components/organisms/dashboard'

function DashboardTemplate() {
    return (
        <Layout title='Dashboard' subTitle='welcome to yousee vendor dashboard'>
            <DashboardCardInfoOrganism  />
        </Layout>
    )
}

export default DashboardTemplate