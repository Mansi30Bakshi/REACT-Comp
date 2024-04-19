import UsercontextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App =()=>{
  return(
  <center>
  <UsercontextProvider>
    <h1>React with Coffee</h1>
    <Login/>
    <Profile/>
  </UsercontextProvider>
  </center>
  );
}
export default App;