import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';

const ContactArea = styled.div`
  box-sizing: border-box;
  padding: 1.7vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
`
const SearchContactArea = styled.div`
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
const ContactsList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 100%;
    background-color: transparent;
`
const Contact = styled.li`
    height: 6vh;
    padding: 2vh 2vw;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1vh solid var(--cinza);

    &:hover{
      transform: scale(1.04);
      background-color: var(--selected-color);
    }
`;
const ContactUserDiv = styled.div`
    display: grid;
    grid-template-areas: 
    "avatar name"
    "avatar status";
    align-items: center;
    column-gap: 1vw;
`
const ContactAvatar = styled.div`
    grid-area: avatar; 
    width: 2.7vw;
    height: 2.7vw;
    border-radius: 100%;
    background-color: var(--cinza);
    background-image: url("https://github.com/${props=>props.image}.png");
    background-size: cover;
`
const ContactTxt = styled.h4`
    grid-area: ${props=>props.area};
    ${props=> (props.area === "name")? 
    "font-size: 1vw; letter-spacing: 0.1vw; max-width: 6.5vw;white-space: nowrap;overflow: hidden; text-overflow: ellipsis;" : 
    "font-size: 0.8vw; color: var(--font-color); opacity: 0.5;"}
`
const ContactBtnDiv = styled.div`
    display: flex;
    gap: 1vw;
    align-items: center;
`
const ContactActionBtn = styled.button`
    cursor: pointer;
    color: var(--font-color);
    transition: all 0.3s ease-in-out;
    
    width: 2vw;
    height: 2vw;
    border-radius: 100%;
    background-color: var(--cinza-claro);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      background-color: var(--cinza);
    }
`
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

    transition: all 0.2s ease-in-out;

    &:hover{
      background-color: #072440;
    }
`;


function Contacts() {

    const realContatos = [
      {
        nome: "Bruno",
        github: "BrunoHPLS",
        status: "online"
      },
      {
        nome: "Pedro Melém",
        github: "MrMelem",
        status: "online"
      },
      {
        nome: "Elton Souza",
        github: "Elton-Souza",
        status: "offline"
      },
      { 
        nome: "Luiz",
        github: "Luiz",
        status: "online"
      },
      {
        nome: "Pedro Lucas Correa",
        github: "PedroLucas-Correa",
        status: "offline"
      },
      {
        nome: "Alessandro Oliveira",
        github: "AlessandroOliiveira",
        status: "online"
      },
      {
        nome: "Marcelo Sales",
        github: "MarceloSales1",
        status: "online"
      },
      {
        nome: "Meta",
        github: "Meta",
        status: "offline"
      }
    ];

    const [contatos, setContatos] = useState(realContatos);

  return (
    <ContactArea>
        <SearchContactArea 
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
            <SearchContactInput 
            name="contato" type="text"placeholder="Pesquise um contato" autoComplete="off"
            onChange={(event)=>{
              const contatoAtual = event.target.value;
              const newList = realContatos.filter( contato => contato.nome.includes(contatoAtual));
              setContatos(newList);
            }}></SearchContactInput>
            <SearchContactButton type="submit"><SearchIcon sx={{fontSize: '1.5vw'}}/></SearchContactButton>
        </SearchContactArea>
        <ContactsDiv>
          <ContactsList>
            {
              contatos.map((element,index)=>{
                return (
                <Contact key={index} title={element.nome+" - "+element.github}>
                  <ContactUserDiv>
                    <ContactAvatar image={element.github}></ContactAvatar>
                    <ContactTxt area="name">{element.nome}</ContactTxt>
                    <ContactTxt area="status">{element.status}</ContactTxt>
                </ContactUserDiv>
                <ContactBtnDiv>
                  <ContactActionBtn><EditIcon sx={{fontSize: '1.3vw'}}/></ContactActionBtn>
                  <ContactActionBtn><DeleteIcon sx={{fontSize: '1.3vw'}}/></ContactActionBtn>
                </ContactBtnDiv>
                </Contact>
                );
              })
            }     
          </ContactsList>
        </ContactsDiv>
        <ContactsManager>
            <ContactsActionBtn><AddBoxIcon sx={{fontSize: '1.5vw'}}/>Adicionar novo contato</ContactsActionBtn>
        </ContactsManager>
    </ContactArea>
  );
}

export default Contacts;