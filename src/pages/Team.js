import React, { Component } from 'react'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import TeamMember from '../components/TeamMember'
import image from '../images/firm-neu.jpg'
import data from '../leadershipData.js'

const Wrapper = styled.div`
  border-top: 1px solid rgba(0,0,0,0.12);

  a {
    color: black;
    text-decoration: none;
  }
`;

const Table = styled.div`
  width: 90vw;
  max-width: 1100px;
  margin: 4rem auto;
`;

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr .5fr;
  background: ${props => props.theme.color.lightGrey};
  font-size: 13px;

  div {
    padding: 1rem .5rem;
  }
`;

class Team extends Component {

  state = {
    selectedItem: ''
  }

  handleClick = (id) => {
    if(this.state.selectedItem === ""){
      this.setState({ selectedItem: id })
    } else {
      this.setState({ selectedItem: "" })
    }
  }

  render(){
    return (
      <Wrapper>
        <PageHeader
          image={image}
          title='Leadership'
        />
        <Table>
          <TableHead>
            <div>Name</div>
            <div>Title</div>
            <div>Business Unit</div>
            <div>Location</div>
          </TableHead>
          {Object.keys(data).map(person => {
            const { bio, image, title, name, location, unit } = data[person];
            return (
              <TeamMember
                key={person}
                image={image}
                name={name}
                title={title}
                bio={bio}
                unit={unit}
                selected={this.state.selectedItem === person}
                location={location}
                onClick={() => { this.handleClick(person) }}
              />
            )
          })}
        </Table>
      </Wrapper>
    )
  }
}

export default Team;
