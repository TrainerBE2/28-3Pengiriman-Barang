import React from "react";
import styled from "styled-components";
import fastDelivery from "../assets/svgs/fast-delivery.svg";
import tracking from "../assets/svgs/tracking.svg";
import support from "../assets/svgs/support.svg";

const FeaturesContainer = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const Feature = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FeatureText = styled.div`
  text-align: left;
`;

const FeatureImage = styled.img`
  width: 60px;
  height: 60px;
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <h2>Our Features</h2>
      <Feature>
        <FeatureImage src={fastDelivery} alt="Fast Delivery" />
        <FeatureText>
          <h3>Fast Delivery</h3>
          <p>Experience the fastest delivery service in town.</p>
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureImage src={tracking} alt="Real-Time Tracking" />
        <FeatureText>
          <h3>Real-Time Tracking</h3>
          <p>Track your package in real-time from our app.</p>
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureImage src={support} alt="24/7 Customer Support" />
        <FeatureText>
          <h3>24/7 Customer Support</h3>
          <p>We are here to help you at any time of the day.</p>
        </FeatureText>
      </Feature>
    </FeaturesContainer>
  );
};

export default Features;
