const projects = [
{
  title: 'Dish & Dine - Restaurant Website',
  description: 'A full-stack restaurant website built using Flask, HTML, CSS, and SQLite. Integrated with an API to send reservation confirmation emails to users.',
  tech: ['Flask', 'HTML', 'CSS', 'SQLite', 'Email API'],
  link: 'https://restuarant-app-0gal.onrender.com', // Replace with actual link
},
  {
  title: 'Tickit - To-Do List App',
  description: 'A task management web app built using Flask, HTML, and CSS with user-friendly filters to organize tasks by category, priority, and completion status.',
  tech: ['HTML', 'CSS', 'Flask'],
  link: 'https://tickit-hn3n.onrender.com', // replace with your actual repo link
},
  {
    title: 'Chefify',
    description: 'A recipe app with over 100+ recipes organized in an user friendly way with search functionality.',
    tech: ['React.js','API','Tailwind CSS'],
    link: 'https://s-125.github.io/Chefify/',
  },
  {
  title: 'WordNest-Dictionary App',
  description: 'A one-stop destination for curious minds looking for a new word,synonyms or an example of a word.',
  tech: ['React.js','API'],
  link: 'https://s-125.github.io/WordNest-Dictionary/', // replace with your actual repo link
},
{
  title: 'India News App',
  description: 'Stay updated with the latest news from across India in your favorite categories.',
  tech: ['React.js','API','Bootstrap'],
  link: 'https://news-app-6skk.onrender.com',
}
];

const Projects = () => {
  return (
    <section className="py-20 px-6 ">
      <h2 className="text-[3rem] font-semibold mb-14 text-center font-poppins lightfont">
        My Projects
      </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/70 backdrop-blur-lg border border-purple-200 cursor rounded-3xl shadow-xl p-6 hover:-translate-y-2 transform transition-all duration-300 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#3a054f] mb-3">{project.title}</h3>
            <p className="text-gray-800 mb-5 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((techItem, index) => (
                <span
                  key={index}
                  className="bg-[#edd4ff] text-[#520b67] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {techItem}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#5e0d83] font-semibold hover:underline"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
