import React,{useContext} from 'react'
import userContext from '../Context/Usercontext'

function Profile() {
  const {user} = useContext(userContext);
 if(!user){
  return <div>Login please!</div>
 }
 return <div>Welcum {user.Username}</div>
}

export default Profile