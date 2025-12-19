import ProjectCard from "../components/projectcard";

function Projects() {
  const projects = [
    {
      title: "Website Portofolio",
      description: "Portofolio pribadi berbasis React dan Vite",
    },
    {
      title: "deisgn ui/ux go tourist",
      description: "Aplikasi touring untuk mempromosikan destinasi wisata",
    },
    {
      title: "Ruang kreasi",
      description: "website ruang kreasi untuk belajar design ui/ux",
    },
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
