import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import people from '../images/market-neu.jpg'
import Quote from '../components/Quote'

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


const Market = (props) => (
  <Wrapper>
    <PageHeader
      image={people}
      title='Market'
      text='Lorem ipsum dolor sit amet'
    />
    <Section>
      <div>
        <h1>Lorem Ipsum Dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor, non laoreet arcu mattis at. Nulla eu justo sed neque convallis fermentum nec in turpis. Cras iaculis massa tellus, eget cursus nunc vulputate sit amet. Curabitur sed velit id nulla vehicula vestibulum. Nulla hendrerit lorem velit, sit amet malesuada arcu commodo eget. Vivamus ac lorem interdum, finibus ipsum in, cursus quam. Etiam eu rutrum orci.</p>
      </div>
      <div>
        <h1>Nulla Rutrum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ultricies tortor, non laoreet arcu mattis at. Nulla eu justo sed neque convallis fermentum nec in turpis. Cras iaculis massa tellus, eget cursus nunc vulputate sit amet. Curabitur sed velit id nulla vehicula vestibulum. Nulla hendrerit lorem velit, sit amet malesuada arcu commodo eget. Vivamus ac lorem interdum, finibus ipsum in, cursus quam. Etiam eu rutrum orci.</p>
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
  </Wrapper>
);

export default Market;
