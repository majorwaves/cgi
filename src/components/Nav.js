import React, { Component } from 'react'
import styled from 'styled-components'
import Search from './Search'
import { NavLink } from 'react-router-dom'
import SubNav from './SubNav';

const Menu = styled.nav`
  color: ${props => props.theme.color.medium};
  box-sizing: border-box;
  display: flex;
  align-self: flex-end;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */

  .nav {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    width: 40vw;
    min-width: 900px;

    li {
      text-transform: uppercase;
      font-family: ${props => props.theme.type.sans};
      margin-right: 4rem;
      font-weight: 500;
      font-size: 14px;
      padding-bottom: 2.5rem;

      &:hover {
        .subnav {
          display: block;
        }
      }

      &.link {
        cursor: pointer;

        &:hover {
          color: ${props => props.theme.color.light};
        }
      }

      a {
        color: ${props => props.theme.color.medium};
        text-decoration: none;

        &.active {
          position: relative;

          &:after {
            position: absolute;
            bottom: -40px;
            content: "";
            height: 6px;
            width: 100%;
            background: ${props => props.theme.color.lightGrey};
            display: block;
          }
        }

        &:hover {
          color: ${props => props.theme.color.light};
        }
      }

      &:last-of-type {
        margin-right: 0;
      }
    }

    &.main {
      justify-content: flex-start;

      li {
        font-weight: 800;
        font-size: 16px;

        &.active {
          position: relative;

          &:after {
            bottom: -20px;
          }
        }
      }
    }
  }
`;

class Nav extends Component {

  render() {

    return (
      <Menu>
        <ul className='nav main'>
          <li><NavLink to='/the-firm'>The Firm</NavLink></li>
          <li>
            Platforms
            <SubNav />
          </li>
          <li><NavLink to='/team'>Team</NavLink></li>
          <li><NavLink to='/market'>Market</NavLink></li>
          <li><NavLink to='/social-impact'>Social Impact</NavLink></li>
          <li><NavLink to='/media'>Media</NavLink></li>
        </ul>
      </Menu>
    );
  }

}

export default Nav;
