import React from 'react'
import styled from 'styled-components'
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from './SidebarOptions';
import { CommentOutlined } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import Corporate from '@mui/icons-material/CorporateFareRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { auth, db } from './firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';

function Sidebar() {
let navigate = useNavigate()

const [user] = useAuthState(auth)

		const [channels,loading,error] = useCollection(collection(db, 'rooms'))
		// (db.collection("rooms"))
console.log("hello things are fucking complicated")


  return (
	
	  <SidebarContainer>
		
<SidebarHeader>

		<SidebarInfo onClick={() => {navigate('/Create')}} >
			<h3>slack-clone</h3>
			<CreateIcon/>
			
{/* <p>Upgrade subscription</p> */}
		</SidebarInfo>
</SidebarHeader>

<SidebarOptions Icon={CommentOutlined} title="Thread" />
<SidebarOptions Icon={SendIcon} title="Draft & sent"/>
<SidebarOptions Icon={Corporate} title="Slack Connect"/>
<SidebarOptions More Icon={MoreVertRoundedIcon}  title="More"/>
<hr/>
<SidebarOptions Icon={ArrowDropDownRoundedIcon} title="Channels"/>
<SidebarOptions addChanneloptions title="Add channel"/>

{channels?.docs.map((doc) => (
	<SidebarOptions
	key={doc.id}
	id={doc.id}
	
	title={doc.data().name}
	
	></SidebarOptions>
))}

<SidebarOptions  Icon={ArrowDropDownRoundedIcon} title="Direct messages"/>
<SidebarOptions Icon={AccountBoxOutlinedIcon} title={user.displayName}/>


	</SidebarContainer>
  )
}

export default Sidebar


const SidebarContainer = styled.div`
	color: white;
	background-color:black;
	/* background-color: rgb(63,14,64); */
	flex:0.2;
	max-width: 260px;
	margin-top: 45px;
	/* height: max-content; */

	hr{
 border-bottom: 0px solid rgb(93,61,94);
 margin-top: 10px ;
}

`
const SidebarHeader = styled.div`
display: flex;

.MuiSvgIcon-root{
	border: 1px solid white;
	background-color: white;
	border-radius: 50px;
	color:rgb(63,14,64);
	border-width: 4px;
	align-items: center;
	position: relative;
left:50px;
	
	


}
h3{
	display: flex;
	padding-left: 10px;
	align-items: center;
	padding-right: 20px;
:hover{
		background-color: rgb(93,61,94);
		border-radius: 6px;
		
}

}

p{
	/* border: 1px solid white;
	border-radius: 6px;
	height: 30px; */

	font-weight: 10;
	font-size: 15px;
	
	
	margin-left: 2px;
	margin-right: 2px;
	align-items: center;
	justify-items: center;


}

`
const SidebarInfo = styled.div`
display:flex;
align-items: center;


border-bottom: 1px solid grey;

width: 100%;

padding: 8px;


`


