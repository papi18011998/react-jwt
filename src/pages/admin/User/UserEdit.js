import React from 'react';
import { useParams } from 'react-router-dom';

const UserEdit = () => {
    const params = useParams()
    return (
        <div className='user-ed  it'>
            Modifier un user l'utilisateur n {params.uid}
        </div>
    );
};

export default UserEdit;