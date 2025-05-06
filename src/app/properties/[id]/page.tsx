import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import apiService from "@/app/services/apiService";
import Image from "next/image";

interface Props {
  params: { id: string }
}
const PropertyDetailPage = async({ params }: Props) => {
  const property = await apiService.get(`http://localhost:8000/api/properties/${params.id}`);
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
          <h1 className="mb-4 text-4xl">{property.title}</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} guests - {property.bedrooms} bedrooms - {property.bathrooms} bathroom
          </span>
          <hr className="opacity-75 bg-gray-400" />
          <div className="py-6 flex items-center space-x-4">
           {
            property.landlord.avatar_url &&(
              <Image
              src={property.landlord.avatar_url}
              alt="profile picture"
              className="rounded-full"
              width={50}
              height={50}
            />
            )
           }
            <p>
              {" "}
              <strong>{property.landlord.name}</strong> is your host
            </p>
          </div>
          <hr className="opacity-50 bg-gray-500" />
          <p className="mt-6 text-lg">
            {property.description}
          </p>
        </div>
        <div>
          <ReservationSideBar property={property}/>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetailPage;
