"use client";
import usePropertyModel from "@/app/hooks/usePropertyModel";
import React, { ChangeEvent, useState } from "react";
import Modals from "./Modals";
import CustomButton from "../form/CustomButton";
import Categories from "../addProperty/Categories";
import SelectCountry, { TSelectCountryValue } from "../form/SelectCountry";
import Image from "next/image";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";

const AddPropertyModel = () => {
  // States
  const addPropertyModel = usePropertyModel();
  const [currentStep, setCurrentStep] = useState(1);
  const [categoryData, setCategoryData] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");

  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathroom, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<TSelectCountryValue>();
  const [dataImg, setDataImg] = useState<File | null>(null);
  const [errorData,setErrorData] = useState<string[]>([]);

  const router = useRouter();
  const setCategory = (category: string) => {
    setCategoryData(category);
  };

  const setImg = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const tempImg = event.target.files[0];
      setDataImg(tempImg);
    }
  };

  // submit Property Data

  const submitData = async () => {
    if (
      categoryData &&
      dataTitle &&
      dataDescription &&
      dataPrice &&
      dataBedrooms &&
      dataBathroom &&
      dataGuests &&
      dataCountry &&
      dataImg
    ) {
      const formData = new FormData();
      const url = "http://localhost:8000/api/properties/create/";
      formData.append("category", categoryData);
      formData.append("title", dataTitle);
      formData.append("description", dataDescription);
      formData.append("price_per_night", dataPrice);
      formData.append("bedrooms", dataBedrooms);
      formData.append("bathrooms", dataBathroom);
      formData.append("guests", dataGuests);
      formData.append("country", dataCountry.label);
      formData.append("country_code", dataCountry.value);
      formData.append("image", dataImg);

      // post data to api service
      const response = await apiService.postWithToken(url, formData);

      if (response.success) {
        console.log("Success");
        router.push("/");
        addPropertyModel.close();
      } else {
        const tempErrors:string[] = Object.values(response).map((error)=> error)
        setErrorData(tempErrors);
      
      }
    }
  };

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose Category</h2>
          <Categories
            categoryData={categoryData}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="mb-6 text-2xl">Describe your place</h2>

          {/* implement user form to insert property title and description */}
          <div className="pt-6 pb-4 space-y-4">
            {/* set Title */}
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-500 rounded-xl"
              />
            </div>
            {/* set Description */}
            <div className="flex flex-col space-y-2">
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full h-[200px] p-4 border border-gray-500 rounded-xl"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <CustomButton
              label="Previous"
              className="mb-2 bg-black hover:bg-gray-800 w-[100px]"
              onClick={() => setCurrentStep(1)}
            />

            <CustomButton
              label="Next"
              onClick={() => setCurrentStep(3)}
              className="w-[100px]"
            />
          </div>
        </>
      ) : currentStep == 3 ? (
        <>
          <h2 className="mb-6 text-2xl">Details</h2>
          {/* Price Data Input Field */}
          <div className="flex flex-col space-y-2">
            <label>Price per night</label>
            <input
              type="number"
              value={dataPrice}
              onChange={(e) => setDataPrice(e.target.value)}
              className="w-full p-4 border border-gray-500 rounded-xl"
            />
          </div>

          {/* Bedrooms Data Input Field */}
          <div className="flex flex-col space-y-2">
            <label>Bedrooms</label>
            <input
              type="number"
              value={dataBedrooms}
              onChange={(e) => setDataBedrooms(e.target.value)}
              className="w-full p-4 border border-gray-500 rounded-xl"
            />
          </div>
          {/* Bathrooms Data Input Field */}
          <div className="flex flex-col space-y-2">
            <label>Bathrooms</label>
            <input
              type="number"
              value={dataBathroom}
              onChange={(e) => setDataBathrooms(e.target.value)}
              className="w-full p-4 border border-gray-500 rounded-xl"
            />
          </div>

          {/* Guests Data input Field */}
          <div className="flex flex-col space-y-2">
            <label>Maximum number of guests</label>
            <input
              type="number"
              value={dataGuests}
              onChange={(e) => setDataGuests(e.target.value)}
              className="w-full p-4 border border-gray-500 rounded-xl"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <CustomButton
              label="Previous"
              className="mb-2 bg-black hover:bg-gray-800 w-[100px]"
              onClick={() => setCurrentStep(2)}
            />

            <CustomButton
              label="Next"
              onClick={() => setCurrentStep(4)}
              className="w-[100px]"
            />
          </div>
        </>
      ) : currentStep == 4 ? (
        <>
          <h2 className="mb-6 text-2xl">Location</h2>

          {/* Add Select Country Form */}
          <SelectCountry
            value={dataCountry}
            onChange={(value) => setDataCountry(value as TSelectCountryValue)}
          />

          <div className="flex items-center justify-between mt-2">
            <CustomButton
              label="Previous"
              className="mb-2 bg-black hover:bg-gray-800 w-[100px]"
              onClick={() => setCurrentStep(3)}
            />

            <CustomButton
              label="Next"
              onClick={() => setCurrentStep(5)}
              className="w-[100px]"
            />
          </div>
        </>
      ) : (
        <>
          {/* Images */}
          <h2 className="mb-6 text-2xl">Image</h2>
          <div className="flex flex-col space-y-2">
            <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
              <input type="file" accept="image/*" onChange={setImg} />
            </div>
            {/* Display images  */}
            {dataImg && (
              <div className="w-[200px] h-[150px] relative">
                <Image
                  fill
                  alt="Upload Image"
                  src={URL.createObjectURL(dataImg)}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            )}
          </div>
          {/* {
            errorData.map((error,index)=>(
              <div key={index} className="mb-6 p-4 bg-[#d50027] text-white rounded-xl opacity-80">
                {error}
              </div>
            ))
          } */}
          <div className="flex items-center justify-between mt-2">
            <CustomButton
              label="Previous"
              className="mb-2 bg-black hover:bg-gray-800 w-[100px]"
              onClick={() => setCurrentStep(4)}
            />

            <CustomButton
              onClick={() => submitData()}
              label="Submit"
              className="w-[100px]"
            />
          </div>
        </>
      )}
    </>
  );
  // console.log(currentStep);
  //console.log(categoryData);

  return (
    <>
      <Modals
        isOpen={addPropertyModel.isOpen}
        close={addPropertyModel.close}
        label="Add Property"
        content={content}
      />
    </>
  );
};

export default AddPropertyModel;
