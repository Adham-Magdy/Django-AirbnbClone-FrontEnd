'use client';
import useLoginModal from "@/app/hooks/useLoginModal";
import React from "react";
import Modals from "./Modals";
import CustomButton from "../form/CustomButton";

const LoginModal = () => {
  const loginModalState = useLoginModal();

  const content = (
    <>
    <form className="space-y-4">
      <input placeholder="Your e-mail address" type="email" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>
      <input placeholder="Your password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>
      <div className="p-5 bg-[#ff385c] text-whit rounded-xl opacity-80">error message</div>
      <CustomButton
      label="Submit"
      />
    </form>
    </>
  );
  return (
    <Modals
    isOpen={loginModalState.isOpen}
    close={loginModalState.close}
    label="Login"
    content={content}
    
    />
  );
};

export default LoginModal;
