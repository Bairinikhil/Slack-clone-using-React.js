import React from 'react';
import { useNavigate as navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import './App.css';
import Header from './Header';
import Login from './Login';
import Chat from './Chat';
import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import img from './logo.png'
import Spinner from 'react-spinkit';
import Createoffers from './Createoffers';
import { useNavigate } from 'react-router-dom';

function App() {
 
const [user, loading] = useAuthState(auth)


if(loading){
  return(
    <AppLoading>
      <AppLoadingContainer>
        <img  src={img}/>
        <Spinner  style={{height:'30px'}} name='circle'  color="purple" />

      </AppLoadingContainer>

    </AppLoading>
  )
}
return (

    <div className="App">  
<BrowserRouter>
{!user? (
  <Login/>
):(
<>
    <Header/>
    <Appbody>

      <Sidebar/>
    
      <Routes>
        <Route path="/" element={<Chat/>}  />
        <Route path="/Create" element={<Createoffers/>} />
               
          {/* <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} /> */}
        
      </Routes>
          </Appbody>
      </>
)}
    </BrowserRouter>


  </div>

  );
}

export default App;


const AppLoading = styled.div`
display: grid;
place-items: center;
height: 80vh;
width: 100%;

`

const AppLoadingContainer = styled.div`
text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


img{
  height:80px;
  padding: 30px;
  margin-bottom: 40px;

}
`

const Appbody = styled.div`
      display: flex;
      height: 100vh;
`
// const SidebarT = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1>Navigation</h1>
//       <ul>
//         <li onClick={() => navigate('/')}>Chat</li>
//         <li onClick={() => navigate('/Create')}>Create Offer</li>
//       </ul>
//     </div>
//   );
// };
