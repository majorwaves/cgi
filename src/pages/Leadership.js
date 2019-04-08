import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import TeamMember from '../components/TeamMember'
import Sidebar from "react-sidebar"
import image from '../images/firm-neu.jpg'
import data from '../leadershipData.js'

const Wrapper = styled.div`
  border-top: 1px solid rgba(0,0,0,0.12);

  a {
    color: black;
    text-decoration: none;
  }

  .drawer {
    background: white;
    color: ${props => props.theme.color.dark};
    padding: 2rem;
    box-sizing: border-box;
    width: 40vw;
    height: 100vh;
    position: fixed !important;

    p {
      line-height: 1.7em;
      opacity: 0.7;
    }

    img {
      width: 240px;
      margin: 2rem auto;
      display: block;
    }

    ul {
      list-style: none;
      padding: 0;
      line-height: 2em;
    }
  }
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

class Leadership extends Component {

  state = {
    drawerOpen: false,
    drawer: ''
  }

  handleClick = (id) => {
    console.log('clicked')
    this.setState({ drawerOpen: !this.state.drawerOpen, drawer: id })
  }

  renderDrawer = () => {
    console.log('id', id)
    console.log('data', data)
    const id = this.state.drawer;
    const { bio, image, title, name } = data[id];
    return (
      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        {image !== '' &&
          <img src={image} alt={name} />
        }
        {bio.map(text => {
          return <p>{text}</p>
        })}
      </div>
    )
  }

  render(){
    return (
      <Wrapper>
        <PageHeader
          image={image}
          title='Leadership'
        />
        <Grid>
          {Object.keys(data).map(person => {
            const { excerpt, image, title, name } = data[person];
            return (
              <TeamMember
                key={person}
                image={image}
                name={name}
                title={title}
                excerpt={excerpt}
                onClick={() => { this.handleClick(person) }}
              />
            )
          })}
        </Grid>
        {this.state.drawerOpen &&
          <Sidebar
            open={this.state.drawerOpen}
            sidebarClassName='drawer'
            pullRight
            onSetOpen={this.handleClick}
            sidebar={(
              <div>
                {this.renderDrawer()}
              </div>
            )}
          />
        }
      </Wrapper>
    )
  }
}

export default Leadership;
