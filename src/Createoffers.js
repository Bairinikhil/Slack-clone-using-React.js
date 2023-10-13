import React, { useState } from 'react'
import styled from 'styled-components'
import PaidIcon from '@mui/icons-material/Paid';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { MyLocation } from '@mui/icons-material';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

function Createoffers() {


	const [product ,setProduct] =useState("")
	const [price, setPrice] = useState("")
	const [MRP,setMRP] = useState("")
	const [Loaction,setLocation] = useState("")
	const [expiryDate, setExpiryDate] = useState("")

const handleoffer =(e)=>{
	e.preventDefault()
	console.log(product,price,MRP,Loaction,expiryDate)


}


  return (
	<CreateOfferscontainer>
		<h3>Create somthing people want</h3>

		<form onSubmit={handleoffer}>

			<label>Product</label>
			<input value={product} onChange={(e)=>setProduct(e.target.value)} type="text" />
			<label><PaidIcon/>Price </label>
			<PriceContainer>
			    <input value={price}  onChange={(e)=>setPrice(e.target.value)} type="number"/>
				<input value={MRP}  onChange={(e)=>setMRP(e.target.value)} placeholder='MRP :' type="number" />

			</PriceContainer>
			<label><MyLocationIcon/> Loaction</label>
			<input  value={Loaction}  onChange={(e)=>setLocation(e.target.value)}/>
			<label><HourglassTopIcon/>Expiry Date</label>
			<input value={expiryDate}  onChange={(e)=>setExpiryDate(e.target.value)} />


			<button onClick={handleoffer} >Send</button>
		</form>

	</CreateOfferscontainer>
  )
}

export default Createoffers

const CreateOfferscontainer = styled.div`
flex: 0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;
font-family:sans serif;
h3{
	font-family:poppins;
	font-weight:200;
}
form{
	display:flex;
	flex-direction:column;


}
input{
	display: flex;
	width:350px;
	margin-left:auto;
	margin-right:auto;
	height:40px;
	border: 2px solid black;
	border-radius:10px;
	outline: none;

}
label{
	display: flex;
	margin-left: 380px;
	font-family:poppins;
	padding: 5px;

	
}
`
const PriceContainer = styled.div`
display: flex;
width:100px;
margin-left:380px;
input{
	width:550px;

}

`