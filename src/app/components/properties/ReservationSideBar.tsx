"use client";
import { differenceInDays } from "date-fns";
import React, { useEffect, useState } from "react";
import { Range } from "react-date-range";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};
type TProperty = {
  id: string;
  guests: number;
  price_per_night: number;
};

interface IReservationSideBar {
  userId: string | null;
  property: TProperty;
}

const ReservationSideBar: React.FC<IReservationSideBar> = ({
  property,
  userId,
}) => {
  // state initials
  const [fee, setFee] = useState<number>(0);
  const [nights, setNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState<string>("1");
  const guestsRange = Array.from(
    { length: property.guests },
    (_, index) => index + 1
  );

  useEffect(()=>{
    if(dateRange.startDate && dateRange.endDate){
      const dayCount = differenceInDays(
        dateRange.endDate,dateRange.startDate
      );
      if(dayCount && property.price_per_night){
        const __fee = ((dayCount * property.price_per_night)/100) * 5;
        setFee(__fee);
        setTotalPrice((dayCount * property.price_per_night)+__fee);
        setNights(dayCount);
      }
      else{
        const __fee = ((property.price_per_night)/100) * 5;
        setFee(__fee);
        setTotalPrice((property.price_per_night)+__fee);
        setNights(1);
      }
    }
  },[dateRange]);

  return (
    <aside className="mt-6 p-6 border border-gray-400 col-span-2 rounded-xl shadow-2xl ">
      <h2 className="mb-6 text-2xl">${property.price_per_night} per night</h2>
      <div className="p-3 mb-6 border border-gray-400 rounded-xl">
        <label className="mb-2 block font-semibold text-sm">Guests</label>
        <select onChange={(e)=> e.target.value} value={guests} className="w-full -ml-1 text-xm ">
          {
            guestsRange.map((index,number)=>(
              <option key={index} value={number}>{number}</option>
            ))
          }
          
        </select>
      </div>
      <div className="mb-6 py-2 rounded-xl text-white bg-[#ff385c] text-center cursor-pointer hover:bg-[#d50027]">
        Book
      </div>
      <div className="mb-4 flex justify-between items-center">
        <p>${property.price_per_night} * {nights} nights</p>
        <p>${property.price_per_night *nights}</p>
      </div>
      <div className="mb-4 flex justify-between items-center">
          <p>Django fee</p>
          <p>${fee}</p>
      </div>
      <hr className="opacity-50 bg-gray-500" />
      <div className="mt-4 flex justify-between items-center font-bold">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
    </aside>
  );
};

export default ReservationSideBar;
