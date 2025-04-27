import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import Image from "next/image";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden relative rounded-xl">
        <Image
          fill
          src={"/beach_1.jpg"}
          className="w-full h-full object-cover"
          alt="beach"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>
          <hr className="opacity-75 bg-gray-400" />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src={"/profile_pic_1.jpg"}
              alt="profile picture"
              className="rounded-full"
              width={50}
              height={50}
            />
            <p>
              {" "}
              <strong>Adham Magdy</strong> is your host
            </p>
          </div>
          <hr className="opacity-50 bg-gray-500" />
          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam
            itaque qui maiores repellat at cumque nobis rerum illum, modi eum,
            sunt, possimus illo exercitationem eveniet quis laboriosam commodi
            dignissimos?
          </p>
        </div>
        <div>
          <ReservationSideBar/>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetailPage;
