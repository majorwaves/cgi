import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import image from '../images/media-alt.jpg'
import { device } from '../utils/devices'
import Helmet from 'react-helmet'

const Wrapper = styled.div`
`;

const Grid = styled.div`
  margin: 0 auto;
  padding: 1rem;
  background: ${props => props.theme.color.bg};

  @media ${device.laptop}{
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 4rem;
  }
`;

const Article = styled.div`
  background: white;
  margin-bottom: 2rem;
  width: 28vw;
  margin-right: 2rem;

  @supports (display: grid){
    width: auto;
    margin-right: 0;
  }

  @media ${device.laptop}{
    margin-bottom: 2rem;
    margin-right: 2rem;

    @supports (display: grid){
      margin: 0;
    }
  }

  &:nth-of-type(3n){
    margin-right: 0;
  }

  a {
    text-decoration: none;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    font-family: ${props => props.theme.type.heading};
    padding: 2rem;
    margin: 0;
    border-bottom: 1px solid rgba(0,0,0,0.12);
    min-height: 190px;
    box-sizing: border-box;
    color: ${props => props.theme.color.dark};
  }

  div {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    span {
      opacity: 0.5;
      color: black;
      font-size: 14px;
    }
  }
`;

class Media extends Component {

  render() {
    return (
      <Wrapper>
        <Helmet title='CGI | Media' />
        <PageHeader
          image={image}
          darken={10}
          title='Media'
        />
        <Grid>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.globest.com/2019/06/24/cgi-merchant-acquires-coral-gables-office-building-fir-54m/">
              <h2>CGI Merchant Group Acquires South Florida Landmark Property 550 Biltmore Way</h2>
              <div><span>June 24, 2019</span><span>GlobeSt</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.bizjournals.com/southflorida/potmsearch/detail/submission/6468322/Danielle_Milota">
            <h2>CGI Merchant Group LLC (CGI) Names Danielle Milota as Senior Vice  President, Head of Capital Markets and Investor Relations</h2>
            <div><span>May 8, 2019</span><span>South Florida Business Journals</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.globest.com/2019/05/03/cgi-merchant-adds-nearly-60000-sf-of-co-working-space-in-boca-raton-and-boynton-beach/?slreturn=20190502230829">
            <h2>CGI Merchant Adds Nearly 60,000 SF of Co-Working Space in Boca Raton and Boynton Beach</h2>
            <div><span>May 3, 2019</span><span>GlobeSt</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://therealdeal.com/miami/2019/04/24/this-co-working-company-opened-two-offices-in-palm-beach-county/">
            <h2>This Co-working Company Opened Two Offices in Palm Beach County</h2>
            <div><span>April 24, 2019</span><span>The Real Deal</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://finance.yahoo.com/news/cgi-merchant-group-expands-nexus-155600266.html">
            <h2>CGI Merchant Group Expands The Nexus Portfolio to Include Two Additional Co-Working Spaces in Boynton Beach and Boca Raton</h2>
            <div><span>April 23, 2019</span><span>Yahoo! Finance</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.businesswire.com/news/home/20180725005140/en/CGI-Successfully-Completes-Refinancing-Class-A-Properties-South">
            <h2>CGI Successfully Completes Refinancing of Four Class-A Properties in South Florida</h2>
            <div><span>July 25, 2018</span><span>Business Wire</span></div>
            </a>
          </Article>
        </Grid>
      </Wrapper>
    );
  }

}

export default Media;
