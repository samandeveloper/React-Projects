import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = ({ toggle }) => {
  return (
    <section id="about" className={`py-20 ${toggle ? "bg-black" : "bg-white"}`}>
      <div className="text-slate-700 align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            A passionate Web Developer with 3 years of experience, I am
            dedicated to constantly expanding my knowledge and skills in the
            ever-evolving realm of web-based technologies. With a strong
            enthusiasm for the newest trends in the industry, I embrace the
            opportunity to work with new tools and technologies. Currently,
            seeking a new experience in Full-Stack Web Development, I am eager
            to contribute my expertise and collaborate on projects that push the
            boundaries of innovation.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
