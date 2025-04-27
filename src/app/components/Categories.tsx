import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="pt-3 flex items-center space-x-12 pb-6 cursor-pointer">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100 ">
        <Image
          src={"/icn_category_beach.jpeg"}
          alt="Beach - Category"
          width={20}
          height={20}
        />
        <span className="text-xs">Beach</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100 ">
        <Image
          src={"/icn_category_beach.jpeg"}
          alt="Beach - Category"
          width={20}
          height={20}
        />
        <span className="text-xs">Villas</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100 ">
        <Image
          src={"/icn_category_beach.jpeg"}
          alt="Beach - Category"
          width={20}
          height={20}
        />
        <span className="text-xs">Cabins</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100 ">
        <Image
          src={"/icn_category_beach.jpeg"}
          alt="Beach - Category"
          width={20}
          height={20}
        />
        <span className="text-xs">Tiny Homes</span>
      </div>
    </div>
  );
};

export default Categories;
