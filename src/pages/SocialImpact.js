import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import school from '../images/school.jpg'
import ReactPlayer from 'react-player'
import Modal from 'react-modal'
import { FaPlayCircle } from 'react-icons/fa'


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
        <PageHeader
          image={school}
          title='Social Impact'
          text='Empower and Connect'
        />
        <Section>
          <div>
            <h1>Isabella Alycia Foundation</h1>
            <p><strong>The Alice Miller Story</strong></p>
            <p>Alice Miller Thomas impacted countless lives with compassion, love and care. She was a brilliant businesswomen; using her platforms as a channel to provide resources and tools to both single moms and young men at risk. </p>
            <p> Alice gave inspiration to single moms globally; equipping them with lessons and tools to function as constructive members of society. She also provided capital and human resources that led those same women to live lives of greater self-reliance and independence.  Additionally, Alice challenged young men at risk to seek education as a way out of their dogmatic circumstances. She encouraged these men to rise to the challenge by helping them positively impact the societies they lived in.</p>
          </div>
          <div className='video' onClick={this.handleClick}>
            <div className='icon'><FaPlayCircle /></div>
            <img src='https://img.youtube.com/vi/iJlqkIjLpGA/maxresdefault.jpg' alt='play video' />
          </div>
        </Section>
        <Section>
          <div>
            <h1>Our Goal</h1>
            <p>The IA Foundation is focused on providing underprivileged students and single mothers with the knowledge and resources needed to improve their world.  Through strategic partnerships, we develop holistic programs that generate economic growth opportunities, improve health, and cultivate wellness.</p>
          </div>
          <div>
            <h1>Our Purpose</h1>
            <p>Building on the work of the late Alice Thomas, The IA Foundation is designed to make a real difference in the lives for underprivileged students and single mothers.</p>
            <p>By working directly and with strategic partners, our goal is to capitalize on our expert resources to get the best possible results.</p>
          </div>
        </Section>
        <Modal isOpen={this.state.modalOpen} onRequestClose={this.handleClick} style={customStyles}>
          <ReactPlayer
            playing
            controls
            url='https://youtu.be/iJlqkIjLpGA'
          />
        </Modal>
      </Wrapper>
    )
  }
}

export default SocialImpact;
