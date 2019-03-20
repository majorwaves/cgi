import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import image from '../images/city.jpg'
import highrise from '../images/highrise.jpg'
import Quote from '../components/Quote'
import { FaGlobe, FaPeopleCarry, FaNetworkWired } from 'react-icons/fa'

const Wrapper = styled.div`

`;

const Section = styled.section`
  width: 80vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5vw;

  h1 {
    font-family: ${props => props.theme.type.heading};
    font-size: 36px;
    font-weight: normal;
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

const Fund = (props) => (
  <Wrapper>
    <PageHeader
      image={image}
      title='Fund I'
      text='Growth oriented investments'
    />
    <Section>
      <div>
        <h1>Lorem Ipsum Dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor, non laoreet arcu mattis at. Nulla eu justo sed neque convallis fermentum nec in turpis. Cras iaculis massa tellus, eget cursus nunc vulputate sit amet. Curabitur sed velit id nulla vehicula vestibulum. Nulla hendrerit lorem velit, sit amet malesuada arcu commodo eget. Vivamus ac lorem interdum, finibus ipsum in, cursus quam. Etiam eu rutrum orci.</p>
      </div>
      <div>
        <img src={highrise} alt='image' />
      </div>
    </Section>
    <Section>
      <div>
        <h1>Nulla Rutrum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor, non laoreet arcu mattis at. Nulla eu justo sed neque convallis fermentum nec in turpis. Cras iaculis massa tellus, eget cursus nunc vulputate sit amet. Curabitur sed velit id nulla vehicula vestibulum. Nulla hendrerit lorem velit, sit amet malesuada arcu commodo eget. Vivamus ac lorem interdum, finibus ipsum in, cursus quam. Etiam eu rutrum orci.</p>
      </div>
      <div>
        <h1>Sed Dolor Nunc</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor, non laoreet arcu mattis at. Nulla eu justo sed neque convallis fermentum nec in turpis. Cras iaculis massa tellus, eget cursus nunc vulputate sit amet. Curabitur sed velit id nulla vehicula vestibulum. Nulla hendrerit lorem velit, sit amet malesuada arcu commodo eget. Vivamus ac lorem interdum, finibus ipsum in, cursus quam. Etiam eu rutrum orci.</p>
      </div>
    </Section>
    <Strategy id="strategy">
      <div>
        <Icon>
          <FaGlobe />
        </Icon>
        <h3>Lorem dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor</p>
      </div>
      <div>
        <Icon>
          <FaPeopleCarry />
        </Icon>
        <h3>Lorem dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor</p>
      </div>
      <div>
        <Icon>
          <FaNetworkWired />
        </Icon>
        <h3>Lorem dolor sit</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor</p>
      </div>
    </Strategy>
    <Quote />
  </Wrapper>
);

export default Fund;
