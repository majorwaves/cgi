import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  display: none;
  top: calc(48px + 2rem);
  left: 0;
  transform: translate(-100px, 0);
  width: 40vw;
  min-width: 900px;
  box-sizing: border-box;
`;

const Box = styled.div`
  background: ${props => props.theme.color.dark};
  color: white;
  display: grid;
  grid-template-columns: 500px 300px;
  padding: 1rem 0;
  height: 500px;

`;

const List = styled.ul`
  margin: 0;
  list-style: none;
  display: block;
  border-right: 1px solid rgba(255,255,255,0.2);
  line-height: 2rem;
  padding: 0;
  width: 250px;
`;

const ListItem = styled.li`
  font-size: 14px;
  margin: 0 !important;
  padding: 0 !important;

  a.main {
    color: white !important;
    display: block;
    padding: .25rem 1rem;
    background: ${props => props.active ? props.theme.color.medium : 'transparent'}
  }
`;

const Info = styled.div`
  padding: 1rem 1rem 1rem 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  font-weight: normal !important;
  font-size: 18px !important;
  color: rgba(255,255,255,0.4);
  text-transform: none !important;
`;

const SubList = styled.ul`
  position: absolute;
  left: 251px;
  top: 0;
  width: 250px;
  margin: 1rem 0 0 0;
  grid-area: sub;
  line-height: 2rem;
  box-sizing: border-box;
  border-right: 1px solid rgba(255,255,255,0.1);
  list-style: none;
  padding: 0;
  height: calc(100% - 2rem);
`;

const SubListItem = styled.li`
  font-size: 14px;
  margin: 0 !important;
  padding: 0 !important;

  a {
    color: white !important;
    display: block;
    padding: .25rem 1rem;

    &:hover {
      background: ${props => props.theme.color.medium};
    }
  }
`;

class SubNav extends Component {

  state = {
    current: 0
  }

  handleHover = (index) => {
    this.setState({ current: index })
  }


  render() {
    return (
      <Wrapper className='subnav'>
      <Box>
        <List>
          {this.props.items.map((item, index) => {
            return (
              <ListItem key={index} active={index === this.state.current}>
                <Link className='main' onMouseEnter={() => { this.handleHover(index) }} to={item.url}>
                  {item.title}
                  </Link>
                  {item.items
                    ?
                      <SubList>
                       {this.props.items[this.state.current].items.map((subItem, index) => {
                         return (
                           <SubListItem key={index}>
                             <Link  to={subItem.url}>
                              {subItem.title}
                             </Link>
                           </SubListItem>
                         )
                       })}
                      </SubList>
                    : null
                  }
              </ListItem>
            )}
          )}
        </List>
        <Info>
          {this.props.items[this.state.current].text}
        </Info>
      </Box>
      </Wrapper>
    );
  }

}

export default SubNav;
