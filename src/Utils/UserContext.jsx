import { createContext } from "react";

const UserContext = createContext({
    user:{
        name : "Heman",
        email : "baba@yahoo.in"
    }
})

    


export default  UserContext;