"use client";
import React, { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

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
    const url: string = "http://localhost:8000/api/properties";
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("json:", json);
        setProperties(json.data);
      })
      .catch((error) => console.log("error", error));
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
