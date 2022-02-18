import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const ContactArea = styled.div`
background-color: red;
  padding: 2rem;
  display: grid;
  grid-template-rows: 12% 88%;
`
const SearchContactArea = styled.form`
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  background-color: white;
  display: flex;
  position: relative;
  padding: 0.8rem 0px;
`
const SearchContactLabel = styled.label`
  transition: all 0.3s ease-in-out;
  position: absolute;
  background-color: green;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`
const SearchContactInput = styled.input`
    outline: none;
    width: 80%;
    color: var(--font-color);
    padding-left: 10px;
    font-size: 1.2rem;
    background-color: transparent;
    border: none;

    &:focus + #ContactSearchLabel{
      transform: translateY(-250%) scale(0.85);
    }
`;
const SearchContactButton = styled.button`
    width: 20%;
    background-color: var(--font-color);
`;
const ContactsList = styled.div`
`

function Contacts() {

    const [contatos, setContatos] = useState();

  return (
    <ContactArea>
        <SearchContactArea>
            <SearchContactInput type="text" id="ContactSearch"></SearchContactInput>
            <SearchContactLabel for="ContactSearch" id="ContactSearchLabel">Contatos</SearchContactLabel>
            <SearchContactButton type="submit"><SearchIcon/></SearchContactButton>
        </SearchContactArea>
        <ContactsList></ContactsList>
    </ContactArea>
  );
}

export default Contacts;