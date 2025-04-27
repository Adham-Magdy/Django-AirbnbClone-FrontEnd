import Image from 'next/image'
import React from 'react'
import { TProperty } from './PropertyList'

interface IPropertyProps{
  property:TProperty;
}
const PropertyListItem:React.FC<IPropertyProps> = ({property}) => {
  return (
    <div className='cursor-pointer'>
    <div className="relative overflow-hidden aspect-square rounded-xl">
      <Image
      fill
      src={"/beach_1.jpg"}
      alt="Beach Property"
      sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px , 780px"
      className='hover:scale-110 object-cover transition h-full w-full'
      />
     
    </div>
    <div className='mt-2'>
        <p className='text-lg font-bold'>{property.title}</p>
      </div>
      <div className='mt-2'>
        <p className='text-sm text-gray-500'><strong>{property.price_per_night}$</strong>per night</p>
      </div>
    </div>
    
  )
}

export default PropertyListItem
