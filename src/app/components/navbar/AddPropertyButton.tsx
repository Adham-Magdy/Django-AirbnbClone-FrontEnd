"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import usePropertyModel from "@/app/hooks/usePropertyModel";

interface IPropertyModel{
  userId:string | null;
}
const AddPropertyButton:React.FC<IPropertyModel> = ({userId}) => {
  const addPropertyModel = usePropertyModel();
  const logIn = useLoginModal();

  const addProperty = () => {
    // check if user logged in
    if(userId)
    {
    addPropertyModel.open();
    }
    // user not log in open log in form
    else{
      logIn.open();
    }
  };
  return (
    <>
      <div
        onClick={addProperty}
        className="p-2  cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200 ml-1"
      >
        Add Property
      </div>
    </>
  );
};

export default AddPropertyButton;
