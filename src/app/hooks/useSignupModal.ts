import { create } from "zustand";

interface signUpModalStore{
    isOpen:boolean;
    open:()=> void;
    close: ()=> void;
}

const useSignupModal = create<signUpModalStore>((set)=>({
    isOpen:false,
    open:()=> set({isOpen:true}),
    close:()=>set({isOpen:false})
}));

export default useSignupModal;