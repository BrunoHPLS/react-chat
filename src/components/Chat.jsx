import React from 'react';
import styled from 'styled-components';
import Contacts from './ContactArea';

const ChatContainer = styled.div`
    background-color: var(--preto);
    width: 80vw;
    height: 96vh;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px black;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: 70% 30%;
`

const ChatArea = styled.div`
  
`


function Chat() {
  return (
  <ChatContainer>
    <ChatArea></ChatArea>
    <Contacts/>
  </ChatContainer>
  );
}

export default Chat;