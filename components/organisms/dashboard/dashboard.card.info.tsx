import React from 'react'
import styled from 'styled-components'
import { DashboardCardInfoMolecule } from '@/components/molecules/dashboard'

interface IProps { className?: string }
const DashboardCardInfo: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper className={className}>
            <DashboardCardInfoMolecule title='Jumlah Titik' subTitle='12' theme='red' />
            <DashboardCardInfoMolecule title='Titik Tersedia' subTitle='8' theme='orange' />
            <DashboardCardInfoMolecule title='Titik Terpakai' subTitle='4' theme='green' />
        </Wrapper>
    )
}

export default DashboardCardInfo

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`