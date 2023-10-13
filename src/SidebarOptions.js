import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'
import { collection, addDoc } from './firebase';
import TagIcon from '@mui/icons-material/Tag';
import { useDispatch } from 'react-redux';
import { enterRoom } from './features/appSlice';
import { Navigate, useNavigate } from 'react-router-dom';


function SidebarOptions({Icon, title, addChanneloptions,id,}) {
  const dispatch = useDispatch()
  let navigate = useNavigate()
	

	const addchannel = ()=>{
		const channelName = prompt("please enter the channel name")

		if(channelName) {
			 addDoc(collection(db, 'rooms'), { name: channelName });
			//  console.log('db object:', db);
			// db.collection("rooms").add ({
			// 	name: channelName,
			// })
		}
	}


	const selectChannel = ()=>{
		if(id) {
			dispatch(enterRoom({
				roomId: id,
			}))
			
		}
	}

	
	return (

	<SidebarOptionsContainer
	onClick={addChanneloptions ? addchannel : selectChannel}
	>
		{Icon && <Icon  style={{padding:5}} />}

			{Icon ? (
				<h3>{title}</h3>
			):(
				<SidebarOptionsChannel onClick={() => {navigate('/')}} >
				
					<TagIcon/>{title}
				</SidebarOptionsChannel>
			) }
	</SidebarOptionsContainer>
  )
}

export default SidebarOptions

const SidebarOptionsContainer = styled.div`
display: flex;
align-items: center;
font-size: 13px;
color: rgb(190,173,190);
margin-left: 10px;
margin-top: 8px;
margin-right: 10px;

:hover{
	background-color: rgb(93,61,94);
	
	border-radius: 10px;

	
}
.MuiSvgIcon-root{

	font-size: 18px;

}
h3{
	font-weight: 3.0;
}
`

const SidebarOptionsChannel = styled.div`
display:flex;
padding: 5px 3px;
.MuiSvgIcon-root{
	padding: 0 5px;
}
`