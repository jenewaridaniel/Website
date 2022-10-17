import { getImg } from "../../functions/getImg";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Grid = () => {
  const products = [
    {
      title: 'MacBook Pro 13"',
      header: "Supercharged by",
      m2: true,
      dark: true,
      src: "mac.jpg",
    },
    {
      title: 'iPad Air"',
      header: "Light. Bright. Full of might",
      m2: false,
      dark: true,
      src: "ipads.png",
    },
    {
      title: "iPad Mini",
      header: "Mega power. Mini sized",
      m2: false,
      dark: false,
      src: "ipad.png",
    },
    {
      title: "iPhone SE",
      header: "Love the power. Love the price",
      m2: false,
      dark: false,
      src: "se.png",
    },
  ];
  return (
    <div className="p-4 pt-24 bg-zinc-50 grid gap-4 grid-cols-2">
      {products.map((product) => (
        <div
          className={`flex flex-col h-[90vh] p-20 justify-center gap-4 cursor-pointer ${
            product.dark ? "bg-black text-zinc-200 " : "text-black"
          }`}
        >
          <div className=" text-center ">
            <h1 className="text-5xl font-semibold">{product.title}</h1>
            <h2 className="text-3xl font-medium my-4">
              {product.header}{" "}
              {product.m2 && (
                <img
                  src={getImg("../assets/img/m2dark.jpg")}
                  className="inline h-12 w-12"
                  alt="The M2 Chip"
                />
              )}
            </h2>
            <h3 className="text-xl text-blue-400 hover:underline">
              Learn more
              <ChevronRightIcon className="h-6 w-6 inline"></ChevronRightIcon>
            </h3>
          </div>
          <img
            src={getImg(`../assets/img/${product.src}`)}
            alt=""
            className=" h-3/4 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;
