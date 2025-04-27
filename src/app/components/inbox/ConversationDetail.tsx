'use client';

import React from 'react'
import CustomButton from '../form/CustomButton'

const ConversationDetail = () => {
  return (
    <>
    <div className='max-h-[400px] flex flex-col overflow-auto space-y-4'>
    <div className='w-[80%] py-4 px-6 rounded-xl bg-gray-200'>
        <p className='text-gray-500 font-bold'>Adham</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sint, omnis maiores similique aperiam ducimus neque quo sit excepturi unde esse officiis? Cum ipsam provident nobis at magnam, beatae explicabo!</p>
    </div>
    <div className='w-[80%] py-4 px-6 ml-[20%] rounded-xl bg-blue-200'>
        <p className='text-gray-500 font-bold'>You</p>
        <p>Lorem ipsum dolor sit!</p>
    </div>
    </div>

    {/* Conversation Form */}
    <div className='py-4 px-6 flex border border-gray-300 rounded-xl space-x-3 mt-4'>
        <input type="text" placeholder='Type your message.....' className='w-full p-2 bg-gray-200 rounded-xl' />
        <CustomButton
        label={'Send'}
        onClick={()=> console.log("Clicked")}
        className='w-[100px]'
        />
    </div>
    </>
  )
}

export default ConversationDetail
