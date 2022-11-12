import React from 'react'
import styled from 'styled-components';
import robo from "../assets/robot.gif";
export default function Welcome({currentUser}) {
    // const [currentUserName, setCurrentUserName] = useState(undefined);
    // useEffect(() => {
    //     setCurrentUserName(currentUser.username);
      
    // }, [])
    
    return (
    <Container>
      <img src={robo} alt="Robot" />

      <h1>Welcome      <span>{currentUser.username}!</span> </h1>
      <h3>Please select a chat to start Messaging</h3>
    </Container>
  )
}

const Container=styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
flex-direction:column ;
color:white ;

span{
    color:#4e00ff
}
`