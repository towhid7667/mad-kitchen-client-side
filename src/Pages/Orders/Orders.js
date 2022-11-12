import React, { useContext, useState } from 'react';
import { AuthContext } from './../../UserContext/ContextProvider';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    return (
        <div>
            
        </div>
    );
};

export default Orders;