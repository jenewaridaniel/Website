import { getImg } from "../../functions/getImg";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
const Macs = () => {
  return (
    <div className="h-[90vh] flex justify-center cursor-pointer text-black items-center pt-24 bg-zinc-50 ">
      <div className=" text-center">
        <h1 className="text-6xl font-semibold">MacBook Air</h1>
        <h2 className="text-3xl font-medium my-4">
          Supercharged by{" "}
          <img
            src={getImg("../assets/img/m2.png")}
            className="inline h-12 w-12"
            alt="The M2 Chip"
          />
        </h2>
        <h3 className="text-2xl text-blue-400 hover:underline">
          Learn more
          <ChevronRightIcon className="h-6 w-6 inline"></ChevronRightIcon>
        </h3>
      </div>
      <img
        src={getImg("../assets/img/macs.png")}
        alt=""
        className=" h-full object-contain"
      />
    </div>
  );
};

export default Macs;
