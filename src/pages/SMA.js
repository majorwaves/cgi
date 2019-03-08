import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button';
import image from '../images/city.jpg'
import highrise from '../images/highrise.jpg'
import business from '../images/business.jpg'
import silhouette from '../images/silhouette.jpg'

const Wrapper = styled.div`

`;

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

const SMA = (props) => (
  <Wrapper>
    <PageHeader
      image={image}
      title='SMA'
      text='Duis euismod pellentesque'
    />
    <Intro {...props}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque est eget libero scelerisque accumsan. Sed at tristique nibh. Sed sed justo viverra, semper lorem vitae, hendrerit diam. Quisque mattis leo quis elementum aliquet. Vestibulum id diam malesuada, fringilla odio et, tincidunt nisi. Duis euismod pellentesque massa quis tempor. Sed faucibus consequat ligula, quis pellentesque odio iaculis ac.</p>
    </Intro>
    <Section left>
      <div>
        <img alt='lorem ipsum' src={business} />
      </div>
      <div>
        <h1>Fusce Interdum Tincidunt Dolor</h1>
        <p>Donec consectetur hendrerit ante, sit amet sagittis massa vestibulum vel. In sagittis augue non odio molestie, vel dignissim risus sollicitudin.</p>
        <br/>
        <Button>Learn More</Button>
      </div>
    </Section>
    <Section>
      <div>
        <h1>Fusce Interdum Tincidunt Dolor</h1>
        <p>Donec consectetur hendrerit ante, sit amet sagittis massa vestibulum vel. In sagittis augue non odio molestie, vel dignissim risus sollicitudin.</p>
        <br/>
        <Button>Learn More</Button>
      </div>
      <div>
        <img alt='lorem ipsum' src={silhouette} />
      </div>
    </Section>
    <Section left>
      <div>
        <img alt='lorem ipsum' src={highrise} />
      </div>
      <div>
        <h1>Fusce Interdum Tincidunt Dolor</h1>
        <p>Donec consectetur hendrerit ante, sit amet sagittis massa vestibulum vel. In sagittis augue non odio molestie, vel dignissim risus sollicitudin.</p>
        <br/>
        <Button>Learn More</Button>
      </div>
    </Section>
  </Wrapper>
);

export default SMA;
