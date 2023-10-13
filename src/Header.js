import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar } from '@mui/material';
import Ulogo from './U.jpg'


function Header() {
  const [user] = useAuthState(auth)
console.log(user)

  return (
<HeaderContainer>

{/* Header Left */}
<HeaderLeft>

<AccessTimeIcon/>
</HeaderLeft>



{/* Header Middle */}


<HeaderSearch>
<img src={Ulogo} />
<h4>UNIVERSAL OFFERS</h4>

{/* <input placeholder='SalesForceMama'></input>
<TuneIcon/>
<SearchIcon/> */}
</HeaderSearch>

{/* Header Right */}

<HeaderRight>

<HelpOutlineIcon />
<img onClick={()=>auth.signOut()} src={user?.photoURL} />
</HeaderRight>

</HeaderContainer>
  )
}

export default Header

const HeaderSearch = styled.div`
      flex:0.5;
      opacity: 1;
     border-radius: 3px;
      /* background-color:rgb(93,61,94); */
      text-align: center;
      display: flex;
      align-items: center;
      padding: 0 200px;
      color: gray;
      height: 25px;
      position: relative;
      top: 22%;
      /* border: 1px solid gold; */
      left: 5%;
      align-items: center;
      width: 100vw;
img{
   height: 45px;
   padding-right: 15px;
}
h4{
font-family: 'Source Serif Pro', serif;
  font-size:26px;
  color: black;
  font-weight:100;
  display:flex;
  align-items:center;
}
  /* input{
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;  

  } */

`


const HeaderContainer = styled.div`
      display: flex;
     
      /* color:black; */
      background-color:white;
      /* background-color: rgb(53,13,54); */
      height: 45px;
      width: 100%;
      /* justify-content: space-between; */
      position: fixed;
      border-bottom: 1px solid grey;
      
h4{
font-family: 'Source Serif Pro', serif;
  font-size:26px;
  color: black;
  font-weight:100;
  display:flex;
  align-items:center;



}

`
const HeaderLeft = styled.div`
      flex: 0.3;
     display: flex;
     align-items: center;
    .MuiSvgIcon-root{
      margin-left: 215px;
      font-size: 22px;
      
    }
    :hover{
    opacity: 0.8;
    }
`

const HeaderRight = styled.div`
    flex: 0.2;
    display: flex;
    align-items: center;
   
.MuiSvgIcon-root{
  position: relative;
 left: 50%;
 margin-right: 2px;
 :hover{
  opacity: 0.9;
 }
}
img{
  height: 27px;
  position:relative;
  border-radius: 3px;
  left:60%;
 }  


`