import React from "react";
import styled from "styled-components";
import sameDay from "../assets/svgs/same_day.svg";
import international from "../assets/svgs/international.svg";
import express from "../assets/svgs/express.svg";

const ServicesContainer = styled.section`
  padding: 60px 20px;
  background: #fff5e1;
  text-align: center;
`;

const Service = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ServiceText = styled.div`
  text-align: left;
`;

const ServiceImage = styled.img`
  width: 60px;
  height: 60px;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <h2>Our Services</h2>
      <Service>
        <ServiceImage src={sameDay} alt="Same Day Delivery" />
        <ServiceText>
          <h3>Same Day Delivery</h3>
          <p>Get your packages delivered on the same day.</p>
        </ServiceText>
      </Service>
      <Service>
        <ServiceImage src={international} alt="International Shipping" />
        <ServiceText>
          <h3>International Shipping</h3>
          <p>We deliver packages worldwide with ease.</p>
        </ServiceText>
      </Service>
      <Service>
        <ServiceImage src={express} alt="Express Delivery" />
        <ServiceText>
          <h3>Express Delivery</h3>
          <p>Fast and reliable express delivery service.</p>
        </ServiceText>
      </Service>
    </ServicesContainer>
  );
};

export default Services;
