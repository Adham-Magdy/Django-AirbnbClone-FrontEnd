"use client";

import useSignupModal from "@/app/hooks/useSignupModal";
import React, { useState } from "react";
import CustomButton from "../form/CustomButton";
import Modals from "./Modals";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";
import { handleLogin } from "@/app/lib/action";

const SignupModal = () => {
  // const router = useRouter();
  const signUpModal = useSignupModal();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [errors, setErrors] = useState<string[]>([]);

  // Submit functionality
  const submitUserSignUp= async()=>{
    const url_api= "http://127.0.0.1:8000/api/auth/register/"

    const formData = {
      name:"adham",
      email:email,
      password1:password1,
      password2:password2
    }
    const response = await apiService.post(url_api,JSON.stringify(formData));
    if(response.access){
      handleLogin(response.user.pk,response.refresh,response.access);
      signUpModal.close();
      router.push('/')
    }else{
      const tempErrors:string[] = Object.values(response).map((error)=>{
        return error;
      })

      setErrors(tempErrors);
    }
  }
  const content = (
    <>
      <form className="space-y-4">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Your e-mail address"
          type="email"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword1(e.target.value)
          }
          placeholder="Your password"
          type="password"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword2(e.target.value)
          }
          placeholder="Repeat your password"
          type="password"
          className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"
        />
        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-[#ff385c] text-whit rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}

        <CustomButton label="SignUp" onClick={submitUserSignUp} />
      </form>
    </>
  );
  return (
    <Modals
      isOpen={signUpModal.isOpen}
      close={signUpModal.close}
      label="SignUp"
      content={content}
    />
  );
};

export default SignupModal;
