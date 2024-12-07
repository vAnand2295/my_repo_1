import React from 'react'
import styled from 'styled-components'
import SortIcon from '@mui/icons-material/Sort';
import Comments from '../components/Comments';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import DownloadIcon from '@mui/icons-material/Download';
import { style } from '@mui/system';
// import { Card } from '@mui/material';
import Card from '../components/Card';
import avatar from "../assest/avatar.png";
import { Skeleton } from '@mui/material';


  const  Container = styled.div`
  display:flex;
  gap:24p;
  `;

const   Content = styled.div`
flex:5;
`;

const  Recommendation = styled.div`
flex:2;
`;

const  Videowrapper = styled.div`

`;

const Titel = styled.h1`
font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
display:flex;
width:100%;
gap:60px;
`;

const Info = styled.div`
display:flex;
gap:30px;
`;

const Channel = styled.div`
 
`;

const Channelname = styled.h3`
 
`;

const Subscriber = styled.h5`
 
`;



const Buttonsmid = styled.div`
display:flex;
gap:10px;
margin-left:0px;
`;


const Buttonslast= styled.div`
 display:flex;
gap:20px;
  margin-left: auto; 

`;

const Buttonlikeleft = styled.button`
  width:max-content;
  min-width:90px;
  height: 50px;
  padding: 10px;
  border-radius: 50px 0 0 50px; /* Left side is rounded, right side is flat */
  border: none;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:10px;
  justify-content:center;
  font-weight:500;
font-size:16px;
`;


const Buttonlikeright = styled.button`
  width: 90px;
  height: 50px;
  padding: 10px;
  border-radius: 0 50px 50px 0; /* Right side is rounded, left side is flat */
  border: none;
    cursor:pointer;

`;


const Likebuttonwrapper = styled.div`
  display: flex;
  align-items: center; /* Align the buttons and vertical line vertically */
  
`;

const VerticalHr = styled.hr`
  width: 1px; /* Make it narrow */
  height: 40px; /* Adjust the height as needed */
  background-color: black; /* Set the line color */
  border: none; /* Remove the default border */
  margin: 0;
`;



const Iconstyle= styled.span`

`;

const Button= styled.button`
width:110px;
height:50px;
padding:10px;
border-radius:50px;
border:none;
    cursor:pointer;
    display:flex;
align-items:center;
justify-content:center;
font-weight:500;
font-size:16px;

`;

const Buttondot= styled.button`
width:50px;
height:50px;
padding:10px;
border-radius:50px;
border:none;
    cursor:pointer;
    display:flex;
align-items:center;
justify-content:center;
font-weight:500;
font-size:16px;

`;

const Sharebutton = styled.button`
width:110px;
height:50px;
padding:10px;
border-radius:50px;
border:none;
display:flex;
align-items:center;
justify-content:center;
gap:9px;
font-weight:500;
font-size:16px;
    cursor:pointer;


`;
const Shareicon = styled.div`
  transform: rotate(180deg); /* Rotate the icon 180 degrees to point right */

`;

const ChannelImage = styled.img`

width:36px;
height:36px;
border-radius:50%;
// background-color:#999;

`;

const Videodetails = styled.div`
 width:100%;
 height:150px;
 background-color:lightgreen;
 margin-top:30px;
 border-radius:10px;

`;

const Viewtitle= styled.h3`
 font-size:18px;
 font-weight:500;
  padding: 10px;

`;

const Desription = styled.h5`
  font-size:16px;
  font-weight:400;
    padding: 10px;

`;

const Moreword = styled.div`
 font-size:16px;
  font-weight:400;
    padding: 10px;

`;

const Commentstitle = styled.div`
font-size:25px;
font-weight:700;
  color: ${({ theme }) => theme.text}

`;

const Sortby = styled.div`
display:flex;
align-items:center;
  color: ${({ theme }) => theme.text}

`
const Commentswrapper = styled.div`
display:flex;
gap:50px;
margin-top:50px;
`;

const Sortbytext = styled.div`
dispaly:flex;
margin-left:10px;
`;


const Hr = styled.hr`
 margin-top:20px;
   color: ${({ theme }) => theme.text}

`;


const Video = () => {
  return (

    <Container>
    
  <Content>
  <Videowrapper>
  <Skeleton variant="rectangular" width={1090} height={720} />

        </Videowrapper>

    <Titel>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


    </Titel>

    <Details>
      <Info>
     <ChannelImage src={avatar}/>

        <Channel>
          <Channelname>Anand tube</Channelname>
          <Subscriber>23K subscribers</Subscriber>
        </Channel>
        </Info>
          
       
       
        <Buttonsmid>
          <Button>Subscribe</Button>

        </Buttonsmid>

        <Buttonslast>
          <Likebuttonwrapper>

          <Buttonlikeleft><Iconstyle><ThumbUpIcon/></Iconstyle>25353k</Buttonlikeleft>
          <VerticalHr/>
          <Buttonlikeright>
          <Iconstyle><ThumbDownIcon/></Iconstyle>

          </Buttonlikeright>
          </Likebuttonwrapper>

          <Sharebutton><Shareicon><ReplyIcon/></Shareicon>Share</Sharebutton>
          <Button><DownloadIcon/>Download</Button>
          <Buttondot>...</Buttondot>

        </Buttonslast>



    </Details>
    <Videodetails>
<Viewtitle>101k views 2 years ago</Viewtitle>
  <Desription>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


  <Moreword>...More</Moreword>

  </Desription>
        </Videodetails>
    
<Commentswrapper>

    <Commentstitle>
      242 Comments
    </Commentstitle>

    <Sortby>
       <SortIcon/> <Sortbytext>Sort by</Sortbytext>
    </Sortby>
    </Commentswrapper>

    <Hr/>

    <Comments/>

  </Content>

  
  
  
  <Recommendation>

    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>

  </Recommendation>

    </Container>
  )
}

export default Video