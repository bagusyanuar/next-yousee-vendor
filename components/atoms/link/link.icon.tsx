import React from 'react'
import styled from 'styled-components'

interface IProps { icon: string, to: string, className?: string }
const LinkIcon: React.FC<IProps> = ({ icon, to, className = '' }) => {
    return (
        <StyledLinkIcon className={className} href={to}>
            <i className={`bx ${icon}`}></i>
        </StyledLinkIcon>
    )
}

export default LinkIcon

const StyledLinkIcon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--primary-color);
    text-decoration: none;

    &:hover {
        color: color-mix(in srgb,var(--primary-color) 80%, black );

        i {
            color: color-mix(in srgb,var(--primary-color) 80%, black );
        }
    }

    i {
        color: var(--primary-color);
        font-size: 1.25em;
    }
`

