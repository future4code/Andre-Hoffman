import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'user1'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/160'}
        />
        <Post
          nomeUsuario={'user2'}
          fotoUsuario={'https://picsum.photos/51'}
          fotoPost={'https://picsum.photos/200/170'}
        />
        <Post
          nomeUsuario={'user3'}
          fotoUsuario={'https://picsum.photos/52'}
          fotoPost={'https://picsum.photos/200/180'}
        />
      </MainContainer>
    );
  }
}

export default App;
