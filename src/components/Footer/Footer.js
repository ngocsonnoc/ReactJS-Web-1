import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Button } from '../../globalStyle'
import { FooterContainer, FooterLinkItem, FooterLinks, FooterLogo, FooterLogoIcon, FooterMain, FooterSecond, FooterSectionHeading, FooterSections, FooterSocialIcons, FooterSub, Form, Input, RecentNewContent, SocialIconLink, TextArea, WebsiteRights } from './footer.style'

const Footer = ({ recentNew, menuItems }) => {
    const renderFooterMenu = (items) => {
        let result = ''
        if (items) {
            result = items.map((item, index) => {
                if (item.label !== 'Home')
                    return <FooterLinkItem to={item.path} key={index}>{item.label}</FooterLinkItem>
            return null
                })
        }
        return result
    }
    return (
        <FooterContainer>
            <FooterMain>
                <FooterSections>
                    <FooterLogo>
                        <FooterLogoIcon />
                        <h2>I'm Son</h2>
                    </FooterLogo>
                    <FooterLinks>
                        {renderFooterMenu(menuItems)}
                    </FooterLinks>
                </FooterSections>
                <FooterSections>
                    <FooterSectionHeading>Recent News</FooterSectionHeading>
                    <RecentNewContent> Businesses that use ReactJS are assured of better performance compared to those that use other frameworks. Because ReactJS helps to prevent updating of DOM, it means that the apps will be faster and deliver better UX. ReactJS was designed to help improve the total rendered pages from the website server. </RecentNewContent>
                    <FooterSectionHeading>Meet me at</FooterSectionHeading>
                    <FooterSocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='GitHub'>
                            <AiFillGithub />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                    </FooterSocialIcons>
                </FooterSections>
                <FooterSections>
                    <FooterSectionHeading>Contact Me</FooterSectionHeading>
                    <Form>
                        <Input type='text' name='email' placeholder='Email' />
                        <TextArea name='message' placeholder='Your message here!' />
                        <Button bigFont primary>Send message</Button>
                    </Form>
                </FooterSections>
            </FooterMain>
            <FooterSecond>
                <WebsiteRights>SON94</WebsiteRights>
                <FooterSub>
                    Copyright 2021 - By I'm Son
                </FooterSub>
            </FooterSecond>
        </FooterContainer>
    )
}

export default Footer
