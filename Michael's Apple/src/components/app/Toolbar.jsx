import { mdiApple, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

const Toolbar = () => {
  const links = ["Mac", "iPad", "iPhone", "Music", "Support", "Where to Buy"];

  return (
    <div className="fixed top-0 w-full py-4 text-zinc-400 bg-black/80 backdrop-blur-xl z-30">
      <ul className=" max-w-5xl mx-auto w-full flex justify-between items-center">
        <li>
          <Icon path={mdiApple} className="h-5 w-5 text-zinc-200 hover:text-zinc-100 transition cursor-pointer"></Icon>
        </li>
        {links.map((link) => (
          <li className="w-32 text-center text-xs hover:text-zinc-300 transition cursor-pointer" key={link}>{link}</li>
        ))}
        <li>
          <Icon path={mdiMagnify} className="h-5 w-5 hover:text-zinc-300 transition cursor-pointer"></Icon>
        </li>
      </ul>
    </div>
  );
};

export default Toolbar;
