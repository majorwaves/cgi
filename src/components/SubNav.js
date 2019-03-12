import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  display: none;
  top: 59px;
  width: 100%;
  transform: translate(-180px, 0);
  box-sizing: border-box;
`;

const Caret = styled.div`
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent ${props => props.theme.color.dark};
  top: -20px;
  left: 200px;
  z-index: 1;
`;

const Box = styled.div`
  background: ${props => props.theme.color.dark};
  color: white;
  display: grid;
  grid-template-columns: 120px 300px;
  padding: 1rem;
`;

const List = styled.ul`
  margin: 0;
  list-style: none;
  display: block;
  border-right: 1px solid rgba(255,255,255,0.4);
  padding: 1rem;
  line-height: 2rem;

  li {
    font-size: 14px;
    margin: 0 !important;
    padding: 0 !important;

    a {
      color: white !important;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

const Info = styled.div`
  padding: 1rem 1rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: normal !important;
  font-size: 18px !important;
  color: rgba(255,255,255,0.4);
  text-transform: none !important;
`;

class SubNav extends Component {

  render() {
    return (
      <Wrapper className='subnav'>
        <Caret/>
        <Box>
          <List>
            <li><Link to='/fund'>Fund I</Link></li>
            <li><Link to='/sma'>SMA</Link></li>
          </List>
          <Info>
            <span>Right here we'll put a blurb about the fund</span>
          </Info>
        </Box>
      </Wrapper>
    );
  }

}

export default SubNav;
