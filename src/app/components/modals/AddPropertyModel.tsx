"use client";
import usePropertyModel from "@/app/hooks/usePropertyModel";
import React, { useState } from "react";
import Modals from "./Modals";
import CustomButton from "../form/CustomButton";
import Categories from "../addProperty/Categories";

const AddPropertyModel = () => {
  const addPropertyModel = usePropertyModel();
  const [currentStep, setCurrentStep] = useState(1);
  const [categoryData, setCategoryData] = useState("");

  const setCategory = (category: string) => {
    setCategoryData(category);
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
          <CustomButton label="Previous" className="mb-2 bg-black hover:bg-gray-800" onClick={() => setCurrentStep(1)} />

          <CustomButton label="Next" onClick={() => setCurrentStep(3)} />

        </>
      ) : (
        <>
          <h2 className="mb-6 text-2xl">Final</h2>
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
