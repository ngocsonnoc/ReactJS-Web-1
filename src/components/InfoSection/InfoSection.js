import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyle'
import { Heading, Img, ImgWrapper, InfoColumn, InfoRow, InfoSec, SubTitle, TextWrapper, TopLine } from './infosection.style'

const InfoSection = ({ lightBg,start,img,alt, imgStart, topline, headline, description, buttonLabel, lightTopLine, lightText, lightTextDesc, primary }) => {
    return (
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                            <Link to='/sign-up'>
                                <Button big fontBig primary={primary}>{buttonLabel}</Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                        <Img src={img.default} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
    )
}

export default InfoSection
