import React from 'react'
import styled from 'styled-components'
import { DashboardCardTypeMolecule } from '@/components/molecules/dashboard'

interface IProps { className?: string }
const DashboardCardType: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper>
            <DashboardCardTypeMolecule icon='/assets/types/baliho.png' title='Baliho' subTitle='100' />
            <DashboardCardTypeMolecule icon='/assets/types/billboard.png' title='Billboard' subTitle='30' />
            <DashboardCardTypeMolecule icon='/assets/types/bando-jalan.png' title='Bando Jalan' subTitle='45' />
            <DashboardCardTypeMolecule icon='/assets/types/led-banner.png' title='LED Banner' subTitle='15' />
            <DashboardCardTypeMolecule icon='/assets/types/jpo.png' title='JPO' subTitle='25' />
            <DashboardCardTypeMolecule icon='/assets/types/videotron.png' title='Videotron' subTitle='37' />
            <DashboardCardTypeMolecule icon='/assets/types/megatron.png' title='Megatron' subTitle='7' />
        </Wrapper>
    )
}

export default DashboardCardType

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`