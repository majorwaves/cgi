import React, { Component } from 'react'
import styled from 'styled-components'
import PortfolioItem from './PortfolioItem'
import nexus from '../images/logo-nexus.png'
import nexusImage from '../images/nexus-neu.jpg'
import gabriel from '../images/logo-gabriel.png'
import gabrielImage from '../images/bakare_0378.jpg'
import miracle from '../images/logo-miracle.png'
import miracleImage from '../images/miracle.jpg'
import { device } from '../utils/devices'

const Grid = styled.section`

  @media ${device.laptop}{
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const Intro = styled.div`
  background: ${props => props.theme.color.dark};
  color: white;
  font-size: 18px;
  display: flex;
  padding: 2rem;
  justify-content: center;
  flex-direction: column;

  @media ${device.laptop}{
    padding: 6rem;
  }

  h2 {
    font-family: ${props => props.theme.type.heading};
    font-size: 36px;
    font-weight: normal;
  }

  p {
    line-height: 1.6em;
  }
`;

class Portfolio extends Component {

  state = {
    selected: 0
  }

  handleClick = (id) => {
    console.log(id)
    this.setState({ selected: id })
  }

  render(){
    return (
      <Grid id="portfolio">
        <Intro>
          <h2>Our Portfolio</h2>
          <p>CGI Merchant Group aims to make investments on a value basis with a goal of maximizing return on capital. CGI uses ingenuity to enhance cash flows, reduce risk and lower the cost of capital.</p>
        </Intro>
        <PortfolioItem
          id='nexus'
          open={this.state.selected === 'nexus'}
          handleClick={this.handleClick}
          logo={nexus}
          info='The Nexus Workspaces is a Class “A” Suburban Office Portfolio. CGI acquired The Nexus office portfolio, consisting of 400+ office units, at a significant discount to market value and replacement cost from a national bank.'
          image={nexusImage}
          link='http://thenexusfl.com'
          title='The Nexus Workspaces'
        />
        <PortfolioItem
          id='gabriel'
          open={this.state.selected === 'gabriel'}
          handleClick={this.handleClick}
          logo={gabriel}
          info='A high-end mixed-use hotel located in the heart of downtown Miami. With over 100,000 square feet, the hotel includes an upscale Mediterranean-Latin fusion restaurant (CVLTVRA), a top-quality spa (Dermanova), two billboards (Out-Front Media), and first-class parking component (Park 1)'
          image={gabrielImage}
          link='https://www.thegabrielmiami.com/'
          title='The Gabriel Miami'
        />
        <PortfolioItem
          id='miracle'
          info='Located in the heart of Coral Gables, the mixed-use property is a staple with well-known tenants such as Cibo Wine Bar and USPS (United States Postal Service). CGI saw significant upside potential in the forthcoming below-market rollovers and an underexposed parking garage.'
          open={this.state.selected === 'miracle'}
          handleClick={this.handleClick}
          logo={miracle}
          image={miracleImage}
          title='55 Miracle Mile'
        />
      </Grid>
    )
  }
}

export default Portfolio;
