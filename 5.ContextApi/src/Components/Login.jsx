import {React,useContext,useState} from 'react'
import userContext from '../Context/Usercontext'

function Login() {
  
  const [Username,setUsername] = useState("");
  const [Password,setPassword] = useState("");
  const {Setuser} = useContext(userContext);
  const HandleSubmit = (e) =>{
     e.preventDefault();
     Setuser({Username,Password});
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value ={Username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
      {"                     "}
      <input type="text" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      {"                     "}
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login