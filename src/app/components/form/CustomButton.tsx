import React from "react";

interface CustomButtonProps {
  label: string;
  className?:string
  onClick?: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick , className}) => {
  return (
    <div
      onClick={onClick}
      className={`py-4 bg-[#ff385c] hover:bg-[#d50027] cursor-pointer transition text-white rounded-xl text-center ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
