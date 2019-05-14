import React from 'react'
import styled from 'styled-components'
import bg from '../images/quote-neu.jpg'
import { device } from '../utils/devices'

const Wrapper = styled.div`
  color: white;
  height: 70vh;
  background: url(${props => props.image ? props.image : bg});
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  min-height: 400px;

  @media ${device.laptop}{
    min-height: 600px;
  }

  h3 {
    font-weight: 500;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-size: 16px;
    font-family: ${props => props.theme.type.body};
  }

  h1 {
    font-family: ${props => props.theme.type.heading};
    font-size: 36px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 2rem;

    @media ${device.laptop}{
      font-size: 48px;
      margin-bottom: 4rem;
    }
  }
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.dark ? 'rgba(0,38,99,0.8)' : 'rgba(0,0,0,0.2)' };
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10vw;
  box-sizing: border-box;
`;

const Note = styled.div`
  font-family: ${props => props.theme.type.sans};
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.1rem;

  @media ${device.laptop}{
    font-size: 18px;
    letter-spacing: 0.3rem;
  }
`;

const Quote = ({ image, text, dark}) => (
  <Wrapper image={image}>
    <Text dark={dark}>
      <h3>Investment Focus</h3>
      <h1>{text}</h1>
      <Note>– CGI Merchant Group</Note>
    </Text>
  </Wrapper>
);

export default Quote;
