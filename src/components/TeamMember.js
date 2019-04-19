import React from 'react'
import styled from 'styled-components'

const Person = styled.div`

`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr .5fr;
  padding: 0;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: white;
    background: ${props => props.theme.color.light};
  }
`;

const Col = styled.div`
  padding: 1rem .5rem;
  img {
    width: 100%;
  }
`;

const Extra = styled.div`
  grid-column: span 5;
  font-size: 13px;
  padding: 1rem;
  line-height: 1.5em;
`;

const TeamMember = ({ name, title, image, location, onClick, bio, unit, excerpt, selected }) => (
  <Person hasImage={image !== ''}>
    <Row onClick={onClick}>
      <Col>{name}</Col>
      <Col>{title}</Col>
      <Col>{unit}</Col>
      <Col>{location}</Col>
    </Row>
    {selected &&
      <Extra>
        {bio}
      </Extra>
    }
  </Person>
);

export default TeamMember;
