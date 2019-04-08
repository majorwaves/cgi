import React, { Component } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  grid-area: search;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
`;

const Submit = styled.button`
  padding: .25rem 1rem;
  box-sizing: border-box;
  appearance: none;
  border: ${props => props.border ? '1px solid rgba(0,0,0,0.12)' : '0'};
  border-radius: 0 .25rem .25rem 0;
  margin-left: -1px;
  font-family: ${props => props.theme.type.sans};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.medium};
  cursor: pointer;
  outline: 0;
  background: white;
`;

class Search extends Component {

  render() {
    return (
      <Wrapper>
        <Submit onClick={this.props.toggleOpen}><FaSearch size={14} /></Submit>
      </Wrapper>
    );
  }

}

export default Search;
