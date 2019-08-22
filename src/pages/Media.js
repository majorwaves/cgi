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
          title='Media'
        />
        <Grid>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.cpexecutive.com/post/exploring-south-floridas-flexible-office-sector/">
            <h2>Exploring South Florida’s Flexible Office Sector</h2>
            <div><span>August 7, 2019</span><span>Commercial Property Executive</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.bizjournals.com/southflorida/potmsearch/detail/submission/6472419/Juan_Yepes">
            <h2>CGI Merchant Group LLC (CGI) Promotes Juan Yepes to vice President of Asset Management</h2>
            <div><span>August 7, 2019</span><span>South Florida Business Journal</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.blackenterprise.com/real-estate-investment-firm-founder-honored-for-major-miami-hotel-deal/">
            <h2>Real Estate Investment Firm Founder Honored for Major Miami Hotel Deal</h2>
            <div><span>August 5, 2019</span><span>Black Enterprise</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://newsroom.hilton.com/curio/news/nabhood-honors-the-gabriel-miami-and-cgi-merchant-group-ceo">
            <h2>Founder & CEO of CGI Merchant Group, Raoul Thomas and The Gabriel Miami Receive Deal of The Year Award by National Association of Black Hotel Owners, Operators and Developers</h2>
            <div><span>August 1, 2019</span><span>Hilton</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.bizjournals.com/southflorida/potmsearch/detail/submission/6468322/Danielle_Milota">
            <h2>CGI Merchant Group LLC (CGI) Names Danielle Milota as Senior Vice  President, Head of Capital Markets and Investor Relations</h2>
            <div><span>May 8, 2019</span><span>South Florida Business Journal</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://therealdeal.com/miami/2019/04/24/this-co-working-company-opened-two-offices-in-palm-beach-county/">
            <h2>This co-working company opened two offices in Palm Beach County</h2>
            <div><span>April 24, 2019</span><span>The Real Deal</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.businesswire.com/news/home/20180725005140/en/CGI-Successfully-Completes-Refinancing-Class-A-Properties-South">
            <h2>CGI Successfully Completes Refinancing of Four Class-A Properties in South Florida</h2>
            <div><span>July 25, 2018</span><span>Business Wire</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://therealdeal.com/miami/tag/cgi-merchant-group/">
            <h2>Photos: On the scene at ribbon cutting of 55 Miracle Mile</h2>
            <div><span>Jun 30, 2015</span><span>The Real Deal, South FL Real Estate News</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.law.com/dailybusinessreview/almID/1202729582207/Whats-Driving-CGI-Merchant-Group-Investments-in-South-Florida-Real-Estate/?slreturn=20190227102204">
            <h2>What's Driving CGI Merchant Group Investment is South FL Real Estate?</h2>
            <div><span>Jun 16, 2015</span><span>DBR Daily Business Review</span></div>
            </a>
          </Article>
          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.bizjournals.com/southflorida/print-edition/2015/05/22/raoul-thomas-on-finding-value-where-others-can-t.html">
            <h2>Raoul Thomas on finding value where others can’t</h2>
            <div><span>May 22, 2015</span><span>South Florida Business Journal</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://www.cpexecutive.com/post/executive-spotlight-raoul-thomas-cgi-merchant-group/">
            <h2>Executive Spotlight: Raoul Thomas, CGI Merchant Group</h2>
            <div><span>Apr 14, 2015</span><span>Commercial Property Executive</span></div>
            </a>
          </Article>

          <Article>
            <a target="_blank" rel="noreferrer noopener" href="https://communitynewspapers.com/biscayne-bay/cgi-merchant-group-breaks-ground-at-1100-biscayne/">
            <h2>CGI Merchant Group Breaks Ground at 1100 Biscayne</h2>
            <div><span>Mar 14, 2015</span><span>Brickell</span></div>
            </a>
          </Article>
        </Grid>
      </Wrapper>
    );
  }

}

export default Media;
