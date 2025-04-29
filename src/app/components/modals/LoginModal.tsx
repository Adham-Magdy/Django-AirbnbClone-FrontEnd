"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import React, { useState } from "react";
import Modals from "./Modals";
import CustomButton from "../form/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/action";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();

  const loginModalState = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<string[]>([]);
  const url_api= "http://127.0.0.1:8000/api/auth/login/"

  const submitData = async()=>{
    const formData = {
      email:email,
      password:password
    }

    const response = await apiService.post(url_api,JSON.stringify(formData));

    if(response.access){
       handleLogin(response.user.pk,response.refresh,response.access);
      loginModalState.close();
      router.push('/')
    }else{
      setErrors(response.non_field_errors)
    }
  }

  const content = (
    <>
      <form action={submitData} className="space-y-4">
        <input
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
          placeholder="Your e-mail address"
          type="email"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
        />
        <input
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}
          placeholder="Your password"
          type="password"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
        />
      {
        errors.map((error,index)=>{
          return(
            <div
            key={`error_${index}`}
            className="p-5 bg-[#ff385c] text-whit rounded-xl opacity-80"
          >
            {error}
          </div>
          )
        })
      }
        <CustomButton label="Submit" onClick={submitData}/>
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
