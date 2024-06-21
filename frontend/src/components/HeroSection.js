import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero_image.jpg"; // Ensure you have an image named 'hero_image.jpg' in the assets folder

const Hero = styled.section`
  height: 100vh;
  background: url(${heroImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Add a dark overlay for better text readability */
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SubHeading = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background: #ff6347;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #ff4500;
  }
`;

const HeroSection = () => {
  return (
    <Hero>
      <Overlay />
      <Content>
        <Heading>Fast and Reliable Delivery Service</Heading>
        <SubHeading>Get your packages delivered on time, every time!</SubHeading>
        <Button>Get Started</Button>
      </Content>
    </Hero>
  );
};

export default HeroSection;
