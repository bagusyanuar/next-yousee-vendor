import React from 'react'
// import { SidebarMenu } from '@/components/molecules/sidebar'
// import Sidebar, { SidebarBrand, SidebarItem } from '@/components/atoms/sidebar'
import { Layout } from '@/components/organisms/layout'
import { DashboardCardInfoOrganism, DashboardCardTypeOrganism } from '@/components/organisms/dashboard'

function DashboardTemplate() {
    return (
        <Layout title='Dashboard' subTitle='welcome to yousee vendor dashboard'>
            <DashboardCardInfoOrganism className='mb-5'  />
            <DashboardCardTypeOrganism />
        </Layout>
    )
}

export default DashboardTemplate