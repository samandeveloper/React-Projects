//this file is related to the last section of the web page (featured projects)
import ProjectCard from "./ProjectCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="Featured Projects" />
      {/* Note: in the Projects.jsx, we have a grid in the small screen then in the large screen we have 2 columns and in the extra large screen we want to have 3 columns. Als0, gap-8 means add the gap for the columns and the rows.  */}
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />; 
        })}
      </div>
      {/* button */}
      <div className="flex items-center justify-center py-10">
        <a
          className="bg-emerald-600 rounded-md text-slate-300 hover:text-black duration-300 align-element p-4 font-medium flex items-center justify-center"
          href="https://samanmohaghegh.online/#portfolio"
        >
          See All Project
        </a>
      </div>
      ;
    </section>
  );
};
export default Projects;
