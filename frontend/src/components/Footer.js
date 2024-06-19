import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 10px;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #ff6347;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <SectionTitle>About Us</SectionTitle>
        <p>
          DeliveFree is committed to providing fast and reliable delivery services across the globe. Our mission is to ensure your packages are delivered on time, every time.
        </p>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactList>
          <ContactItem>Email: contact@delivefree.com</ContactItem>
          <ContactItem>Phone: +1 234 567 890</ContactItem>
          <ContactItem>Address: 123 Delivery Lane, Speedy City, Fastland</ContactItem>
        </ContactList>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Follow Us</SectionTitle>
        <SocialMedia>
          <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialLink>
          <SocialLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
        </SocialMedia>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;