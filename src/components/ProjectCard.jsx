function ProjectCard({ title, description }) {
  return (
    <div className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
      <h3 className="text-blue-600 font-semibold mb-2">
        {title}
      </h3>
      <p className="text-blue-500 text-sm">
        {description}
      </p>
    </div>
  );
}

export default ProjectCard;
