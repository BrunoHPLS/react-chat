import React from 'react';
import styled from 'styled-components';
import Contacts from './ContactArea';

const ChatContainer = styled.div`
    background-color: var(--preto);
    width: 1000px;
    height: 600px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px black;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: 700px 300px;
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