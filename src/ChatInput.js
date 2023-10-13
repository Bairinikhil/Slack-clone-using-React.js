import React, { useState } from 'react'
import styled from 'styled-components'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import LinkIcon from '@mui/icons-material/Link';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ListIcon from '@mui/icons-material/List';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import AddIcon from '@mui/icons-material/Add';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Voice from '@mui/icons-material/KeyboardVoiceOutlined';
import Emoji from '@mui/icons-material/SentimentSatisfiedOutlined';
import Email  from '@mui/icons-material/AlternateEmailOutlined';
import TextIncrease from '@mui/icons-material/TextIncreaseOutlined';
import SendIcon from '@mui/icons-material/Send';
import ArrowDown from '@mui/icons-material/KeyboardArrowDownOutlined';
import { collection } from 'firebase/firestore';
import { auth, db } from './firebase';

import firebase from 'firebase/compat/app'; // Import the compat version of Firebase SDK
import { doc, addDoc, serverTimestamp } from 'firebase/firestore'; // Import Firestore API
import { useAuthState } from 'react-firebase-hooks/auth';



function ChatInput({channelName,channelId,chatRef}) {
	const [user] = useAuthState(auth)
	const [message,setmessage] = useState("")
const SendMessage =(e)=>{
	e.preventDefault()
	console.log(message)

if(!channelId){
	return false
}

const messageCollection = collection(db, "rooms", channelId, 'messages')
	
addDoc(messageCollection, {
	message: message,
	timestamp: serverTimestamp(),
	user:user.displayName,
	userImage:user.photoURL,

})

chatRef.current.scrollIntoView({
	behavior: "smooth"})
setmessage("")
}


  return (
	<ChatInputContainer>

		<InputHeader>

		<FormatBoldIcon/>
		<FormatItalicIcon/>
		<StrikethroughSIcon style={{paddingRight:'8px',borderRight:'1px solid lightgrey'}} />
		<LinkIcon style={{paddingRight:'8px',borderRight:'1px solid lightgrey'}} />
		<FormatListNumberedIcon/>
		<ListIcon  style={{paddingRight:'8px',borderRight:'1px solid lightgrey'}} />
		<MenuIcon style={{paddingRight:'8px',borderRight:'1px solid lightgrey'}} />
		<CodeIcon/>


		</InputHeader>

		<form onSubmit={SendMessage} > 
			<input 
			type='text' 
			placeholder={`Message # ${channelName}`} 
			value={message} 
			onChange={(e) => setmessage(e.target.value)}
			/>
		</form>

		<InputFooter>
		<InputFooterLeft>

		<AddIcon  style={{paddingRight:'8px',borderRight:'1px solid lightgrey'}} />
		<VideocamOutlinedIcon/>
		<Voice  style={{paddingRight:'8px',borderRight:'1px solid lightgrey'}} />
		<Emoji/>
		<Email/>
		<TextIncrease/>


		</InputFooterLeft>

		<InputFooterRight>

		<SendIcon  style={{paddingRight:'8px',borderRight:'1px solid lightgrey'}} />
		<ArrowDown/>

		</InputFooterRight>


		</InputFooter>

	</ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
border: 1px solid lightgrey;
height: 10px;
height: 114px;
position: fixed;
width:80%;
right: 25px;
bottom:25px;
border-radius: 10px;

form{
	height: 42px;
	border: none;
	background-color: white;
input{
	height:80%;
	width: 99%;
	border: none;
	outline: none;
	
}

}


`

const InputHeader = styled.div`
display: flex;
padding: 8px;
background-color: rgb(248,248,248);
border-top-left-radius: 10px;
border-top-right-radius: 10px;

.MuiSvgIcon-root{
	margin-right: 18px;
	color: grey;
	font-size:20px;
}
`
const InputFooter = styled.div`
display: flex;
background-color: white;
height: 31.2%;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
justify-content: space-between;

`
const InputFooterLeft = styled.div`
display:flex;
align-items: center;

.MuiSvgIcon-root{
	
	font-size: 21px;
	color:grey;
	margin-left: 20px;
:hover{
	background-color:  rgb(248,248,248);
	border-radius: 3px;
	height: 20px;

}	

}
`

const InputFooterRight = styled.div`
display:flex;
align-items: center;
.MuiSvgIcon-root{
	
	font-size: 21px;
	color:grey;
	margin-right: 5px;

	:hover{
	background-color:  rgb(248,248,248);
	border-radius: 3px;
	height: 20px;
}
}

`
