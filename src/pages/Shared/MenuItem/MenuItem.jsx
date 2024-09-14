import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price , recipe } = item; 
    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius:'0 190px 200px 190px'}} className='w-[120px]' src={image} alt="Food Card" />
            <div>
                <h3 className='uppercase'>{name} ----------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400' >{price}</p>
        </div>
    );
};

export default MenuItem;