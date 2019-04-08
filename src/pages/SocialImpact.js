import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import school from '../images/school.jpg'
import photo from '../images/social-impact.jpg';
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

  img {
    width: 100%;
  }
`;


const SocialImpact = (props) => (
  <Wrapper>
    <PageHeader
      image={school}
      title='Social Impact'
      text='Empower and Connect'
    />
    <Section>
      <div>
        <h1>Isabella Alycia Foundation</h1>
        <p>Since 2006, CGI has committed capital and resources to philanthropic initiatives. By supporting programs that help solve crucial social and economic issues in emerging markets, we commit ourselves to taking philanthropic action based on discipline, innovation and a strategic approach over the long term.</p>
        <p>The Isabela Alycia Foundation was created to inspire and connect underprivileged minority students and single mothers with the tools and resources needed to be successful and self-sufficient. To fulfil this mission, the Isabela Alycia Foundation works with strategic partners to develop programs that will improve the personal and professional lives of minority students and single-mothers.</p>
      </div>
      <div>
        <img src={photo} alt="social impact" />
      </div>
    </Section>
    <Section>
      <div>
        <h1>Single Mother Households</h1>
        <p>Today, single-mothers do more work and earn less income than married mothers. The poverty rate for single-mother households remains over four times higher than the rate for married couples. To combat this startling statistic, The Isabela Alycia Foundation seeks to develop programs and opportunities for single mothers to improve their economic status. </p>
      </div>
      <div>
        <h1>Underprivileged Minority Students</h1>
        <p>The Isabela Alycia Foundation believes that every underprivileged minority student should be awarded equal opportunity to succeed and achieve their dreams. The Isabela Alycia Foundation seeks to connect hard-working minority students with access to the people and programs needed to fulfil their dreams.</p>
      </div>
    </Section>
  </Wrapper>
);

export default SocialImpact;
