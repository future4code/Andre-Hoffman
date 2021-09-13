import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const arrayPosts =[
  {
    nomeUsuario: 'user1' ,
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/160'

  },

  {
    nomeUsuario: 'user2' ,
    fotoUsuario: 'https://picsum.photos/51' ,
    fotoPost: 'https://picsum.photos/200/170'
  },

  {
    nomeUsuario: 'user3',
    fotoUsuario: 'https://picsum.photos/52' ,
    fotoPost: 'https://picsum.photos/200/180'
  }
]

class App extends React.Component {
  state = {
    posts : arrayPosts

  }

  render() {
    const listaDePosts = this.state.posts.map ((post)=>{
      return (
        <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario ={post.fotoUsuario}
          fotoPost = {post.fotoPost}
        />

      
        );
    });
    return (
      <MainContainer>
        {listaDePosts}
      </MainContainer>
    );
  };
}

export default App;
