import React from "react";

const Projects = () => {
  const projects = [
    { name: "Inventory System", link: "https://github.com/bineth-ellepola/inventory" },
    { name: "Wellness Mobile App", link: "https://github.com/bineth-ellepola/wellness" },
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid gap-4">
        {projects.map((p) => (
          <div key={p.name} className="border p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-500">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
