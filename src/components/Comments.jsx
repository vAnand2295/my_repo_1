import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';
import avatar from "../assest/avatar.png";



const Container = styled.div`
margin-top:30px;
`;


const NewComment = styled.div`

display:flex;
align-items:center;
gap:10px;


`;




const Avatar = styled.img`

width:36px;
height:36px;
border-radius:50%;

`;

const Input = styled.input`
border:none;
border-bottom:1px solid ${({ theme }) => theme.dark};
background-color: transparent;
outline:none;
padding:5px;
width:100%;
  color: ${({ theme }) => theme.text}

`;

const Comments = () => {
  return (
    <Container>
        <NewComment>
           <Avatar src={avatar}/>
           <Input placeholder='Add a comment'/>
        </NewComment>
<Comment/>
<Comment/>
<Comment/>
<Comment/>
<Comment/>
<Comment/>
<Comment/>
<Comment/>




    </Container>
  )
}

export default Comments