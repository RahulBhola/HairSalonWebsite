import React from 'react'
import { makeupData } from './data';
import Card from './Card';

const Makeup = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 pt-20 ">
            {makeupData.map((item) => (
            <Card
                item={item}
                key={item.id}
            />
            ))}
        </div>
    </div>
  )
}

export default Makeup;
