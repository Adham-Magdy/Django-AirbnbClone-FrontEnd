import React from 'react'
import PropertyList from '../components/properties/PropertyList'

const myPropertiesPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-6 mb-4 text-2xl">My Properties</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
               <PropertyList/>
            </div>
      </main>
  )
}

export default myPropertiesPage
