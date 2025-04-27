'use client';

import useSignupModal from '@/app/hooks/useSignupModal';
import React from 'react'
import CustomButton from '../form/CustomButton';
import Modals from './Modals';

const SignupModal = () => {
    const signUpModal = useSignupModal();
    
    const content=(
        <>
    <form className="space-y-4">
      <input placeholder="Your e-mail address" type="email" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>
      <input placeholder="Your password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>
      <input placeholder="Repeat your password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>

      <div className="p-5 bg-[#ff385c] text-whit rounded-xl opacity-80">error message</div>
      <CustomButton
      label="SignUp"
      />
    </form>
    </>
  );
  return (
    <Modals
    isOpen={signUpModal.isOpen}
    close={signUpModal.close}
    label='SignUp'
    content={content}
    />
  );
}

export default SignupModal
