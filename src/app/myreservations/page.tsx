import Image from "next/image";
import React from "react";

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-6 mb-4 text-2xl">My Reservations</h1>

      {/* Reservation form */}
      <div className="space-y-4">
        <div className="p-6  grid grid-cols-1  md:grid-cols-4 gap-4 border border-gray-300 shadow-md rounded-xl">
          <div className="grid-cols-1">
            <div className="relative overflow-hidden aspect-square  rounded-xl cursor-pointer">
              <Image
                fill
                src={"/beach_1.jpg"}
                alt="reservation pic"
                className="object-cover h-full w-full transition hover:scale-110"
              />
            </div>
          </div>

          <div className="grid-cols-1 md:grid-cols-3 space-y-2">
            <h1 className="text-xl">Property Name</h1>
            <p className="mb-2"> 
              <strong>Check in date: </strong>10/3/2025
            </p>
            <p className="mb-2">
              <strong>Check out date: </strong>25/3/2025
            </p>
            <p className="mb-2">
              <strong>Number of nights: </strong>4
            </p>
            <p className="mb-2">
              <strong>Total price </strong>$20
            </p>
            <div className="mt-6 py-4 px-6 bg-[#ff385c] text-white rounded-xl cursor-pointer hover:bg-[#d50027]  inline-block">
                Goto Property
            </div>
          </div>
        </div>

        {/* ------------------------------------- */}
        <div className="p-6  grid grid-cols-1  md:grid-cols-4 gap-4 border border-gray-300 shadow-md rounded-xl">
          <div className="grid-cols-1">
            <div className="relative overflow-hidden aspect-square  rounded-xl cursor-pointer">
              <Image
                fill
                src={"/beach_1.jpg"}
                alt="reservation pic"
                className="object-cover h-full w-full transition hover:scale-110"
              />
            </div>
          </div>

          <div className="grid-cols-1 md:grid-cols-3 space-y-2">
            <h1 className="text-xl">Property Name</h1>
            <p>
              <strong>Check in date: </strong>10/3/2025
            </p>
            <p>
              <strong>Check out date: </strong>25/3/2025
            </p>
            <p>
              <strong>Number of nights: </strong>4
            </p>
            <p>
              <strong>Total price </strong>$20
            </p>
          </div>
        </div>

        {/* ---------------------------------------- */}
        <div className="p-6  grid grid-cols-1  md:grid-cols-4 gap-4 border border-gray-300 shadow-md rounded-xl">
          <div className="grid-cols-1">
            <div className="relative overflow-hidden aspect-square  rounded-xl cursor-pointer">
              <Image
                fill
                src={"/beach_1.jpg"}
                alt="reservation pic"
                className="object-cover h-full w-full transition hover:scale-110"
              />
            </div>
          </div>

          <div className="grid-cols-1 md:grid-cols-3 space-y-2">
            <h1 className="text-xl">Property Name</h1>
            <p>
              <strong>Check in date: </strong>10/3/2025
            </p>
            <p>
              <strong>Check out date: </strong>25/3/2025
            </p>
            <p>
              <strong>Number of nights: </strong>4
            </p>
            <p>
              <strong>Total price </strong>$20
            </p>
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default MyReservationsPage;
