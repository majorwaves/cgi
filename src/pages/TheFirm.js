import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import image from '../images/bong.jpg'
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
      image={image}
      title='The Firm'
      text=' Investment Management with Experience and Ingenuity'
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
        url='https://thenexusfl.com/city.mp4'
      />
    </Section>
    <Section>
      <div>
        <h1>Creating Value</h1>
        <p>At CGI, the focus is to remain nimble, execution-minded and in a position to create value where others may not. The Firm relies on strategic alliances, operating partnerships and third-party consultants to remain agile, while preserving scalability. CGI implements “best-industry practices” and engage in “hands-on” asset management techniques to ensure all investment portfolios and its inherent risks are managed in an optimal manner.</p>
      </div>
      <div>
        <h1>Mission</h1>
        <p>CGI Merchant Group is a private equity, alternative investment firm that capitalizes on commercial real estate and infrastructure. The firm’s nimble team, deep industry knowledge, and international network is positioned to create unique real estate opportunities that produce superior returns for stakeholders. Through this work, CGI Merchant Group has built a distinct culture; based upon contrarian views and an entrepreneurial approach to achieve exceptional long-term value for every client and community serve</p>
      </div>
    </Section>
    <Quote />
  </Wrapper>
);

export default TheFirm;
