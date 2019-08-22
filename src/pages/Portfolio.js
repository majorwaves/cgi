import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import image from '../images/portfolio-beta.jpg'
import { device } from '../utils/devices'
import Portfolio from '../components/Portfolio'
import Helmet from 'react-helmet'

const Wrapper = styled.div`
  margin-top: 92px;

  @media ${device.laptop}{
    margin-top: -92px;
  }
`;

class PortfolioPage extends Component {

  render(){
    return (
      <Wrapper>
        <Helmet title='CGI | Portfolio'>
          <meta property="og:title" content="CGI | Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://cgiimg.com/the-firm" />
          <meta property="og:image" content={image} />
          <meta property="og:description" content="CGI Merchant Group (“CGI”) is a private equity, alternative investment management that focuses on real estate value-added investment opportunities in the U.S. Through strategic and effective management and financing, CGI increases the value of its assets on commercial real estate and infrastructure investments and transforms them into Class A, fully-operational assets. The Firm has a wealth of knowledge on capital markets – which combined with their ingenuity and experience – distinguishes them from other alternative investment managers." />
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "http://cgimg.com",
              "name": "CGI Merchant Group",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-786-581-4800",
                "contactType": "Head Office"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "emai;": "investor@cgimg.com",
                "contactType": "Investor Contact"
              }
            }
          `}</script>
        </Helmet>
        <PageHeader
          title='Our Portfolio'
          html={
              <>
                <p>Over $300 million institutional quality, Class A, U.S. commercial real estate assets.</p>
              </>
            }
          image={image}
        />
        <Portfolio id="portfolio" />
      </Wrapper>
    )
  }
}

export default PortfolioPage;
