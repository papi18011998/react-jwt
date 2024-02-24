import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    
    const navigate = useNavigate();
     
    const edit = (id)=>{
        navigate(`/admin/user/edit/${id}`)
    }
    return (
        <div className='user'>
            <button className='btn btn-outline-primary' onClick={()=>{edit(4)}} > Modification</button>
        </div>
    );
};

export default User;