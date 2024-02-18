import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { SidebarWrapper } from '@/components/atoms/sidebar'
import { SidebarMenuMolecules } from '@/components/molecules/sidebar'

interface IProps { className?: string }
const Sidebar: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper>
            <SidebarWrapper>
                <BrandWrapper className='mb-5'>
                    <Image src='/assets/images/brand.png' height={180} width={180} alt='brand-image' />
                </BrandWrapper>
                <SidebarMenuMolecules />
            </SidebarWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    padding: 1rem 1rem;
`

const BrandWrapper = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`