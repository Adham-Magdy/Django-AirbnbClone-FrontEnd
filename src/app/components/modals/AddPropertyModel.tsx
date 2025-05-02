'use client';
import usePropertyModel from '@/app/hooks/usePropertyModel';
import React from 'react'
import Modals from './Modals';

const AddPropertyModel = () => {

    const addPropertyModel = usePropertyModel();
  return (
    <>
      <Modals
      isOpen={addPropertyModel.isOpen}
      close={addPropertyModel.close}
      label='Add Property'
      content={<div>Yoo</div>}
      
      />
    </>
  )
}

export default AddPropertyModel
