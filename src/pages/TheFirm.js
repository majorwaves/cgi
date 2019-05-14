import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeaderSlider from '../components/PageHeaderSlider'
import image from '../images/firm-slider-one.jpg'
import Quote from '../components/Quote'
import image3 from '../images/firm-right-neu-neu.jpg'
import image4 from '../images/firm-slider-two-neu.jpg'
import { device } from '../utils/devices'
import ReactPlayer from 'react-player'
import Modal from 'react-modal'
import { withRouter } from 'react-router-dom'
import Portfolio from '../components/Portfolio'

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

`;

const Section = styled.section`
  width: 85vw;
  margin: 4rem auto;

  .video {
    position: relative;
    cursor: pointer;

    img {
      display: inline-block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 80px;
      background: rgba(0,0,0,0.12);
    }
  }

  @media ${device.laptop}{
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5vw;
  }

  div {
    margin-bottom: 4rem;

    @media ${device.laptop}{
      margin: 0;
    }

    img {
      width: 100%;
      height: 100%;
      height: 50vw;
      object-fit: cover;
    }
  }

  h1 {
    font-family: ${props => props.theme.type.heading};
    font-size: 30px;
    font-weight: normal;
    margin-top: 0;
    text-align: center;

    @media ${device.laptop}{
      text-align: left;
      font-size: 36px;
    }

    &.large {
      font-size: 36px;
      margin-top: 0;

      @media ${device.laptop}{
        font-size: 48px;
      }
    }
  }

  span {
    font-size: 12px;
    opacity: 0.5;

    a {
      color: black;
      text-decoration: none;
      font-style: italic;
    }
  }

  p {
    line-height: 1.8em;
  }

  h4 {
    font-family: ${props => props.theme.type.sans};
    font-size: 14px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 0.2rem;
    margin: 0 0 1rem;
    opacity: 0.4;
    text-align: center;

    @media ${device.laptop}{
      margin: 0;
      text-align: left;
    }
  }
`;

class TheFirm extends Component {

  state = {
    modalOpen: false
  }

  handleClick = () => {
    console.log('hey')
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  componentDidMount(){

    if(this.props.location.hash !== ''){
      const hash = this.props.location.hash.replace("#", "");
      if(hash !== ""){
        const hash = this.props.location.hash.replace("#", "");
        const target = document.getElementById(hash)
        target.scrollIntoView({block: 'center', behavior: 'smooth'})
      }
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.location.hash !== prevProps.location.hash){
      const hash = this.props.location.hash.replace("#", "");
      if(hash !== ""){
        const target = document.getElementById(hash)
        target.scrollIntoView({block: 'center', behavior: 'smooth'})
      }
    }
  }

  render(){
    return (
      <Wrapper>
        <PageHeaderSlider
          image={image}
          secondImage={image4}
          title='The Firm'
          text=' Investment Management with Experience and Ingenuity'
        />
        <Section>
          <div>
            <h1 className='large'>Who We Are</h1>
            <p>CGI Merchant Group (“CGI”) is a private equity, alternative investment management that focuses on real estate value-added investment opportunities in the U.S. Through strategic and effective management and financing, CGI increases the value of its assets on commercial real estate and infrastructure investments and transforms them into Class A, fully-operational assets. The Firm has a wealth of knowledge on capital markets – which combined with their ingenuity and experience – distinguishes them from other alternative investment managers.</p>
          </div>
          <div className='video'>
            <img src={image3} alt='miracle mile' />
          </div>
        </Section>
        <Section id='investment-philosophy'>
          <div>
            <h4>Contrarian Views</h4>
            <h1>Investment Philosophy</h1>
            <p>At CGI, the focus is to remain nimble, execution-minded and in a position to create value where others may not. The Firm relies on strategic alliances, operating partnerships and third-party consultants to remain agile, while preserving scalability. CGI implements “best-industry practices” and engages in “hands-on” asset management techniques to ensure all investment portfolios and its inherent risks are managed in an optimal manner.</p>
          </div>
          <div>
            <h4>Remaining Nimble</h4>
            <h1>Creating Value</h1>
            <p>The firm’s nimble team, deep industry knowledge, and international network is positioned to create unique real estate opportunities that produce superior returns for stakeholders. Through this work, CGI Merchant Group has built a distinct culture; based upon contrarian views and an entrepreneurial approach to achieve exceptional long-term value for every client and community serve.</p>
          </div>
        </Section>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleClick} style={customStyles}>
          <ReactPlayer
            playing
            controls
            url='https://www.youtube.com/watch?v=2NyfzVzGSUg'
          />
        </Modal>
        <Quote dark text='“We believe in a contrarian, value-oriented approach to real estate investing”' />
        <Portfolio id="portfolio" />
      </Wrapper>
    )
  }
}

export default withRouter(TheFirm);
