import { create } from "zustand";

interface IPropertyModelStore{
    isOpen:boolean;
    open:()=> void;
    close:()=> void;
}

const usePropertyModel = create<IPropertyModelStore>((set)=>({
    isOpen:false,
    open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false})

}));

export default usePropertyModel;