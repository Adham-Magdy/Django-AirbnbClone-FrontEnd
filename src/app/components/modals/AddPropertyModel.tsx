"use client";
import usePropertyModel from "@/app/hooks/usePropertyModel";
import React, { useState } from "react";
import Modals from "./Modals";
import CustomButton from "../form/CustomButton";

const AddPropertyModel = () => {
  const addPropertyModel = usePropertyModel();
  const [currentStep, setCurrentStep] = useState(1);

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose Category</h2>
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : (
        <>
          <p>Step 2</p>
        </>
      )}
    </>
  );
  console.log(currentStep);

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
