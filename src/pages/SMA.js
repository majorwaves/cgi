import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import Modal from 'react-modal'
import ReactPlayer from 'react-player'
import image from '../images/sma-min.jpg'
import image1 from '../images/bakare_0378.jpg'

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

const Inner = styled.div`
  a {
    color: ${props => props.theme.color.dark};
    text-decoration: none;
  }
`;


class SMA extends Component {

  state = {
    modalOpen: false
  }

  handleClick = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  renderModal = () => (
    <Inner>
      <ReactPlayer
        controls
        playing
        url='https://www.youtube.com/watch?v=TR1rAYyUVe4&feature=youtu.be'
      />
      <br/>
      <p><a rel="noopener noreferrer" target="_blank" href="https://www.thegabrielmiami.com/">The Gabriel Miami</a></p>
    </Inner>
  )

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
            <h1>The Gabriel Miami, a Curio Collection by Hilton</h1>
            <p>A high-end mixed-use hotel located in the heart of downtown Miami. With over 100,000 square feet, the hotel includes an upscale Mediterranean-Latin fusion restaurant (CVLTVRA), a top-quality spa (Dermanova), two billboards (Out-Front Media), and first-class parking component (Park 1)</p>
            <br/>
            <Button onClick={this.handleClick}>Learn More</Button>
          </div>
        </Section>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleClick} style={customStyles}>
          {this.renderModal()}
        </Modal>
      </Wrapper>
    )
  }
}

export default SMA;
