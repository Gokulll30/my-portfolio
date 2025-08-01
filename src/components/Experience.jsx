import React from 'react';

const experiences = [
  {
    role: "Cloud Optimization Intern",
    company: "Dsignz Media, Coimbatore",
    date: "Oct 2024 – Present",
    desc: "Optimized AWS cloud costs using Cost Explorer, budgets, and tagging. Automated reporting using Boto3 and Lambda.",
    tech: "AWS, Python (Boto3), Lambda"
  },
  {
    role: "AI/ML Intern",
    company: "Samsung R&D Institute, Bangalore",
    date: "May 2024 – Feb 2025",
    desc: "Built a Webpage Article Detection system with 95%+ accuracy using NLP & ML models.",
    tech: "Python, Scikit-learn, BeautifulSoup, NLP (SpaCy/NLTK)"
  },
  {
    role: "IoT Intern",
    company: "Intel®",
    date: "May 2024 – Jul 2024",
    desc: "Simulated GPS-based toll system using Python and Geopy. Achieved 90%+ accuracy.",
    tech: "Python, Pandas, Geopy, Matplotlib"
  }
];

const Experience = () => (
  <section id="experience" className="p-8 bg-gray-50">
    <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>
    <div className="space-y-6 max-w-4xl mx-auto">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{exp.role} – <span className="text-gray-600">{exp.company}</span></h3>
          <p className="text-sm text-gray-500 mb-2">{exp.date}</p>
          <p>{exp.desc}</p>
          <p className="text-sm text-gray-700 mt-1"><strong>Tech:</strong> {exp.tech}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
