import React from 'react'
import { Layout } from '@/components/organisms/layout'
import {
    DashboardCardInfoOrganism,
    DashboardTableItemOrganism,
    DashboardTypeItemOrganism
} from '@/components/organisms/dashboard'
import styled from 'styled-components'

function DashboardTemplate() {
    return (
        <Layout title='Dashboard' subTitle='welcome to yousee vendor dashboard'>
            <DashboardCardInfoOrganism className='mb-5' />
            <SecondSectionWrapper>
                <TableItemWrapper>
                    <DashboardTableItemOrganism />
                </TableItemWrapper>
                <ItemTypeWrapper>
                    <DashboardTypeItemOrganism />
                </ItemTypeWrapper>
            </SecondSectionWrapper>
        </Layout>
    )
}

export default DashboardTemplate

const SecondSectionWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const TableItemWrapper = styled.div`
    grid-column: 1 / span 3;
    min-height: 300px;
`
const ItemTypeWrapper = styled.div`
    height: 12rem;
`