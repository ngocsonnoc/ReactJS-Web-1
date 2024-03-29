import styled from 'styled-components';

export const InfoSec = styled.div`
color: #fff;
padding: 120px 0;
background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
@media screen and (max-width:768px){
    padding: 30px 0;
}
`
export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction:${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

`
export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;
@media screen and (max-width:768px){
max-width: 100%;
flex-basis: 100%;
display: flex;
justify-content: center;
}
`
export const TextWrapper = styled.div`
z-index: 5;
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
@media screen and (max-width:768px){
    padding-bottom: 65px;
}
`
export const TopLine = styled.div`
color: ${({ lightTopLight }) => (lightTopLight ? '#a9b3c1' : '#4B59F7')};
font-size:18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`
export const Heading = styled.h1`
margin: 20px;
font-size: 48px;
line-height: 1.1;
width: 100%;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`
export const SubTitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#4B59F7')}
`
export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
@media screen and (max-width:768px){
    max-width: 450px;
}

`
export const Img = styled.img`
z-index: 0;
width: 100%;
padding-right: 0;
border: 0;
vertical-align: middle ;
display: inline-block;
max-height: 500px;
`
