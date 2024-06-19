import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 DeliverEase. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
