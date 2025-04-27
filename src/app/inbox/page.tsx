import React from 'react'
import Conversations from '../components/inbox/Conversations'

const inboxPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <h1 className='my-6 text-2xl'>
        <Conversations/>
        <Conversations/>
        <Conversations/>
        <Conversations/>

      </h1>
    </main>
  )
}

export default inboxPage
