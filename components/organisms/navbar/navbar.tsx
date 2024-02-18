import React from 'react'
import styled from 'styled-components'
import { NavbarTitleMolecule, NavbarActionMolecule } from '@/components/molecules/navbar'

interface IProps {
    title: string
    subTitle: string
    withBackButton?: boolean
    className?: string
}
const NavbarOrganism: React.FC<IProps> = ({
    title,
    subTitle,
    withBackButton = false,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <NavbarTitleMolecule title={title} subTitle={subTitle} withBackButton={withBackButton} />
            <NavbarActionMolecule image='' />
        </Wrapper>
    )
}

export default NavbarOrganism

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
`
