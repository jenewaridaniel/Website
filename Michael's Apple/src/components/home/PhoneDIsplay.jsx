import { getImg } from "../../functions/getImg";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const PhoneDisplay = ({ phone }) => {
  const { phoneName, header, src, pro } = phone;

  return (
    <div
      className={`h-[90vh] flex flex-col justify-between cursor-pointer text-zinc-200 items-center pt-24 ${
        pro ? "bg-black text-zinc-200 " : "bg-zinc-50 text-black"
      }`}
    >
      <div className=" text-center">
        <h1 className="text-6xl font-semibold">{phoneName}</h1>
        <h2 className="text-3xl font-medium my-4">{header}</h2>
        <h3 className="text-2xl text-blue-400 hover:underline">
          Learn more
          <ChevronRightIcon className="h-6 w-6 inline"></ChevronRightIcon>
        </h3>
      </div>
      <img
        src={getImg(src)}
        className={`object-contain ${pro ? "h-full " : "h-3/5"}`}
        alt=""
      />
    </div>
  );
};

export default PhoneDisplay;
