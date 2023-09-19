//this is the navbar of the project + web Dev text
import { links } from "../data";

const Navbar = ({ handleClick, toggle }) => {
  return (
    <nav
      className={`flex items-center justify-between py-4 ${
        toggle ? "bg-black" : "bg-gray-300"
      }`}
    >
      <div className="align-element flex flex-col sm:flex-row sm:gap-x-16 sm:items-center py-2 sm:py-8">
        <h2 className="text-slate-700 text-3xl font-bold mt-4 sm:mt-0">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="text-slate-700 flex gap-x-3 mt-4 sm:mt-0">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            className="align-element bg-emerald-600 rounded-md text-slate-300 hover:text-black duration-300 align-element p-2 font-medium"
            onClick={handleClick}
          >
            Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
