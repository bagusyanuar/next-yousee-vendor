import React from 'react'
import { Card } from '@/components/atoms/card'
import styled from 'styled-components'

type TTheme = 'red' | 'orange' | 'green' | 'main'

interface IProps {
    title: string
    subTitle: string
    className?: string
    theme?: TTheme
}
const DashboardCardInformation: React.FC<IProps> = ({
    title = '',
    subTitle = '',
    theme = 'main',
    className = ''
}) => {
    return (
        <Wrapper className={className} >
            <InformationWrapper>
                <h5>{title}</h5>
                <h1>{subTitle}</h1>
            </InformationWrapper>
            <IconWrapper $theme={theme}>
                <i className='bx bx-desktop'></i>
            </IconWrapper>
        </Wrapper>
    )
}

export default DashboardCardInformation

const themeBase = ({ $theme }: { $theme: TTheme }) => {
    let result = ''
    switch ($theme) {
        case 'main':
            result = 'background-color: var(--primary-color);'
            break;
        case 'red':
            result = 'background-color: #FF8F8F;'
            break;
        case 'orange':
            result = 'background-color: #F3B664;'
            break;
        case 'green':
            result = 'background-color: #9ADE7B;'
            break;
        default:
            break;
    }
    return result
}

const Wrapper = styled(Card)`
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
`

const InformationWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    h5 {
        font-size: 0.8em;
        color: var(--light-color);
        margin-bottom: 0;
    }

    h1 {
        font-size: 2em;
        font-weight: 500;
        color: var(--dark-color);
        line-height: 1;
    }
`

const IconWrapper = styled.div<{ $theme: TTheme }>`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${themeBase}
    

    i {
        color: white;
        font-size: 1.25em;
    }
`



