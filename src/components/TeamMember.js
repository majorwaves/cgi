import React from 'react'
import styled from 'styled-components'

const Person = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  padding: 2rem;

  &:nth-of-type(odd) {
    border-right: 1px solid rgba(0,0,0,0.12);
  }

  div {
    img {
      width: 15vw;
      height: 15vw
      object-fit: contain;
    }

    &.pic {
      background: black;
      padding-bottom: 100%;
    }
  }

  h5 {
    margin: 0 0 1rem 0;
    font-size: 24px;
    font-weight: 600;
  }
`;

const TeamMember = ({ name, title, image }) => (
  <Person>
    <div className='pic'>

    </div>
    <div>
      <h5>{name}</h5>
      <p>{title}</p>
    </div>
  </Person>
);

export default TeamMember;
