import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Star, Rocket, Target, Zap } from 'lucide-react';

const experiences = [
  {
    company: 'Icanio Technologies',
    role: 'DevOps Engineer',
    period: '2023 – Present',
    location: 'Tirunelveli, Tamil Nadu, India',
    description:
      'Work on Azure and AWS deployments, CI/CD setup, and infrastructure automation.',
    highlights: [
      'Managed cloud infrastructure across Azure and AWS platforms',
      'Implemented automated CI/CD pipelines for multiple projects',
      'Optimized deployment workflows and system performance',
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
];

const projects = [
  {
    name: 'PropertyZar',
    period: '2023 – Present',
    description:
      'Automated deployments with Azure DevOps and Kubernetes (AKS). Configured Azure Storage, App Services, Key Vault, and Container Registries. Set up MSSQL databases and virtual machines for production environments.',
    tech: ['Azure DevOps', 'Kubernetes', 'AKS', 'MSSQL', 'Key Vault'],
    gradient: 'from-purple-500 to-pink-500',
    icon: Rocket
  },
  {
    name: 'TitanData',
    period: '2024 – 2025',
    description:
      'Developed Docker pipelines for scalable application delivery. Configured MySQL databases for development and production.',
    tech: ['Docker', 'MySQL', 'CI/CD Pipelines'],
    gradient: 'from-green-500 to-emerald-500',
    icon: Target
  },
  {
    name: 'WaterField',
    period: 'Sep 2023 – Nov 2023',
    description:
      'Built CI/CD workflows using GitHub Actions. Deployed applications on AWS, optimized PostgreSQL databases, and secured S3 storage.',
    tech: ['GitHub Actions', 'AWS', 'PostgreSQL', 'S3'],
    gradient: 'from-orange-500 to-red-500',
    icon: Zap
  },
];

export default function Experience() {
  return (
    <div className="min-h-full bg-gradient-to-br from-purple-900 via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Experience & Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building scalable solutions and driving innovation through cutting-edge DevOps practices
          </p>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Professional Experience
            </h2>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.company}
                  </h3>
                  <div className="text-cyan-400 font-semibold text-lg mb-3">
                    {exp.role}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-2 lg:mt-0">
                  <span className="flex items-center text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </span>
                  <span className="flex items-center text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{exp.description}</p>
              <div className="space-y-3">
                {exp.highlights.map((highlight) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start text-gray-300 group"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-lg">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Rocket className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Key Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8
                  }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer h-full flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  
                  <div className="text-cyan-400 text-sm mb-4 flex items-center bg-white/5 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} className="mr-2" />
                    {project.period}
                  </div>
                  
                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-gray-400">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}