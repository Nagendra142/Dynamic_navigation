import React from 'react';
import {useParams} from 'react-router-dom';
import {usersData} from './users-data';

export const UsersDetail=()=>{

    const {Id}=useParams(); //Id const must be same as what we mention in App file Route ''/User/:Id''
    //It takes the id of the clicked link
    console.log("useProps",Id);
    const Obj=usersData.find((child)=> child.id==Id
    )
   

    return(
        <div>
            <h3>Nagendra</h3>
            <h3>{Obj.name}</h3>
        
    </div>
    
    )
    
    

 


}




