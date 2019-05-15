import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Wrapper = styled.div`
  width: 80vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 5vw;
`

const Form = styled.form`
  padding: 1rem;

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
  width: 100%;
  border-radius: 4px;

  &::placeholder {
    font-size: 16px;
  }
`;

const Info = styled.div`
  border-right: 1px solid rgba(0,0,0,0.12);
  padding-right: 2rem;

  div {
    margin-bottom: 3rem;

    h4 {
      font-size: 18px;
      font-family: ${props => props.theme.type.heading};
    }
  }
`


class Contact extends Component {

  render() {
    return (
      <Wrapper>
        <Info>
        <div>
          <h4>Miami — Head Office</h4>
          <p>801 Brickell Avenue, Suite 700</p>
          <p>Miami, Florida 33131</p>
          <p>T: 786-581-4800</p>
          <p>F: 786-523-0590</p>
        </div>
        <div>
          <h4>New York</h4>
          <p>800 3rd Avenue</p>
          <p>New York, New York 10022</p>
          <p>T: 212-220-4047</p>
          <p>F: 786-523-0590</p>
        </div>
        </Info>
        <Form {...this.props}>
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
      </Wrapper>
    );
  }

}

export default Contact;
