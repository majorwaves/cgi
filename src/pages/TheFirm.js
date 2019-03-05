import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import miami from '../images/miami.jpg'
import video from '../images/city.mp4'
import ReactPlayer from 'react-player'
import Quote from '../components/Quote'

const Wrapper = styled.div`

`;

const Section = styled.section`
  width: 80vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5vw;

  h1 {
    font-family: ${props => props.theme.type.heading};
    font-size: 36px;
    font-weight: normal;
  }

  p {
    line-height: 1.6em;
  }
`;

const TheFirm = (props) => (
  <Wrapper>
    <PageHeader
      image={miami}
      title='The Firm'
      text='Here is a blurb about CGI'
    />
    <Section>
      <div>
        <h1>Who We Are</h1>
        <p>CGI Merchant Group (CGI) is a private-equity, alternative investment management firm that capitalizes on commercial real estate and infrastructure opportunities by using an entrepreneurial approach to build stakeholder value. Within the past six months, the firm has deployed more than $150 million of capital in multiple assets classes including retail, office, and leisure. The Firm has a wealth of knowledge on capital markets – which combined with their ingenuity and experience – distinguishes them from other alternative investment managers. </p>
      </div>
      <ReactPlayer
        playing
        muted
        loop
        className='hero_video'
        url={video}
      />
    </Section>
    <Section>
      <div>
        <h1>Securing Futures</h1>
        <p>CGI Merchant Group (CGI) is a private-equity, alternative investment management firm that capitalizes on commercial real estate and infrastructure opportunities by using an entrepreneurial approach to build stakeholder value. Within the past six months, the firm has deployed more than $150 million of capital in multiple assets classes including retail, office, and leisure. The Firm has a wealth of knowledge on capital markets – which combined with their ingenuity and experience – distinguishes them from other alternative investment managers. </p>
      </div>
      <div>
        <h1>Global</h1>
        <p>CGI Merchant Group (CGI) is a private-equity, alternative investment management firm that capitalizes on commercial real estate and infrastructure opportunities by using an entrepreneurial approach to build stakeholder value. Within the past six months, the firm has deployed more than $150 million of capital in multiple assets classes including retail, office, and leisure. The Firm has a wealth of knowledge on capital markets – which combined with their ingenuity and experience – distinguishes them from other alternative investment managers. </p>
      </div>
    </Section>
    <Quote />
  </Wrapper>
);

export default TheFirm;
