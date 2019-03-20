import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import bg from '../images/quote-min.jpg'

const Wrapper = styled.div`
  color: white;
  height: 70vh;
  background: url(${bg});
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  min-height: 600px;


  h3 {
    font-weight: 500;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-size: 16px;
    font-family: ${props => props.theme.type.body};
  }

  h1 {
    font-family: ${props => props.theme.type.heading};
    font-size: 64px;
    font-weight: normal;
    text-align: center;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10vw;
  box-sizing: border-box;

`;

const Quote = (props) => (
  <Wrapper>
    <Text>
      <h3>Investment Focus</h3>
      <h1>“We believe in a contrarian, value-oriented approach to real estate investing”</h1>
      <Button light>Learn More</Button>
    </Text>
  </Wrapper>
);

export default Quote;
