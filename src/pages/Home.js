import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero'
import Asset from '../components/Asset'
import fund from '../images/fund-img.jpg'
import sma from '../images/sma-min.jpg'
import home from '../images/home.jpg'
import { device } from '../utils/devices'

const Main = styled.main`

`;

const Assets = styled.div`
  background: ${props => props.theme.color.bg};
  padding: 1rem;

  @media ${device.laptop}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  a {
    text-decoration: none;
  }
`;

class Home extends Component {
  render() {
    return (
          <Main>
            <Hero
              title='CGI Merchant Group is a real-estate focused, private-equity, alternative investment management firm.'
              buttonText='Read More'
              image={home}
              top
            />
            <Assets>
              <Asset
                title='Fund I'
                city='Miami'
                image={fund}
                url='/the-firm'
                description="CGI Merchant Group gives institutional and individual investors access to a property institutional real estate platform with proven real estate experience and a prominent presence in the U.S. The objective of CGI is to grow the underlying value of the portfolio by acquiring value-add properties through a variegated capital deployment approach to benefit from diversification of asset types. It takes advantage of our experienced asset management and vertically integrated platform to expand market presence."
              />
              <Asset
                title='SMA'
                city='Miami'
                image={sma}
                url='/the-firm'
                description="Since 2006, CGI has acquired and invested in real-estate and real-estate related assets. CGI contracted over $400MM in assets under management across multiple assets classes including hotel and hospitality, executive offices, mixed-use and retail space. CGI increases the value of its assets on commercial real estate and infrastructure investments and transforms them into Class A, fully operational properties."
              />
            </Assets>
          </Main>
    );
  }
}

export default Home;
