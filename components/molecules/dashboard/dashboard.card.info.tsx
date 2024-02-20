import React from 'react'
import { Card } from '@/components/atoms/card'
import { Divider } from '@/components/atoms/divider'
import { LinkIcon } from '@/components/atoms/link'
import styled from 'styled-components'
import { CardRadius } from '@/components/util'

type TTheme = 'red' | 'orange' | 'green' | 'main'

interface IProps {
    title: string
    subTitle: string
    icon: string
    className?: string
    theme?: TTheme
}
const DashboardCardInformation: React.FC<IProps> = ({
    title = '',
    subTitle = '',
    icon,
    theme = 'main',
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <CardBody>
                <InformationWrapper>
                    <h5>{title}</h5>
                    <h1>{subTitle}</h1>
                </InformationWrapper>
                <IconWrapper $theme={theme}>
                    <i className={`bx ${icon}`}></i>
                </IconWrapper>
            </CardBody>
            <Divider />
            <CardFooter>
                <LinkIcon icon='bx-right-arrow-alt' to='#' />
            </CardFooter>
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
`

const CardBody = styled.div`
    width: 100%;
    padding: 1.5rem 1.5rem;
    display: flex;
    align-items: center;
`

const CardFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom-right-radius: ${CardRadius.medium};
    border-bottom-left-radius: ${CardRadius.medium};
`

const InformationWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    h5 {
        font-size: 0.8em;
        color: color-mix(in srgb, var(--dark-color) 70%, white);
        margin-bottom: 0.5rem;
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
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${themeBase}
    

    i {
        color: white;
        font-size: 1.5em;
    }
`



