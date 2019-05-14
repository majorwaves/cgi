import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Form = styled.form`
  padding: 1rem;
  text-align: center;

  p {
    font-size: 14px;
    color: ${props => props.theme.color.dark};
  }

  a {
    color: ${props => props.theme.color.medium};
    text-decoration: none;
  }

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
      <p><strong>Investor Contact</strong>: <a href="mailto:investor@cgimg.com">investor@cgimg.com</a></p>
      <p><strong>Head Office Tel</strong>: <a href="tel:17865814800">(786) 581 4800</a></p><br/>
    </div>
    <Input placeholder='Email address' />
    <Input placeholder='Name' />
    <Input placeholder='Company Name' />
    <Input placeholder='Job Title' />
    <Button>Submit</Button>
  </Form>
);

export default ContactForm;
