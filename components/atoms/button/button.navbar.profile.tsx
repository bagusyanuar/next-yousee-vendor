import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface IProps { image?: string, className?: string }

const ButtonNavbarProfile: React.FC<IProps> = ({
    image = '/assets/images/avatar.png',
    className = ''
}) => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    const ref = useOuterClick(() => {
        setOpenDropdown(false)
    })

    const openDropdownHandler = () => {
        setOpenDropdown(openDropdown => !openDropdown)
    }
    return (
        <Wrapper className={className} ref={ref} onClick={openDropdownHandler}>
            <Image src={image} height={80} width={80} alt='profile-picture' />
            <DropdownWrapper className={`${openDropdown ? 'open' : ''}`}>
                <DropdownItem href='#'>
                    <i className='bx bx-lock-alt'></i>
                    <span>Reset Password</span>
                </DropdownItem>
                <DropdownItem href='#'>
                    <i className='bx bx-power-off'></i>
                    <span>Logout</span>
                </DropdownItem>
            </DropdownWrapper>
        </Wrapper>
    )
}

export default ButtonNavbarProfile

function useOuterClick(callback: () => void): any {
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        window.addEventListener('click', handleClick);
        function handleClick(event: MouseEvent) {
            const target = event.target as HTMLAnchorElement
                | HTMLInputElement
                | HTMLParagraphElement
                | HTMLButtonElement
                | HTMLHeadingElement
                | HTMLDivElement;
            if (target?.contains(innerRef.current)) {
                callback()
            }
            console.log(innerRef);

        };
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [callback, innerRef]);
    return innerRef
}



const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    
    img {
        height: 45px;
        width: 45px;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
    }
`

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 200px;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    top: 30px;
    right: 0;
    opacity: 0;
    transition: opacity 200ms ease-in-out, top 200ms ease-in-out, visibility 200ms linear;
    padding: 0.75rem 0.75rem;
    visibility: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &.open {
        visibility: visible;
        opacity: 1;
        top: 50px;
    }
`

const DropdownItem = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.8em;
    color: var(--dark-color);
    padding: 0.75rem 0.5rem;
    border-radius: 5px;
    
    &:hover {
        background-color: color-mix(in srgb, var(--dark-color) 5%, white);
    }

    i {
        margin-right: 0.5rem;
        line-height: 1;
    }

    span {
        line-height: 1;
    }
`