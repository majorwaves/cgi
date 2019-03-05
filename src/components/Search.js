import React, { Component } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  grid-area: search;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Input = styled.input`
  padding: .25rem 1rem;
  appearance: none;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: .25rem 0 0 .25rem;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    font-size: 13px;
    font-family: ${props => props.theme.type.sans};
  }
`;

const Submit = styled.button`
  padding: .25rem 1rem;
  box-sizing: border-box;
  appearance: none;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 0 .25rem .25rem 0;
  margin-left: -1px;
  font-family: ${props => props.theme.type.sans};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.medium};
  cursor: pointer;
`;

class Search extends Component {

  render() {
    return (
      <Wrapper>
        <Input type='search' placeholder='Search …' />
        <Submit><FaSearch size={13} /></Submit>
      </Wrapper>
    );
  }

}

export default Search;
