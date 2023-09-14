import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-gray-300 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        {/* first column- heading + text + social media icons */}
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I'm <span className="text-emerald-600">Saman</span>
          </h1>
          {/* text-slate-700 is the text of the color */}
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full-Stack Web Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalized tracking-wide">
            Turning Ideas Into Interactive Reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/samandeveloper">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/saman-m-mohaghegh/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        {/* second column-image */}
        {/* by default we have hide the column in the small screen (hidden) and then in the medium size screen we show the column (block) */}
        <article className="hidden md:block">
          {/* in small screen the height is 80 and then in the large screen we increase it to 96 */}
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
