import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import school from '../images/school.jpg'
import ReactPlayer from 'react-player'
import Modal from 'react-modal'
import { FaPlayCircle } from 'react-icons/fa'
import { device } from '../utils/devices'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import foundation from '../images/foundation.jpg'
import foundationLogo from '../images/alycia.svg'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : 'calc(10vw - 1rem)',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '80vw',
    transform             : 'translate(0, -50%)'
  }
};

const Wrapper = styled.div`

`;

const Section = styled.section`
  margin: 4rem auto;
  width: 90vw;

  @media ${device.laptop}{
    width: 80vw;
    display: -ms-grid;
    display: grid;
    grid-template-columns: 1fr 1fr;
    -ms-grid-columns: 1fr 1fr;
    grid-gap: 5vw;
  }

  div {
    &:nth-of-type(2n){
      -ms-grid-column: 2;
      margin-left: 5vw;

      @supports (display: grid){
        margin-left: 0;
      }
    }
  }

  .callout {
    position: relative;

    a {
      color: white;
      text-decoration: none;
    }

    img {
      display: inline-block;
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    .alycia {
      transform: translate(2rem, -10rem);
      z-index: 2;
      position: relative;
      height: auto;
      width: calc(100% - 4rem);
      margin: 0 auto;
    }
  }

  .video {
    position: relative;
    cursor: pointer;
    margin-top: 2rem;

    img {
      display: inline-block;
      height: 500px;
      width: 100%;
      object-fit: cover;
    }

    .icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 500px;
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
  }

  strong {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
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

const Callout = styled.div`
  z-index: 2;
  transform: translate(2rem, -8rem);
  background: ${props => props.theme.color.dark};
  color: white;
  left: 2rem;
  width: calc(100% - 4rem);
  box-sizing: border-box;
  border-top: 3px solid ${props => props.theme.color.light};

  h2 {
    font-family: ${props => props.theme.type.heading};
    font-weight: normal;
    font-size: 36px;
    padding: 1rem 2rem 0;
  }

  p {
    padding: 0 2rem 1rem;
  }

  button {
    appearance: none;
    width: 100%;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    font-family: ${props => props.theme.type.body};
    background: ${props => props.theme.color.medium};
    color: white;
    padding: 1rem;
    border: 0;
  }
`;

class SocialImpact extends Component {

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
        <Helmet title='CGI | Social Impact'>
          <meta property="og:title" content="CGI | Social Impact" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://cgiimg.com/social-impact" />
          <meta property="og:image" content="https://img.youtube.com/vi/iJlqkIjLpGA/maxresdefault.jpg" />
          <meta property="og:description" content="CGI is committed to improving the lives of mothers and students globally. Through the Isabella Alycia Foundation, CGI leverages its resources and capital to empower single mother households and disadvantaged students." />
        </Helmet>
        <PageHeader
          image={school}
          title='Social Impact'
          text='Empower and Connect'
        />
        <Section>
          <div>
            <h1>Isabella Alycia Foundation</h1>
            <p><strong>The Alice Miller Story</strong></p>
            <p>Alice Miller Thomas impacted countless lives with compassion, love and care. She was a brilliant businesswomen; using her platforms as a channel to provide resources and tools to both single moms and young men at risk.</p>
            <p> Alice gave inspiration to single moms globally; equipping them with lessons and tools to function as constructive members of society. She also provided capital and human resources that led those same women to live lives of greater self-reliance and independence. Additionally, Alice challenged young men at risk to seek education as a way out of their dogmatic circumstances. She encouraged these men to rise to the challenge by helping them positively impact the societies they lived in.</p>
            <p>CGI is committed to improving the lives of mothers and students globally. Through the Isabella Alycia Foundation, CGI leverages its resources and capital to empower single mother households and disadvantaged students.</p>
          </div>
          <div className='callout'>
          <Link to='/foundation'>
            <img src={foundation} alt='woman' />
            <img src={foundationLogo} class='alycia' alt='Isabella Alycia' />
            <Callout>
                <h2>The Story of Isabela Alycia</h2>
                <p>Read about Isabela Alycia and her plans to fulfil her grandmother’s legacy</p>
                <button>Read Now</button>
            </Callout>
            </Link>
          </div>
        </Section>
        <Section>
          <div>
            <h4>Commited to Our</h4>
            <h1>Alliance & Scholars Program</h1>
            <p>In 2019, CGI announced the Isabela Alycia Foundation to focus on providing underprivileged students and single mothers with the knowledge and resources needed to improve their world. Through strategic partnerships, the Foundation develops holistic programs that generate economic growth opportunities, improve health, and cultivate wellness.</p>
          </div>
          <div>
            <h4>Commited to</h4>
            <h1>Supporting Families</h1>
            <p>Building on the work of the late Alice Thomas, The Isabela Alycia Foundation is designed to make a real difference in the lives for underprivileged students and single mothers. By working directly and with strategic partners, the goal of CGI is to capitalize on our expert resources to get the best results within the Alliance & Scholars Program.</p>
          </div>
        </Section>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleClick} style={customStyles}>
          <ReactPlayer
            playing
            className='video_wrapper'
            controls
            url='https://youtu.be/iJlqkIjLpGA'
          />
        </Modal>
      </Wrapper>
    )
  }
}

export default SocialImpact;
