import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import image from '../images/market-new.jpg'
import Quote from '../components/Quote'
import ReactPlayer from 'react-player'
import Modal from 'react-modal'
import { FaGlobe, FaPeopleCarry, FaNetworkWired, FaPlayCircle } from 'react-icons/fa'

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
  width: 80vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5vw;

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
  }
`;

const Strategy = styled.div`
  border-top: 1px solid rgba(0,0,0,0.12);
  padding: 4rem 5vw;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  text-align: center;

  h3 {
    font-weight: normal;
    font-style: italic;
    font-size: 24px;
    font-family: ${props => props.theme.type.heading};
  }

  p {
    padding: 0 4rem;
  }
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: ${props => props.theme.color.light};
  margin-bottom: 1rem;
  border-radius: 100%;
  border: 3px solid ${props => props.theme.color.light};
`;

class Fund extends Component {

  state = {
    modalOpen: false
  }

  handleClick = () => {
    console.log('hey')
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render(){
    return (
      <Wrapper>
        <PageHeader
          image={image}
          title='Fund I'
          text='Growth oriented investments'
        />
        <Section>
          <div>
            <h1>Value Add</h1>
            <p>Fund I targets properties that have in-place cash flow, but seek to increase that cash flow over time by making improvements to or repositioning the property. This could include making physical improvements to the asset that will allow it to command higher rents, increasing efforts to lease vacant space at the property to quality tenants, or improving the management of the property and thereby increasing customer satisfaction or lowering operating expenses where possible. Once our asset management team has successfully increased the net operating income at the property, the Fund will sell the asset to capture the resulting appreciation in value. This strategy provides the perfect balance between risk and return: it offers in-place cash flow at the time of acquisition with significant upside potential in the form of value appreciation.</p>
          </div>
          <div className='video' onClick={this.handleClick}>
            <div className='icon'><FaPlayCircle /></div>
            <img src='https://img.youtube.com/vi/rjlV_XszlVM/maxresdefault.jpg' alt='miracle mile' />
          </div>
        </Section>
        <Section>
          <div>
            <h1>Asset Management</h1>
            <p>The firms vertically integrated asset management platform allows us to create cost synergies and operate efficiently. Active leasing through a diligent tenant screening procedure with internal marketing capabilities</p>
          </div>
          <div>
            <h1>Capital Markets</h1>
            <p>An economically and financially savvy capital markets team that has allowed the asset cap stack to deleverage. Through the capital markets, we seek to optimize The Fund’s capital structure to drive cash flows, thus increasing returns to our investors. CGI seeks to decrease the cost of capital as the asset management team stabilizes the property. Since inception, CGI has been able to successfully utilize its Capital Markets capabilities to deliver and maximize financial returns, all while keeping prudent leverage levels.</p>
            <p>Whether an acquisition or a refinance, CGI implements a conservative approach on underwriting. CGI’s Capital Markets team and its extensive network of capital providers is able to procure the most competitive terms through a highly vetted and targeted approach. <em>CGI’s team designs each capital structure for each deal, and then selects the most suitable candidates depending on the envisioned capitalization strategy.</em></p>
          </div>
        </Section>
        <Strategy id="strategy">
          <div>
            <Icon>
              <FaGlobe />
            </Icon>
            <h3>Acquire</h3>
            <p>The Fund begins by acquiring undervalued, underperforming asset with a solid foundation on an agreed basis with a thought investment process.</p>
          </div>
          <div>
            <Icon>
              <FaPeopleCarry />
            </Icon>
            <h3>Implement</h3>
            <p>The Fund improves the properties by self-managing the assets through our Operating Company, and implementing capital expenditures and operational improvements</p>
          </div>
          <div>
            <Icon>
              <FaNetworkWired />
            </Icon>
            <h3>Stabilize</h3>
            <p>The objective is always to stabilize the property, harvesting healthy, risk-adjusted, double digit cash-on-cash returns and generating long-term capital appreciation. </p>
          </div>
        </Strategy>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleClick} style={customStyles}>
          <ReactPlayer
            playing
            url='https://www.youtube.com/watch?v=rjlV_XszlVM'
          />
        </Modal>
        <Quote text='“CGI’s team designs each capital structure for each deal, and then selects the most suitable candidates depending on the envisioned capitalization strategy.”' />
      </Wrapper>
    )
  }
}

export default Fund;
