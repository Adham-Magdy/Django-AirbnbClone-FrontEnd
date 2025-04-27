"use client";
import React, { useCallback, useEffect, useState } from "react";

interface ModalsProps{
  label:string;
  content: React.ReactElement;
  close: ()=> void;
  isOpen:boolean;
}

const Modals: React.FC<ModalsProps> = ({label,content,isOpen,close}) => {
  const [showModal,setShowModal] = useState(isOpen);
useEffect(()=>{
  setShowModal(isOpen);
},[isOpen]);

const handleClose = useCallback(()=>{
  setShowModal(false);

  setTimeout(()=>{
    close();
  },300)
},[close])

  if(!isOpen){
    return null;
  }
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-black/60 z-50">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto mx-auto">
        <div
          className={`transition duration-600 h-full ${showModal ? `transform-y-0 opacity-100 `:`transform-y-full opacity-10 `}`}
        >
          <div className="w-full h-auto relative flex flex-col rounded-xl bg-white">
            <header className="h-[60px] flex items-center justify-center rounded-t border-b border-b-gray-300 relative p-6">
              <div
              onClick={handleClose}
              className="absolute left-3 p-3 hover:bg-gray-300 rounded-xl cursor-pointer ">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold">{label}</h2>
            </header>
            <section className="p-6">
              {content}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
