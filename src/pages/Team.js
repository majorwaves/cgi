import React from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import TeamMember from '../components/TeamMember'
import image from '../images/bong.jpg'
import one from '../images/team-1.png'
import two from '../images/team-2.png'
import three from '../images/team-3.png'

const Wrapper = styled.div`
  border-top: 1px solid rgba(0,0,0,0.12);
`;

const Grid = styled.div`
  width: 80vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Divider = styled.span`
  margin: 4rem 0;
  height: 1px;
  background: rgba(0,0,0,0.12);
  grid-column: span 2;
  display: block;
`;

const Team = (props) => (
  <Wrapper>
    <PageHeader
      image={image}
      title='Team'
    />
    <Grid>
      <TeamMember
        image={one}
        name='Raoul Thomas'
        title='Founder & Chief Executive Officer'
      />
      <TeamMember
        image={two}
        name='Alejandro Araujo'
        title='Partner, CGI Head Development and Acquisitions'
      />
      <Divider />
      <TeamMember
        image={three}
        name='Mike Keilty'
        title='Executive Vice Chairman '
      />
      <TeamMember
        image={three}
        name='Rodolfo Slaibi'
      />
    </Grid>
  </Wrapper>
);

export default Team;
