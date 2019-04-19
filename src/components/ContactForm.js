import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Form = styled.form`
  padding: 1rem;

  h2 {
    font-size: 36px;
    margin: 0 0 2rem 0;
    text-align: center;
    color: ${props => props.theme.color.dark};
    font-family: ${props => props.theme.type.heading};
  }

  button {
    width: 100%;
    text-align: center;
    display: inline-block;
    padding: 1rem 2rem;
  }
`;

const Input = styled.input`
  appearance: none;
  padding: 1rem;
  border: 1px solid rgba(0,0,0,0.12);
  margin-bottom: 1rem;
  display: block;
  box-sizing: border-box;
  min-width: 300px;
  border-radius: 4px;

  &::placeholder {
    font-size: 16px;
  }
`;

const ContactForm = (props) => (
  <Form {...props}>
    <h2>Contact Us</h2>
    <div>
      <span>Investor Contact: investor@cgimg.com </span>
      <span>Head Office Tel: (786) 581 4800</span>
    </div>
    <Input placeholder='Email address' />
    <Input placeholder='Name' />
    <Input placeholder='Company Name' />
    <Input placeholder='Job Title' />
    <Button>Submit</Button>
  </Form>
);

export default ContactForm;
