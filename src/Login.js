import React from 'react'
import styled from 'styled-components'
// import { auth, provider } from './firebase'
import image from './slack.png'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth()
const provider = new GoogleAuthProvider()

function Login() {

  const signIn =(e)=>{
    e.preventDefault()
    console.log('hello world')
    signInWithPopup(auth, provider)
  }
  return (
	<LoginContainer>
    <img src={image} alt='logo' />
    <h5>First of all,enter your email address</h5>
    <h3>We suggest using the email address that you use at work</h3>
    <button onClick={signIn} >Continue</button>
  </LoginContainer>
  )
}

export default Login
const LoginContainer = styled.div`
padding: 32px;
img{
  height:55px;
  padding: 5px;
}
h5{
  font-size: 40px; 
  padding: 15px;
}
h3{
  font-weight: 500;
  padding-bottom: 10px;
  color:grey;
}
button{
  height:41.5px;
  width: 400px;
  background-color: rgb(97,31,105);
  border: none;
  font-size: 20px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  
}
`
