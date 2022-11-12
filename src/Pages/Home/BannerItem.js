import React from 'react';
import Banner from './Banner';




const bannerData = [
    {
        image: 'https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: 'https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: 'https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: 'https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 5,
        id: 6,
        next: 1
    }
]
const BannerItem = () => {
    return (
        <div className="carousel w-full max-w-screen-xl mx-auto">
        {
            bannerData.map(slide => <Banner key={slide.id} slide ={slide}></Banner>)
        }
    </div>
    );
};

export default BannerItem;