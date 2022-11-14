
import { useLoaderData } from 'react-router-dom';
import UpdateInfo from './UpdateInfo';

const UpdateItem = () => {
    const Items = useLoaderData();
    
    return (
       <div>
        {
            Items.map(ItemData => <UpdateInfo key = {ItemData._id} ItemData = {ItemData}></UpdateInfo>)
        }
       </div>
    );
};

export default UpdateItem;