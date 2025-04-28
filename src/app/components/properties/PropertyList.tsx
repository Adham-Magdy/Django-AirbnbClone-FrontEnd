"use client";
import React, { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type TProperty = {
  id: string,
  title:string,
  image_url:string,
  price_per_night:number
};
const PropertyList = () => {
  const [properties, setProperties] = useState<TProperty[]>([]);
  // get all properties from db using fetch API of backend
  const getProperties = async () => {
    const url_api= "http://localhost:8000/api/properties"
    const tempProperties = await apiService.get(url_api);
    setProperties(tempProperties.data);
  };

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <>
    {
      properties.map((property)=>(
        <PropertyListItem
        key={property.id}
        property={property}
        />
            ))
    }
    </>
  );
};

export default PropertyList;
