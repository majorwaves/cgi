import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Person = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
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

  h4 {
    margin: 0 0 1rem 0;
    font-size: 24px;
    font-weight: 600;
  }

  h5 {
    margin: 0 0 1rem 0;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    line-height: 1.6em;
    opacity: 0.8;
  }
`;

const TeamMember = ({ name, title, image, bio, onClick, excerpt }) => (
  <Person hasImage={image !== ''}>
    <div>
      <h4>{name}</h4>
      <h5>{title}</h5>
      <p>{excerpt}</p>
      <p><Button onClick={onClick}>Read More</Button></p>
    </div>
    {image !== '' &&
      <div className='image'>
        <img src={image} alt={title} />
      </div>
    }
  </Person>
);

export default TeamMember;
