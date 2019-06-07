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
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-gap: 2rem;

  h3 {
    font-size: 18px;
    margin: 0 0 .5rem;
  }

  h3, h4 {
    font-weight: normal;
    font-family: ${props => props.theme.type.heading};
  }

  h4 {
    font-style: italic;
    font-size: 16px;
    margin: 0 0 1rem;
  }

  img {
    width: 100%;
  }
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
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <h3>{name}</h3>
          <h4>{title}</h4>
          {bio}
        </div>
      </Extra>
    }
  </Person>
);

export default TeamMember;
