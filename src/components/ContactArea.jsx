import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ContactArea = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const SearchContactArea = styled.form`
  height: 10%;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--bgcolor);
  display: flex;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
    
  box-shadow: inset 0px 0px 10px black;

  &.active{
    box-shadow: none;
    border: 2px solid var(--selected-color);
  }
`
const SearchContactInput = styled.input`
    outline: none;
    width: 80%;
    color: var(--font-color);
    padding-left: 10px;
    font-size: 1.1rem;
    background-color: transparent;
    border: none;

    &::placeholder{
      font-size: 1rem;
    }
`;
const SearchContactButton = styled.button`
    cursor: pointer;
    outline: none;
    width: 20%;
    color: var(--font-color);
    transition: all 0.3s ease-in-out;
    border: none;

    &.active{
      background-color: var(--selected-color);
    }
`;

const ContactsDiv = styled.div`
    height: 64vh;
    max-height: 64vh;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 10px;
    color: var(--font-color);
    background-color: var(--bgcolor);

    box-shadow: inset 0px 0px 2px black;

    &::-webkit-scrollbar{
      width: 5px;
    }
    &::-webkit-scrollbar-button{
      width: 0px;
      height: 0px;
    }
    &::-webkit-scrollbar-thumb{
      border: none;
      border-radius: 10px;
      background-color: var(--cinza-claro);
    }

`;
const Contact = styled(ListItem)`
    cursor: pointer;
    border-radius: 0px;
    border: 2px solid transparent;
    transition: all 0.3s ease-in-out;

    &:hover{
      transform: scale(1.04);
      background-color: var(--selected-color);
    }
`;

const ContactsManager = styled.div`
    display: flex;
`


function Contacts() {

    const [contatos, setContatos] = useState();

  return (
    <ContactArea>
        <SearchContactArea onSubmit={(event)=>{event.preventDefault();}}
        onFocus={(event)=>{
          event.target.parentNode.classList.add('active');
          event.target.parentNode.children[1].classList.add('active');
        }}
        onBlur={(event)=>{
          event.target.parentNode.classList.remove('active');
          event.target.parentNode.children[1].classList.remove('active');
          }}>
            <SearchContactInput type="text"placeholder="Pesquise um contato"></SearchContactInput>
            <SearchContactButton type="submit" id="searchContactBtn"><SearchIcon/></SearchContactButton>
        </SearchContactArea>
        <ContactsDiv>
          <List sx={{ width: '100%', bgcolor: 'transparent', padding: '0px'}}>
            <Contact>
              <ListItemAvatar>
                <Avatar>
                  <img src="https://github.com/BrunoHPLS.png" width="100%"/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              sx={{textOverflow: 'ellipsis', overflow: 'hidden'}}
              primary="Bruno" 
              secondary={
                <React.Fragment>
                  <Typography 
                  sx={{ display: 'inline', overflow: 'hidden'}}
                  component="span"
                  color="var(--cinza-claro)"
                  textOverflow= 'ellipsis'
                  >
                    online
                  </Typography>
                </React.Fragment>
              } />
            </Contact>
            <Contact>
              <ListItemAvatar>
                <Avatar>
                  <img src="https://github.com/BrunoHPLS.png" width="100%"/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              sx={{textOverflow: 'ellipsis', overflow: 'hidden'}}
              primary="Bruno" 
              secondary={
                <React.Fragment>
                  <Typography 
                  sx={{ display: 'inline', overflow: 'hidden'}}
                  component="span"
                  color="var(--cinza-claro)"
                  textOverflow= 'ellipsis'
                  >
                    online
                  </Typography>
                </React.Fragment>
              } />
            </Contact>
            
          </List>
        </ContactsDiv>
        <ContactsManager>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>Add</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </ButtonGroup>
        </ContactsManager>
    </ContactArea>
  );
}

export default Contacts;