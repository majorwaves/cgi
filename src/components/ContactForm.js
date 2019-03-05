import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Form = styled.form`
  padding: 1rem;

  h2 {
    font-size: 36px;
    margin: 0 0 2rem 0;
    font-family: ${props => props.theme.type.heading};
  }

  button {
    width: 100%;
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
  border-radius: 10px;

  &::placeholder {
    font-size: 16px;
  }
`;

const ContactForm = (props) => (
  <Form {...props}>
    <h2>Contact Us</h2>
    <Input placeholder='Email address' />
    <Input placeholder='Name' />
    <Input placeholder='Company Name' />
    <Input placeholder='Job Title' />
    <Button>Submit</Button>
  </Form>
);

export default ContactForm;
