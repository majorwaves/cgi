import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero'
// import Asset from '../components/Asset'
// import fund from '../images/fund-img.jpg'
// import sma from '../images/sma-min.jpg'
// import home from '../images/home-alt.jpg'
// import { device } from '../utils/devices'
import video from '../images/AdobeStock_269638480.mov'

const Main = styled.main`

`;
//
// const Assets = styled.div`
//   background: ${props => props.theme.color.bg};
//   padding: 1rem;
//
//   @media ${device.laptop}{
//     display: -ms-grid;
//     justify-content: space-between;
//     display: grid;
//     -ms-grid-columns: 1fr 1fr;
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 1rem;
//   }
//
//   a {
//     text-decoration: none;
//   }
// `;

class Home extends Component {
  render() {
    return (
          <Main>
            <Hero
              title={<>CGI Merchant Group is a<br/>real-estate focused, private-equity,<br/>alternative investment management firm.</>}
              buttonText='Read More'
              video={video}
            />
          </Main>
    );
  }
}

export default Home;
