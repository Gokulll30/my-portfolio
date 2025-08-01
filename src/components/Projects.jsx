const projects = [
  {
    title: "Webpage Article Detection (Samsung R&D)",
    desc: "AI/ML model for article extraction with 95%+ accuracy.",
    tech: "Python, BART, Sklearn, BeautifulSoup",
    link: "https://github.com/Gokulll30/FACIAL-RECOGNITION"
  },
  {
    title: "Smart Attendance System",
    desc: "Facial recognition for attendance logging (98.5% accuracy)",
    tech: "FaceNet, Flutter, Flask",
  },
  {
    title: "VR Military Simulation",
    desc: "Real-time military training system using VR and Unity.",
    tech: "Unity 3D, C#, Python",
    link: "https://github.com/Gokulll30/VR-Military-simulation"
  }
];

const Projects = () => (
  <section className="p-8">
    <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-4">
      {projects.map((p, i) => (
        <div key={i} className="p-4 shadow rounded bg-white">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p>{p.desc}</p>
          <p className="text-sm text-gray-600 mt-1">Tech: {p.tech}</p>
          {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm">GitHub</a>}
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
