import React from 'react'

const ReservationSideBar = () => {
  return (
    <aside className="mt-6 p-6 border border-gray-400 col-span-2 rounded-xl shadow-2xl ">
      <h2 className="mb-6 text-2xl">$200 per night</h2>
      <div className="p-3 mb-6 border border-gray-400 rounded-xl">
        <label className='mb-2 block font-semibold text-sm'>Guests</label>
       <select className="w-full -ml-1 text-xm ">
        <option >1</option>
        <option >2</option>
        <option >3</option>
        <option >4</option>

       </select>
      </div>
      <div className='mb-6 py-2 rounded-xl text-white bg-[#ff385c] text-center cursor-pointer hover:bg-[#d50027]'>Book</div>
      <div className='mb-4 flex justify-between items-center'>
        <p>$200 * 4 nights</p>
        <p>$800</p>
      </div>
      <hr className="opacity-50 bg-gray-500"/>
      <div className='mt-4 flex justify-between items-center font-bold'>
        <p>Total</p>
        <p>$800</p>
      </div>
    </aside>
  )
}

export default ReservationSideBar
