import React, { useState } from "react";
import userContext from "./Usercontext";

const UsercontextProvider=({children})=>{
    const [user,Setuser] = useState(null);
     return(
       <userContext.Provider value={{user,Setuser}}>
       {children}
       </userContext.Provider>
     );
}
export default UsercontextProvider;