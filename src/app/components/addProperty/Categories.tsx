import Image from "next/image";

interface ICategoryProps {
  categoryData: string;
  setCategory: (category: string) => void;
}
const Categories: React.FC<ICategoryProps> = ({
  categoryData,
  setCategory,
}) => {
  return (
    <>
      <div className="flex items-center space-x-12 pt-3 pb-6 cursor-pointer justify-center">
        <div
          onClick={() => setCategory("Beach")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${categoryData == "Beach"? "border-gray-800":"border-white"}  hover:border-gray-200 opacity-60 hover:opacity-100 `}
        >
          <Image
            src={"/icn_category_beach.jpeg"}
            alt="Beach - Category"
            width={20}
            height={20}
          />
          <span className="text-xs">Beach</span>
        </div>

        <div
          onClick={() => setCategory("Villas")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${categoryData == "Villas"? "border-gray-800":"border-white"}  hover:border-gray-200 opacity-60 hover:opacity-100 `}
        >
          <Image
            src={"/icn_category_beach.jpeg"}
            alt="Beach - Category"
            width={20}
            height={20}
          />
          <span className="text-xs">Villas</span>
        </div>

        <div
          onClick={() => setCategory("Cabins")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${categoryData == "Cabins"? "border-gray-800":"border-white"}  hover:border-gray-200 opacity-60 hover:opacity-100 `}
        >
          <Image
            src={"/icn_category_beach.jpeg"}
            alt="Beach - Category"
            width={20}
            height={20}
          />
          <span className="text-xs">Cabins</span>
        </div>

        <div
          onClick={() => setCategory("Tiny Homes")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${categoryData == "Tiny Homes"? "border-gray-800":"border-white"}  hover:border-gray-200 opacity-60 hover:opacity-100 `}
        >
          <Image
            src={"/icn_category_beach.jpeg"}
            alt="Beach - Category"
            width={20}
            height={20}
          />
          <span className="text-xs">Tiny Homes</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
