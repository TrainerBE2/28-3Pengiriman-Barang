import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
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

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <Form>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea placeholder="Your Message" rows="5" />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;