import React from 'react'
import styled from 'styled-components'
import { DashboardTypeItemMolecule } from '@/components/molecules/dashboard'

interface IProps { className?: string }

const DashboardItemType: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper className={className}>
            <p className='title'>Item Types</p>
            <p className='sub-title'>Available Item Types</p>
            <TypesWrapper>
                <DashboardTypeItemMolecule icon='/assets/types/baliho.png' qty={10} name='Baliho' />
                <DashboardTypeItemMolecule icon='/assets/types/billboard.png' qty={10} name='Billboard' />
                <DashboardTypeItemMolecule icon='/assets/types/bando-jalan.png' qty={10} name='Bando Jalan' />
                <DashboardTypeItemMolecule icon='/assets/types/jpo.png' qty={10} name='JPO' />
                <DashboardTypeItemMolecule icon='/assets/types/led-banner.png' qty={10} name='LED Banner' />
                <DashboardTypeItemMolecule icon='/assets/types/videotron.png' qty={10} name='Videotron' />
                <DashboardTypeItemMolecule icon='/assets/types/megatron.png' qty={10} name='Megatron' />
            </TypesWrapper>
        </Wrapper>
    )
}

export default DashboardItemType

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
        font-weight: 600;
        font-size: 1em;
        color: var(--dark-color);
    }

    .sub-title {
        font-size: 0.8em;
        color: color-mix(in srgb, var(--dark-color) 70%, white);
        margin-bottom: 1.5rem;
    }
`

const TypesWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
`