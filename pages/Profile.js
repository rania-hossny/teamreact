import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';
import photo from "../pietra-schwarzler-FqdfVIdgR98-unsplash.jpg";
import Cardprofile from "../components/Cardprofile"


const Profile = () => {
    const [state,setState]=useState([
        {
            name:"Rania",
            email:"Rania@yahoo.com",
            address:"Lorem ipsum dolor sit amet consectetur",
            specialist:"Front-end "
        }
    ])

    const editstate=(data)=>{
        setState(data);
        return state;
        // console.log(state);
    }

    const nameshandler=()=>{
        return state;
    }
    
    return (
        <div>
            <Cardprofile nameslist={nameshandler()} editstate={editstate}/>
        </div>
    )
}

export default Profile;

