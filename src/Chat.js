import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import TagIcon from '@mui/icons-material/Tag';
import ArrowIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatInput from './ChatInput';
import { useSelector } from 'react-redux';
import { selectRoomId } from './features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { auth, db } from './firebase';
import { doc } from 'firebase/firestore';
import Message from './Message';
import { query, orderBy } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function Chat() {
	const [user] = useAuthState(auth)
	const chatRef = useRef(null)

const roomId = useSelector(selectRoomId)	

	const [roomDetails] = useDocument(
		roomId && doc(collection(db, 'rooms'),roomId)

)

// const [roomMessages,loading] = useCollection(
// 	roomId && collection(db,'rooms', roomId,'messages')
	
// )


const messagesRef = roomId && collection(db, 'rooms', roomId, 'messages');
const q = roomId && query(messagesRef, orderBy('timestamp', 'asc'));
const [roomMessages,loading] = useCollection(q);


useEffect(()=>{
chatRef?.current?.scrollIntoView({
	behavior:"smooth",
})
},[roomId,loading])


console.log(roomDetails?.data())
console.log(roomMessages)


  return (
	 <ChatContainer>
		{roomDetails && roomMessages && (
<>
	<Header>
		
		<HeaderLeft>
			<h3> <TagIcon/>{roomDetails?.data().name} <ArrowIcon/> </h3>

		</HeaderLeft>

		<HeaderRight>

			<h3><AccountBoxIcon/>2</h3>

		</HeaderRight>
	</Header>

 <ChatMessages>
{roomMessages?.docs.map((doc)=>{
	const  {message, timestamp, user, userImage} = doc.data()

return(
	<Message
	key={doc.id}
	message={message}
	timestamp={timestamp}
	user={user}
	userImage={userImage}
	
	/>

)

})}

<ChatBottom ref={chatRef} />
</ChatMessages> 

<ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId}	
/>
</>
   
		)}
		
	</ChatContainer>
	
  )
}

export default Chat

const ChatMessages = styled.div`
padding-bottom: 80px;
`
const ChatBottom = styled.div`
padding-bottom: 200px;
`

const Header = styled.div`
display:flex;
justify-content:space-between;

border-bottom:1px solid lightgrey;

background-color: white;

`
const HeaderLeft = styled.div`

h3{
	display: flex;
	font-size: 18px;
	margin-left: 10px;
	align-items: center;
	color: black;
:hover{
background-color :rgb(248,248,248);

border-radius: 5px;
}
.MuiSvgIcon-root{
	font-size: 20px;
	padding-left: 2px;
	padding-right:2px;
}

}

`
const HeaderRight = styled.div`

h3{
	display: flex;
	margin-right: 19px;
	border: 1px solid lightgrey;
	border-radius: 5px;
	font-size: 14px;
	color: grey;
	align-items: center;
	padding-right: 5px;
:hover{
background-color :rgb(248,248,248);
		}
	.MuiSvgIcon-root{
		margin-right: 10px;
		font-size: 30px;
		color: lightpink;
		
	}
}
`

const ChatContainer = styled.div`
flex: 0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;

`


