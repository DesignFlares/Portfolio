import { useMemo, useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const coreProjects = [
  {
    id: 'hireorbit',
    title: 'HireOrbit – Placement Portal',
    shortTitle: 'HireOrbit',
    category: 'Full Stack / MERN',
    description:
      'A role-based placement portal for students, companies, and admins with job posting, applications, approvals, and dedicated dashboards.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://placement-portal-beta-five.vercel.app/',
    image: '/projects/hireorbit.png',
    accent: 'from-[#f7c6ff] via-[#ead6ff] to-[#ffd6e7]',
    stats: ['3 User Roles', 'RBAC + Dashboards'],
  },
  {
    id: 'stoxly',
    title: 'Stoxly – Stock Trading Platform',
    shortTitle: 'Stoxly',
    category: 'Full Stack / MERN',
    description:
      'A stock trading platform for exploring stocks, simulating trades, and tracking portfolio activity through an interactive dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://stoxlytrade.netlify.app/',
    image: '/projects/stoxly.png',
    accent: 'from-[#ffd7ba] via-[#ffe6cc] to-[#f8d8ff]',
    stats: ['Trade Simulation', 'Portfolio Tracking'],
  },
  {
    id: 'parkpoint',
    title: 'ParkPoint – Parking Management Platform',
    shortTitle: 'ParkPoint',
    category: 'Full Stack / Flask',
    description:
      'A parking management system for 4-wheeler slot booking, availability tracking, and dashboard-based parking operations.',
    tech: ['Flask', 'HTML', 'CSS', 'SQLite'],
    link: 'https://parkpoint.onrender.com',
    image: '/projects/parkpoint.png',
    accent: 'from-[#ffe0f1] via-[#f3dcff] to-[#ffe8c7]',
    stats: ['Slot Booking', 'Admin Dashboard'],
  },
  {
    id: 'wanderlust',
    title: 'WanderLust – Travel Listings Platform',
    shortTitle: 'WanderLust',
    category: 'Full Stack / MERN',
    description:
      'A travel listings platform with authentication, image uploads, reviews, and interactive maps for discovering and sharing destinations.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Leaflet.js', 'Cloudinary'],
    link: 'https://wanderlust-y7kx.onrender.com/',
    image: '/projects/wanderlust.png',
    accent: 'from-[#d7e8ff] via-[#ead9ff] to-[#ffd7ea]',
    stats: ['Maps + Reviews', 'Listings Platform'],
  },
];

const otherProjects = [
  {
    title: 'Dish & Dine',
    description: 'Restaurant website with reservation handling and confirmation emails.',
    tech: ['Flask', 'SQLite', 'Email API'],
    link: 'https://restuarant-app-0gal.onrender.com',
  },
  {
    title: 'Tickit',
    description: 'Task manager with filtering by priority, category, and completion.',
    tech: ['Flask', 'HTML', 'CSS'],
    link: 'https://tickit-hn3n.onrender.com',
  },
  {
    title: 'Chefify',
    description: 'Recipe discovery app with 100+ recipes and search functionality.',
    tech: ['React.js', 'API', 'Tailwind CSS'],
    link: 'https://s-125.github.io/Chefify/',
  },
  {
    title: 'News App',
    description: 'Category-based news platform for browsing current updates.',
    tech: ['React.js', 'API', 'Bootstrap'],
    link: 'https://news-app-6skk.onrender.com',
  },
  {
    title: 'WordNest',
    description: 'Dictionary app for meanings, synonyms, and examples.',
    tech: ['React.js', 'API'],
    link: 'https://s-125.github.io/WordNest-Dictionary/',
  },
];

const TechPill = ({ children, active = false, small = false }) => (
  <span
    className={`rounded-full border font-medium transition ${
      active
        ? 'border-white/25 bg-white/18 text-white'
        : 'border-purple-200/70 bg-white/70 text-[#5c1776]'
    } ${small ? 'px-2.5 py-1 text-[10px]' : 'px-3 py-1 text-[11px]'}`}
  >
    {children}
  </span>
);

const ProjectSelectorItem = ({ project, index, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-3xl border p-4 sm:p-5 text-left transition-all duration-300 ${
        active
          ? 'border-purple-300 bg-white/90 shadow-[0_16px_40px_rgba(122,53,168,0.16)]'
          : 'border-purple-200/60 bg-white/55 hover:bg-white/75 hover:-translate-y-0.5'
      }`}
    >
      <div
        className={`absolute inset-y-0 left-0 w-1.5 rounded-r-full transition-all ${
          active ? 'bg-[#8b3db3]' : 'bg-transparent group-hover:bg-[#d9b2f3]'
        }`}
      />
      <div className="flex items-start justify-between gap-3 pl-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#8b5ca3] font-semibold mb-2">
            0{index + 1}
          </p>
          <h3 className="text-lg sm:text-[1.1rem] font-bold text-[#2f0444] leading-snug">
            {project.shortTitle}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {project.category}
          </p>
        </div>

        <div
          className={`mt-1 h-3.5 w-3.5 rounded-full border-2 transition ${
            active
              ? 'border-[#8b3db3] bg-[#8b3db3]'
              : 'border-purple-300 bg-transparent'
          }`}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2 pl-2">
        {project.stats.map((item, idx) => (
          <span
            key={idx}
            className={`rounded-full px-3 py-1 text-[10px] font-medium ${
              active
                ? 'bg-[#f3e5ff] text-[#6a1f8a]'
                : 'bg-[#faf6ff] text-[#7a4a93]'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </button>
  );
};

const OtherProjectCard = ({ project }) => {
  return (
    <div className="group rounded-[1.5rem] border border-purple-200/70 bg-white/70 backdrop-blur-lg p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg sm:text-xl font-bold text-[#3a054f] leading-snug">
          {project.title}
        </h3>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[#faf5ff] p-2 text-[#5e0d83] transition hover:bg-[#f3e8ff]"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <p className="text-sm text-gray-700 leading-6 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((item, idx) => (
          <TechPill key={idx} small>
            {item}
          </TechPill>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeId, setActiveId] = useState(coreProjects[0].id);

  const activeProject = useMemo(
    () => coreProjects.find((project) => project.id === activeId) || coreProjects[0],
    [activeId]
  );

  return (
    <section className="relative py-24 px-5 sm:px-6 lg:px-8">
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(213,170,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,171,171,0.16),transparent_28%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="uppercase tracking-[0.35em] text-[11px] sm:text-xs text-[#7c4a95] font-semibold mb-4">
            Portfolio Highlights
          </p>

          <h2 className="text-[2.4rem] md:text-[3.2rem] font-semibold font-poppins lightfont">
            Selected Projects
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed text-sm sm:text-base">
            Click through the projects to explore different products, dashboards,
            and full-stack builds I’ve designed and developed.
          </p>
        </div>

        {/* INTERACTIVE CORE PROJECTS */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3a054f] whitespace-nowrap">
              Core Projects
            </h3>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#d7b0f7] to-transparent" />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.45fr] gap-7 items-stretch">
            {/* LEFT SELECTOR */}
            <div className="order-2 xl:order-1">
              {/* mobile selector */}
              <div className="xl:hidden flex gap-3 overflow-x-auto no-scrollbar pb-2 mb-5">
                {coreProjects.map((project, index) => {
                  const active = project.id === activeProject.id;
                  return (
                    <button
                      key={project.id}
                      onClick={() => setActiveId(project.id)}
                      className={`min-w-[220px] rounded-2xl border p-4 text-left transition ${
                        active
                          ? 'border-purple-300 bg-white shadow-md'
                          : 'border-purple-200/60 bg-white/60'
                      }`}
                    >
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b5ca3] font-semibold mb-2">
                        0{index + 1}
                      </p>
                      <h4 className="text-base font-bold text-[#2f0444]">
                        {project.shortTitle}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">{project.category}</p>
                    </button>
                  );
                })}
              </div>

              {/* desktop selector */}
              <div className="hidden xl:flex flex-col gap-4">
                {coreProjects.map((project, index) => (
                  <ProjectSelectorItem
                    key={project.id}
                    project={project}
                    index={index}
                    active={project.id === activeProject.id}
                    onClick={() => setActiveId(project.id)}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT PREVIEW STAGE */}
            <div className="order-1 xl:order-2">
              <div className="group relative overflow-hidden rounded-[2rem] border border-purple-200/70 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(115,46,154,0.14)] min-h-[520px] lg:min-h-[580px]">
                {/* dynamic accent wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activeProject.accent} opacity-55 transition-all duration-500`}
                />

                {/* decorative blur blobs */}
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
                <div className="absolute bottom-10 left-8 h-32 w-32 rounded-full bg-[#f8d7ff]/30 blur-3xl" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* image area */}
                  <div className="relative h-[270px] sm:h-[320px] lg:h-[360px] p-4 sm:p-5">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] border border-white/35 bg-white/35 backdrop-blur-md shadow-lg">
                      <img
                        key={activeProject.id}
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="h-full w-full object-cover animate-[fadeIn_.45s_ease]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#2d0b3d]/55 via-[#2d0b3d]/10 to-transparent" />

                      {/* floating stats */}
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        {activeProject.stats.map((item, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-white/30 bg-white/50 px-3 py-1 text-[10px] sm:text-[11px] font-medium text-violet-700 backdrop-blur-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* floating project count */}
                      <div className="absolute bottom-4 right-4 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-[#5e0d83] shadow-sm">
                        {coreProjects.findIndex((p) => p.id === activeProject.id) + 1} / {coreProjects.length}
                      </div>
                    </div>
                  </div>

                  {/* content */}
                  <div
                    key={`${activeProject.id}-content`}
                    className="px-5 sm:px-6 lg:px-7 pb-6 sm:pb-7 animate-[fadeUp_.45s_ease]"
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6b1a8d] shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        {activeProject.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-[2rem] font-bold text-[#2f0444] leading-tight mb-4">
                      {activeProject.title}
                    </h3>

                    <p className="text-sm sm:text-[0.96rem] text-gray-700 leading-7 max-w-3xl mb-5">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeProject.tech.map((item, idx) => (
                        <TechPill key={idx}>{item}</TechPill>
                      ))}
                    </div>

                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#d8b4f8] bg-white px-5 py-2.5 text-sm font-semibold text-[#5e0d83] shadow-sm transition hover:bg-[#faf5ff]"
                    >
                      View Project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3a054f] whitespace-nowrap">
              Other Builds
            </h3>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#d7b0f7] to-transparent" />
          </div>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project, idx) => (
              <OtherProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;