import { motion } from 'framer-motion';
import { Cloud, Cpu, Code, Boxes, Wrench, Server, Database, GitBranch, Shield, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: 'Azure',
    icon: Cloud,
    skills: [
      'Virtual Machines',
      'Container Registries',
      'Storage Accounts',
      'App Services',
      'Kubernetes Services',
      'SQL Databases',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0.1
  },
  {
    title: 'AWS',
    icon: Cpu,
    skills: ['EC2', 'S3', 'RDS', 'Route 53', 'Athena'],
    gradient: 'from-orange-500 to-yellow-500',
    delay: 0.2
  },
  {
    title: 'Containerization',
    icon: Server,
    skills: ['Kubernetes', 'Docker Swarm', 'Container Orchestration'],
    gradient: 'from-red-500 to-pink-500',
    delay: 0.6
  },
  {
    title: 'Scripting Languages',
    icon: Code,
    skills: ['Python', 'Bash'],
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.3
  },
  {
    title: 'CI/CD',
    icon: Boxes,
    skills: ['GitHub Actions', 'Azure DevOps', 'Jenkins'],
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.4
  },
  {
    title: 'DevOps Tools',
    icon: Wrench,
    skills: ['Docker', 'Docker Compose'],
    gradient: 'from-indigo-500 to-blue-500',
    delay: 0.5
  }
];

const techStack = [
  { name: 'Azure', level: 70 },
  { name: 'AWS', level: 60 },
  { name: 'Docker', level: 60 },
  { name: 'Kubernetes', level: 60 },
  { name: 'GitHub', level: 90 },
  { name: 'Python', level: 75 },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mastering cloud infrastructure, automation, and cutting-edge DevOps tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: category.delay }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8
                }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-white ml-4">
                    {category.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: category.delay + 0.1 }}
                      className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-lg">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Proficiency Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Technical Proficiency
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Core Technologies</h3>
              <div className="space-y-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                      <span className="text-cyan-400 font-bold">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Certifications & Focus Areas</h3>
              <div className="space-y-4">
                {[
                  'Cloud Infrastructure Design',
                  'CI/CD Pipeline Automation',
                  'Container Orchestration',
                  'Infrastructure as Code',
                  'System Monitoring & Observability',
                  'Security & Compliance'
                ].map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <GitBranch className="text-cyan-400" size={18} />
                    <span className="text-gray-300">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10"
        >
          {[
            { number: '15+', label: 'Technologies' },
            { number: '6', label: 'Skill Categories' },
            { number: '60%', label: 'Cloud Expertise' },
            { number: '100%', label: 'Automation Focus' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}