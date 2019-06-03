import React from 'react'
import styled from 'styled-components'

const Person = styled.div`
  border-bottom: 1px dashed rgba(0,0,0,0.12);
`;

const Row = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 2fr 1fr;
  grid-template-columns: 1fr 2fr 1fr;
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

  &:nth-of-type(2){
    -ms-grid-column: 2;
  }

  &:nth-of-type(3){
    -ms-grid-column: 3;
  }

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

const TeamMember = ({ name, title, image, onClick, bio, unit, excerpt, selected }) => (
  <Person hasImage={image !== ''}>
    <Row onClick={onClick}>
      <Col>{name}</Col>
      <Col>{title}</Col>
      <Col>{unit}</Col>
    </Row>
    {selected &&
      <Extra>
        {bio}
      </Extra>
    }
  </Person>
);

export default TeamMember;
