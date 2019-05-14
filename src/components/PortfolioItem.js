import React from 'react'
import styled from 'styled-components'
import {FaGlobeAmericas, FaTimes, FaExternalLinkAlt} from 'react-icons/fa'

const Main = styled.div`
  width: ${props => props.open ? '50vw !important' : '25vw' };
  transition: 1s all ease-in-out;
`;

const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: -5vw;
  height: 100%;
  background: ${props => props.theme.color.medium};
  color: white;
  will-change: transform;
  transform: ${props => props.open ? 'translate(-5vw, 0)' : 'translate(0,0)' };
  z-index: 2;
  width: 5vw;
  transition: 1s all ease-in-out;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;

  div {
    margin-bottom: 1rem;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  a {
    color: white;
  }
`;

const Side = styled.div`
  width: 25vw;
  position: relative;
  transition: 1s all ease-in-out;
  flex: 1;

  &:after {
    content: "";
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 30px solid #fff;
    position: absolute;
    left: 0;
    top: 20%;
    z-index: 1;
  }
`;

const Asset = styled.div`
  display: flex;
  justify-content: space-between;
  height: 25vw;
  cursor: ${props => props.open ? 'auto' : 'pointer' };
  overflow: hidden;
  position: relative;

  &:nth-of-type(4n-1), &:nth-of-type(4n){
    flex-direction: row-reverse;

    ${Side}{
      &:after {
        left: auto;
        right: 0;
        border-left: 0;
        border-right: 30px solid white;
      }
    }
  }

  &:hover {
    ${Main} {
      width: 28vw;
    }

    ${Side} {
      width: 22vw;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 1s all ease-in-out;
  width: ${props => props.open ? '15vw' : '100%' };
  height: ${props => props.open ? '10vw' : '100%' };
  padding: 2rem;
  box-sizing: border-box;

  img {
    width: 100%;
  }
`;

const Info = styled.div`
  color: rgba(0,0,0,0.7);
  padding: 2rem;
  width: calc(100% - 5vw);
  box-sizing: border-box;
  transition: .2s all ease-in-out;
  opacity: ${props => props.open ? '1' : '0' };
  transition-delay: 1s;
  transform: ${props => props.open ? 'translate(0,0)' : 'translate(0,1rem)' };

  a {
    color: ${props => props.theme.color.medium};
    text-decoration: none;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PortfolioItem = ({ id, info, logo, image, title, link, selected, open, handleClick }) => (
  <Asset
    id={id}
    open={open}
    onClick={() => {
      if(!open){
        handleClick(id)
      }
    }}
    >
    <Main open={open}>
      <Logo open={open}>
        <img src={logo} alt='Logo' />
      </Logo>
      <Info open={open}>
        <p>{info}</p>
        <br/>
        {link && <p><a href={link} target="_blank" rel="noreferrer noopener">View Website <FaExternalLinkAlt size={18} /></a></p>}
      </Info>
    </Main>
    <Side>
      <Image><img src={image} alt={info} /></Image>
    </Side>
    <Sidebar open={open}>
      <div>
        <FaTimes size={36} onClick={() => handleClick('')} />
      </div>
      {link &&
        <div>
          <a href={link} target="_blank" rel="noreferrer noopener"><FaGlobeAmericas size={36} /></a>
        </div>
      }
    </Sidebar>
  </Asset>
)

export default PortfolioItem;
