import React from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import Chat from './components/Chat';

const ResetStyle= createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b,button, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    color: inherit;
    background-color: initial;
    text-decoration: none;
    margin: 0;
    padding: 0;
    border: none;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;

const BaseStyle = createGlobalStyle`

    :root {
        --preto: #0d1117;
        --cinza: #161b22;
        --cinza-claro: #21262d;
        --font-color: #c9d1d9;
        --bgcolor: #121212;
    }  

    body {
      font-family: "Roboto";
      background-color: var(--bgcolor);
      overflow-x: hidden;
    }
`;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

function App() {
  
  return (
  <AppContainer>
    <ResetStyle/>
    <BaseStyle/>
    <Chat/>
  </AppContainer>
  );
}

export default App;
