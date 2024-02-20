import React from 'react'
import styled from 'styled-components'

interface IProps { className?: string }
const Divider: React.FC<IProps> = ({ className = '' }) => {
    return (
        <StyledDivider />
    )
}

export default Divider

const StyledDivider = styled.hr`
    width: 100%;
    height: 1px;
    margin: 0 0;
`