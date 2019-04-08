import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import Sidebar from 'react-sidebar'
import image from '../images/bridge.jpg'
import image1 from '../images/bakare_0378.jpg'
import image2 from '../images/sma-2.PNG'
import image3 from '../images/sma-3.PNG'
import image4 from '../images/sma-4.PNG'
import image5 from '../images/sma-5.PNG'
import image6 from '../images/sma-6.PNG'
import image7 from '../images/sma-7.PNG'

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
  width: 70vw;
  margin: 4rem auto 8rem;
  display: grid;
  grid-template-columns: ${props => props.left ? '2fr 1fr' : '1fr 2fr' };
  grid-gap: 5vw;
  max-width: 1100px;

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
    border: 3px solid ${props => props.theme.color.light};
    object-fit: cover;
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

class SMA extends Component {

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
      case 'biscayne':
        return (
          <div>
            <h3>1110 Biscayne Blvd</h3>
            <ul>
              <li>Role: Sponsor/GP</li>
              <li>Investment Strategy: Value Added</li>
              <p>CGI acquired a trophy mixed-use property which comprises a hotel, restaurant space, parking garage, and wallscape billboards. CGI devised a multi-component repositioning plan which it has executed. The property is now home to The Gabriel Miami, a Curio by Hilton Collection and CVLTVRA Restaurant. Both The Gabriel Miami and CVLTVRA Restaurant boast exclusive partnership with the Miami HEAT serving as official hotel and restaurant to the three time NBA champions.</p>
              <img src={image2} alt={image2} />
              <img src={image3} alt={image3} />
              <img src={image4} alt={image4} />
              <img src={image5} alt={image5} />
              <img src={image6} alt={image6} />
              <img src={image7} alt={image7} />
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
          title='SMA'
          text='Separately Managed Accounts'
        />
        <Intro>
          <p>CGI Merchant Group aims to make investments on a value basis with a goal of maximizing return on capital. CGI uses ingenuity to enhance cash flows, reduce risk and lower the cost of capital.</p>
        </Intro>
        <Section left>
          <div>
            <img alt='lorem ipsum' src={image1} />
          </div>
          <div>
            <h1>1100 Biscayne Blvd</h1>
            <p>CGI acquired a trophy mixed-use property which comprises a hotel, restaurant space, parking garage, and wallscape billboards. CGI devised a multi-component repositioning plan which it has executed. </p>
            <br/>
            <Button onClick={() => { this.handleClick('biscayne') }}>Learn More</Button>
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

export default SMA;
