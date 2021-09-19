import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
background: #101522;
padding: 2rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
@media screen and (max-width:820px) {
    flex-direction: column;
}
`
export const FooterMain = styled.div`
display: flex;
width: 90%;
justify-content: space-around;
align-items: flex-start;
margin: 0 auto 0 auto;
@media screen and (max-width:520px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`
export const FooterSections = styled.div`
width: 30%;
display: flex;
flex-direction: column;
padding-bottom: 7px;
@media screen and (max-width:520px) {
    width: 90%;
    border-bottom: 1px solid rgba(209, 213, 219, 1);
    padding-top: 1rem;
}

`
export const FooterLogo = styled.div`
display: flex;
width: 100%;
height: auto;
flex-direction: row;
justify-content: center;
padding: 10px 0;
color: #fff;
@media screen and (max-width:520px) {
    padding-bottom: 0px;
}
`
export const FooterLogoIcon = styled(AiFillGithub)`
color: #fff;
padding-right: 10px;
padding-bottom: 20px;
font-size: 46px;
@media screen and (max-width:520px) {
    padding-bottom: 15px;
}
`
export const FooterLinks = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px 0;
@media screen and (max-width:520px) {
    padding-top: 3px;
}
`
export const FooterLinkItem = styled(Link)`
color: #fff;
padding: 5px;
transition: all 0.3s ease-out;
&:hover{
    color: #2644e6;
}

`
export const FooterSectionHeading = styled.h2`
color: #fff;
padding-bottom: 10px;
padding-top: 10px;
@media screen and (max-width:520px) {
    padding-top: 1rem;
}
`
export const RecentNewContent = styled.p`
color: rgba(156, 163, 175, 1);
font-size: 12px;
width: 95%;
margin: auto;
display: flex;

@media screen and (max-width:520px){
    font-size: 16px;
}
`
export const FooterSocialIcons = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;

@media screen and (max-width:520px){
}
`

export const SocialIconLink = styled.a`
color: #fff;
padding: 0 10px;
font-size: 26px;
transition: all 0.3s ease-out;
&:hover{
    color:#f7c400;
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
border-radius: 5px;
`

export const Input = styled.input`
outline: none;
border: none;
margin: 5px 0 5px 0;
font-size: 14px;
padding: 4px 15px;
border-radius:5px;
&::placeholder{

}

`
export const TextArea = styled.textarea`
outline: none;
border: none;
margin: 5px 0 5px 0;
font-size: 14px;
padding: 4px 15px;
resize: none;
border-radius:5px;
height: 80px;
padding-top: 15px;
@media screen and (max-width:520px){
    height: 100px;
}
`
export const FooterSecond = styled.div`
display: flex;
flex-direction: row;
padding: 20px 0;
width: 100%;
align-items: center;
justify-content: center;
border-top: 1px solid gray;
`
export const WebsiteRights = styled.small`
font-size: 8px;
color: #fff;

`
export const FooterSub = styled.p`
color: #fff;
font-size: 16px;
`

