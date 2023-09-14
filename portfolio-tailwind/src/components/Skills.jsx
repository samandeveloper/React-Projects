//for the skills section and it includes SectionTitle and SkillsCard compoentns
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="Skills" />
      {/* we have a div that is the parent of every skill. In the small screen (default in tailwind- we use grid) we have one column and in medium screens we have 2 columns and for large screens we have 3 columns.   */}
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
