import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button';
import image from '../images/fund-img.jpg'
import image1 from '../images/wellington-min.jpg'
import image2 from '../images/miracle.jpg'
import Sidebar from "react-sidebar"
import image3 from '../images/miracle-2.jpg'
import image4 from '../images/miracle-3.jpg'
import image5 from '../images/miracle-4.jpg'
import image6 from '../images/nexus-1.jpg'
import image7 from '../images/nexus-2.jpg'
import image8 from '../images/nexus-3.jpg'

const Wrapper = styled.div`
  .drawer {
    background: ${props => props.theme.color.dark};
    color: white;
    padding: 2rem;
    width: 40vw;
    height: 100vh;
    position: fixed !important;

    p {
      line-height: 1.7em;
      opacity: 0.7;
    }

    img {
      margin: 2rem 0;
      width: 100%;
    }

    ul {
      list-style: none;
      padding: 0;
      line-height: 2em;
    }
  }
`;

const Section = styled.section`
  width: 90vw;
  margin: 4rem auto 8rem;
  display: grid;
  grid-template-columns: ${props => props.left ? '1.5fr 1fr' : '1fr 1.5fr' };
  grid-gap: 5vw;

  h1 {
    font-family: ${props => props.theme.type.heading};
    font-size: 36px;
    font-weight: normal;
    margin-top: 0;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    border: 3px solid ${props => props.theme.color.medium};
  }
`;

const Intro = styled.div`
  width: 70vw;
  max-width: 1100px;
  margin: 4rem auto 4rem;
  padding: 4rem;
  line-height: 1.6em;
  font-size: 20px;
  background: white;
  position: relative;
  color: ${props => props.theme.color.dark};
`;

class Portfolio extends Component {

  state = {
    drawerOpen: false,
    drawer: ''
  }

  handleClick = (id) => {
    console.log('clicked')
    this.setState({ drawerOpen: !this.state.drawerOpen, drawer: id })
  }

  renderDrawer = () => {
    switch (this.state.drawer) {
      case 'miracle':
        return (
          <div>
            <h3>55 Miracle Mile</h3>
            <ul>
              <li>Role: Sponsor/GP</li>
              <li>Investment Strategy: Value Added</li>
              <li>Date Acquired: October, 2013</li>
              <img src={image3} alt={image3} />
              <img src={image4} alt={image4} />
              <img src={image5} alt={image5} />
            </ul>
          </div>
        )
      case 'nexus':
        return (
          <div>
            <h3>The Nexus Workspaces</h3>
            <ul>
              <li>Role: Sponsor/GP</li>
              <li>Investment Strategy: Value Added</li>
              <img src={image6} alt={image6} />
              <img src={image7} alt={image7} />
              <img src={image8} alt={image8} />
            </ul>
          </div>
        )
      default:
        return '';
    }
  }

  render(){
    return (
      <Wrapper>
        <PageHeader
          image={image}
          title='Portfolio'
          text='Institutional Quality, Class A Assets'
        />
        <Intro>
          <p>CGI Fund I’s portfolio currently contains institutional quality, Class A assets in office and mixed-use properties. The Sponsor acquired these assets through off-market, solicited transactions and intends to build upon this platform through its inaugural fund. Below are the assets that were recently acquired by the fund. CGI Merchant Group aims to increase the value of the assets through operating expertise and effective financing.</p>
        </Intro>
        <Section left>
          <div>
            <img alt='lorem ipsum' src={image2} />
          </div>
          <div>
            <h1>55 Miracle Mile</h1>
            <p>55 Miracle Mile is a mixed-use office and retail property. CGI saw significant upside potential in the forthcoming below-market rollovers and an underexposed parking garage.</p>
            <p>CGI acquired this commercial component containing office and retail space in a highly visible and visited street in Coral Gables. Capex and functional improvements created the luxury environment needed to attract high-quality tenants, allowing CGI to capture a premium on rent rollovers. </p>
            <br/>
            <Button onClick={() => { this.handleClick('miracle') }}>Learn More</Button>
          </div>
        </Section>
        <Section>
          <div>
            <h1>The Nexus Workspaces</h1>
            <p>The Nexus Workspaces is a Class “A” Suburban Office Portfolio. CGI acquired The Nexus office portfolio, consisting of 400+ office units, at a significant discount to market value and replacement cost from a national bank.</p>
            <p>CGI has increased occupancy and rent rates through active management and physical improvements.</p>
            <br/>
            <Button onClick={() => { this.handleClick('nexus') }}>Learn More</Button>
          </div>
          <div>
            <img alt='lorem ipsum' src={image1} />
          </div>
        </Section>
        {this.state.drawerOpen &&
          <Sidebar
            open={this.state.drawerOpen}
            sidebarClassName='drawer'
            pullRight
            onSetOpen={this.handleClick}
            sidebar={(
              <div>
                {this.renderDrawer()}
              </div>
            )}
          />
        }
      </Wrapper>
    )
  }
}
export default Portfolio;
