import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import school from '../images/school.jpg'
import ReactPlayer from 'react-player'

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
`;


const SocialImpact = (props) => (
  <Wrapper>
    <PageHeader
      image={school}
      title='Social Impact'
      text='Lorem ipsum dolor sit amet'
    />
    <Section>
      <div>
        <h1>Supporting Communities</h1>
        <p>Since 2006, CGI has committed capital and resources to philanthropic initiatives. By supporting programs that help solve crucial social and environmental issues in emerging markets, we commit ourselves to taking philanthropic action based on discipline, innovation and a strategic approach over the long term. </p>
      </div>
      <ReactPlayer
        playing
        muted
        loop
        className='hero_video'
        url='https://thenexusfl.com/city.mp4'
      />
    </Section>
    <Section>
      <div>
        <h1>Single Mother Household</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor, non laoreet arcu mattis at. Nulla eu justo sed neque convallis fermentum nec in turpis. Cras iaculis massa tellus, eget cursus nunc vulputate sit amet. Curabitur sed velit id nulla vehicula vestibulum. Nulla hendrerit lorem velit, sit amet malesuada arcu commodo eget. Vivamus ac lorem interdum, finibus ipsum in, cursus quam. Etiam eu rutrum orci.</p>
      </div>
      <div>
        <h1>Sed Dolor Nunc</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor, non laoreet arcu mattis at. Nulla eu justo sed neque convallis fermentum nec in turpis. Cras iaculis massa tellus, eget cursus nunc vulputate sit amet. Curabitur sed velit id nulla vehicula vestibulum. Nulla hendrerit lorem velit, sit amet malesuada arcu commodo eget. Vivamus ac lorem interdum, finibus ipsum in, cursus quam. Etiam eu rutrum orci.</p>
      </div>
    </Section>
  </Wrapper>
);

export default SocialImpact;
