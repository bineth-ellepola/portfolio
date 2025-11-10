import React from "react";

const Skills = () => {
  const skills = ["Java", "React.js", "Spring Boot", "Kotlin", "MySQL", "Git"];

  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-500 text-white px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
