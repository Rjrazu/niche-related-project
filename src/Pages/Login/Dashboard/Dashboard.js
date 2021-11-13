import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Admin from '../../Shared/Admin/Admin';
import GeneralUser from '../../Shared/GeneralUser/GeneralUser';

const Dashboard = () => {
    const { admin } = useAuth()
    return (
        <div>
            {admin ? <Admin></Admin> : <GeneralUser></GeneralUser>}
        </div>
    );
};

export default Dashboard;