import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import image from '../images/foundation-2.jpg'
import { device } from '../utils/devices'
import Helmet from 'react-helmet'

const Wrapper = styled.div`

`;

// const Intro = styled.div`
//   width: 80vw;
//   margin: 2rem auto 0;
//   padding: 4rem 0 2rem;
//   box-sizing: border-box;
//
//   strong {
//     font-weight: 500;
//   }
//
//   @media ${device.laptop}{
//     width: 70vw;
//     padding: 4rem;
//   }
//
//   p {
//     line-height: 1.8em;
//     font-size: 1.25rem;
//     color: rgb(51,51,51);
//   }
//
//   h1 {
//     font-family: ${props => props.theme.type.heading};
//     font-size: 30px;
//     font-weight: normal;
//     margin-top: 0;
//     text-align: center;
//
//     @media ${device.laptop}{
//       text-align: left;
//       font-size: 36px;
//     }
//
//     &.large {
//       font-size: 36px;
//       margin-top: 0;
//
//       @media ${device.laptop}{
//         font-size: 48px;
//       }
//     }
//   }
// `;

const Section = styled.section`
  width: 80vw;
  margin: 4rem auto;

  @media ${device.laptop}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5vw;
  }

  blockquote {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.color.dark};
    font-size: 24px;
    background: rgba(0,0,0,0.03);
    border-left: 4px solid ${props => props.theme.color.dark};
    box-sizing: border-box;
    padding: 2rem;
    font-style: italic;
    font-family: ${props => props.theme.type.heading};
    position: relative;
    border-radius: 4px;

    @media ${device.laptop}{
      font-size: 30px;
      padding: 4rem;
    }

    &:before {
      position: absolute;
      top: 0;
      left: 1rem;
      font-family: 'Arial';
      font-style: normal;
      content: open-quote;
      font-size: 20rem;
      line-height: 20rem;
      opacity: 0.2;

      @media ${device.laptop}{
        left: 2rem;
      }
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
    margin-top: 0;
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
    margin-top: 2rem;

    @media ${device.laptop}{
      margin: 0;
    }
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
        <Helmet title='CGI | Social Impact' />
        <PageHeader
          image={image}
          title='Social Impact'
          text='Empower and Connect'
        />
        <Section>
          <div>
            <h1>Isabella Alycia Foundation</h1>
            <p><strong>The Alice Miller Story</strong></p>
            <p>Alice Miller Thomas impacted countless lives with compassion, love and care.  She was a brilliant businesswoman who utilized her strong platform to provide resources to single moms and young men at risk. </p>
            <p>Alice provided inspiration to enumerable single mothers globally by empowering them with tools to function as constructive members of society.  She also provided capital and human resources that led those same women to live with greater independence and self-reliance.</p>
            <p>Mrs. Thomas also challenged young men at risk to seek education as a way out of dogmatic circumstances. She encouraged at risk groups to rise up to face challenges by helping them see the positive impact they could have on society and their communities.</p>
          </div>
          <blockquote cite='https://cgimg.com/social-impact'>
            The Isabella Foundation is the platform where one generation can pass the legacy of another to ensure it lives on.
          </blockquote>
        </Section>
        <Section>
          <div>
            <h1>I.A. Goal</h1>
            <p>The Isabella Alycia Foundation (IA Foundation) is focused on providing underprivileged students and single mothers with the knowledge and resources needed to improve their world.</p>
            <p>Through strategic partnerships, we develop holistic programs that generate economic growth opportunities, improve health, and cultivate wellness.</p>
          </div>
          <div>
            <h1>CGI Purpose</h1>
            <p>Building on the work of the late Alice Thomas, The IA Foundation is designed to make a real difference in the lives of underprivileged students and single mothers.</p>
            <p>By working directly and with strategic partners, CGI’s goal is to capitalize on our expert resources to achieve the best possible results.</p>
          </div>
        </Section>
      </Wrapper>
    )
  }
}

export default SocialImpact;
