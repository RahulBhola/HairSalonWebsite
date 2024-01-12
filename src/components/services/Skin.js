import React from 'react'
import { skinData } from './data';
import Card from './Card';

const Skin = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 pt-20">
            {skinData.map((item) => (
            <Card
                item={item}
                key={item.id}
            />
            ))}
        </div>
    </div>
  )
}

export default Skin;
