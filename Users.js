import {usersData} from "./users-data";
import { NavLink } from "react-router-dom";


export const Users=()=>{
    return(
        
            <>{
            usersData.map(child=>{  
               

                return (
                    <li key={child.id}>
                    <NavLink to={`/Users/${child.id}`} >
                    
                    <h3>{child.name}</h3>
                    <h3>{child.email}</h3>
                    
                    </NavLink>
                    </li>
                )
            })
           
        }</>  
        
    )
}