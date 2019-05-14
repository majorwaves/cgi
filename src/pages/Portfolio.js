import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Modal from 'react-modal'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import image from '../images/fund-img.jpg'
import image2 from '../images/miracle.jpg'
import image1 from '../images/nexus-1.jpg'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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

const Inner = styled.div`
a {
  color: ${props => props.theme.color.dark};
  text-decoration: none;
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
    modalOpen: false,
    modal: ''
  }

  handleClick = (id) => {
    console.log('clicked')
    this.setState({ modalOpen: !this.state.modalOpen, modal: id })
  }

  renderModal = () => {
    switch (this.state.modal) {
      case 'miracle':
        return (
          <Inner>
            <ReactPlayer
              controls
              playing
              url='https://www.youtube.com/watch?v=2NyfzVzGSUg'
            />
          </Inner>
        )
      case 'nexus':
        return (
          <Inner>
            <ReactPlayer
              controls
              playing
              url=' https://www.youtube.com/watch?time_continue=73&v=VEpzcgkdh88'
            />
            <br/>
            <p><a rel="noopener noreferrer" target="_blank" href="https://www.thenexusfl.com">The Nexus Workspaces</a></p>
          </Inner>
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
            <p>Located in the heart of Coral Gables, the mixed-use property is a staple with well-known tenants such as Cibo Wine Bar and UPS. CGI saw significant upside potential in the forthcoming below-market rollovers and an underexposed parking garage.</p>
            <p>Capex and functional improvements created the luxury environment needed to attract high-quality tenants, allowing CGI to capture a premium on rent rollovers</p>
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
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleClick} style={customStyles}>
          {this.renderModal()}
        </Modal>
      </Wrapper>
    )
  }
}
export default Portfolio;
