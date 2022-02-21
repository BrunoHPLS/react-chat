import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ContactArea = styled.div`
  box-sizing: border-box;
  padding: 1.7vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
`
const SearchContactArea = styled.form`
  height: 7vh;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 0.5vw;
  background-color: var(--bgcolor);
  display: flex;
  border: 0.2vw solid transparent;
  transition: all 0.3s ease-in-out;
    
  box-shadow: inset 0px 0px 10px black;

  &.active{
    box-shadow: none;
    border: 0.2vw solid var(--selected-color);
    background-color: var(--selected-color);
  }
`
const SearchContactInput = styled.input`
    outline: none;
    width: 80%;
    color: var(--font-color);
    padding-left: 0.6vw;
    font-size: 1vw;
    background-color: transparent;
    border: none;
    border-radius: 0.3vw 0px 0px 0.3vw;
    transition: all 0.3s ease-in-out;

    &::placeholder{
      font-size: 1vw;
    }
    &.active{
      background-color: var(--bgcolor);
    }
`;
const SearchContactButton = styled.button`
    cursor: pointer;
    outline: none;
    width: 20%;
    color: var(--font-color);
    transition: all 0.3s ease-in-out;
    border: none;
`;

const ContactsDiv = styled.div`
    height: 70vh;
    max-height: 70vh;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 0.5vw;
    color: var(--font-color);
    background-color: var(--bgcolor);

    box-shadow: inset 0px 0px 2px black;

    &::-webkit-scrollbar{
      width: 0.25vw;
    }
    &::-webkit-scrollbar-button{
      width: 0px;
      height: 0px;
    }
    &::-webkit-scrollbar-thumb{
      border: none;
      border-radius: 0.5vw;
      background-color: var(--cinza-claro);
    }

`;
const Contact = styled(ListItem)`
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
      transform: scale(1.04);
      background-color: var(--selected-color);
    }
`;

const ContactsManager = styled.div`
    height: 7vh;
    display: flex;
    gap: 0.1vw;

    overflow: hidden;
    border-radius: 0.5vw;
`
const ContactsActionBtn = styled.button`
    cursor: pointer;
    width: 100%;
    background-color: var(--azul);
    color: var(--font-color);
    font-size: 1vw;
    border-radius: 0.1vw;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;

    transition: all 0.3s ease-in-out;

    &:hover{
      background-color: #072440;
    }
`;


function Contacts() {

    const [contatos, setContatos] = useState();

  return (
    <ContactArea>
        <SearchContactArea onSubmit={(event)=>{event.preventDefault();}}
        onFocus={(event)=>{
          event.target.parentNode.classList.add('active');
          event.target.parentNode.children[0].classList.add('active');
          event.target.parentNode.children[1].classList.add('active');
        }}
        onBlur={(event)=>{
          event.target.parentNode.classList.remove('active');
          event.target.parentNode.children[0].classList.remove('active');
          event.target.parentNode.children[1].classList.remove('active');
          }}>
            <SearchContactInput type="text"placeholder="Pesquise um contato"></SearchContactInput>
            <SearchContactButton type="submit"><SearchIcon sx={{fontSize: '1.5vw'}}/></SearchContactButton>
        </SearchContactArea>
        <ContactsDiv>
          <List sx={{ width: '100%', bgcolor: 'transparent', padding: '0px'}}>
            <Contact sx={{height: 'auto', padding: '0.3vw 0.7vw'}}>
              <ListItemAvatar sx={{padding: '0.7vw', maxWidth: '3.4vw',minWidth: '3.4vw'}}>
                <Avatar sx={{width: '2.7vw', height: '2.7vw'}}>
                  <img src="https://github.com/BrunoHPLS.png" alt="foto de perfil" width="100%"/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
              primary={
                <React.Fragment>
                  <Typography 
                  sx={{fontSize: '1vw', letterSpacing: '0.1vw'}}
                  component="h4"
                  >
                    Bruno
                  </Typography>
                </React.Fragment>
              } 
              secondary={
                <React.Fragment>
                  <Typography 
                  sx={{fontSize: '0.8vw', color: 'var(--font-color)', opacity: '0.5'}}
                  component="span"
                  >
                    online
                  </Typography>
                </React.Fragment>
              } />
            </Contact>        
          </List>
        </ContactsDiv>
        <ContactsManager>
            <ContactsActionBtn><AddCircleIcon sx={{fontSize: '1.5vw'}}/>Add</ContactsActionBtn>
            <ContactsActionBtn><EditIcon sx={{fontSize: '1.5vw'}}/>Edit</ContactsActionBtn>
            <ContactsActionBtn><DeleteIcon sx={{fontSize: '1.5vw'}}/>Delete</ContactsActionBtn>
        </ContactsManager>
    </ContactArea>
  );
}

export default Contacts;