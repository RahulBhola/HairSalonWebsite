import React from 'react'
import { spaData } from './data';
import Card from './Card';

const Spa = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 pt-20">
            {spaData.map((item) => (
            <Card
                item={item}
                key={item.id}
            />
            ))}
        </div>
    </div>
  )
}

export default Spa;
