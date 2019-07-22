import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import image from '../images/portfolio.png'
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
          unpadded
          title='Our Portfolio'
          html={
              <>
                <p>CGI has managed and executed over $1 billion of real estate and real estate related transactions since inception.</p>
                <p>CGI’s existing portfolio consists of over $300 million institutional quality, Class A, U.S. commercial real estate assets.</p>
                <p>The Firm’s holdings represent over 700,000 square feet of office, mixed-use and hospitality related assets throughout Florida.</p>
                <p>CGI owns several landmark properties, including:</p>
                <ul>
                  <li>The Gabriel Miami, a Curio Collection by Hilton Hotel</li>
                  <li>55 Miracle Mile, a large mixed use asset in Coral Gables, FL</li>
                  <li>550 Biltmore, a Class A office building in Coral Gables, FL</li>
                  <li>The Nexus Workspaces, an executive office and shared workspace provider developed by CGI.</li>
                </ul>
                <p>The Nexus has locations throughout Florida, including: Stuart, Wellington, Vista Park, Boca Raton, and Boynton Beach.</p>
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
