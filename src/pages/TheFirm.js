import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import image from '../images/firm-neu2.jpg'
import Quote from '../components/Quote'
import image2 from '../images/fund-right-min.jpg'

const Wrapper = styled.div`

`;

const Section = styled.section`
  width: 80vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5vw;

  div {
    img {
      width: 100%;
      height: 100%;
      height: 50vw;
      object-fit: cover;
    }
  }

  h1 {
    font-family: ${props => props.theme.type.heading};
    font-size: 36px;
    font-weight: normal;
    margin-top: 0;

    &.large {
      font-size: 48px;
      margin-top: 0;
    }
  }

  span {
    font-size: 12px;
    opacity: 0.5;

    a {
      color: black;
      text-decoration: none;
      font-style: italic;
    }
  }

  p {
    line-height: 1.8em;
  }

  h4 {
    font-family: ${props => props.theme.type.sans};
    font-size: 14px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 0.2rem;
    margin: 0;
    opacity: 0.4;
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
        <h1 className='large'>Who We Are</h1>
        <p>CGI Merchant Group (CGI) is a private-equity, alternative investment management firm that capitalizes on commercial real estate and infrastructure opportunities by using an entrepreneurial approach to build stakeholder value. Within the past six months, the firm has deployed more than $150 million of capital in multiple assets classes including retail, office, and leisure. The Firm has a wealth of knowledge on capital markets – which combined with their ingenuity and experience – distinguishes them from other alternative investment managers. </p>
        <p>Founded in 2006, by Raoul Thomas, CGI Merchant Group (CGI) advises and connects its client group with a diverse array of investment opportunities. CGI provides strategic and effective financing that increases the value of its assets currently managing more than $250 million in the South Florida area.</p>
      </div>
      <div>
        <img src={image2} alt="the firm" />
      </div>
    </Section>
    <Section>
      <div>
        <h4>Remaining Nimble</h4>
        <h1>Creating Value</h1>
        <p>At CGI, the focus is to remain nimble, execution-minded and in a position to create value where others may not. The Firm relies on strategic alliances, operating partnerships and third-party consultants to remain agile, while preserving scalability. CGI implements “best-industry practices” and engage in “hands-on” asset management techniques to ensure all investment portfolios and its inherent risks are managed in an optimal manner.</p>
      </div>
      <div>
        <h4>Contrarian Views</h4>
        <h1>Our Mission</h1>
        <p>CGI Merchant Group is a private equity, alternative investment firm that capitalizes on commercial real estate and infrastructure. The firm’s nimble team, deep industry knowledge, and international network is positioned to create unique real estate opportunities that produce superior returns for stakeholders. Through this work, CGI Merchant Group has built a distinct culture; based upon contrarian views and an entrepreneurial approach to achieve exceptional long-term value for every client and community serve</p>
      </div>
    </Section>
    <Quote text='“We believe in a contrarian, value-oriented approach to real estate investing”' />
  </Wrapper>
);

export default TheFirm;
