import { motion } from 'framer-motion';
import { Shield, Activity, Layers, Lock, FileCode, Settings, Container, Database, GitBranch, Terminal, Zap, Cpu, Wrench } from 'lucide-react';

const toolCategories = [
  {
    category: 'Infrastructure & Configuration',
    icon: FileCode,
    tools: [
      {
        name: 'Terraform',
        icon: FileCode,
        description: 'Infrastructure as Code for cloud provisioning',
        gradient: 'from-purple-500 to-pink-500',
      },
      {
        name: 'Ansible',
        icon: Settings,
        description: 'Configuration management and automation',
        gradient: 'from-orange-500 to-red-500',
      },
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Container & Orchestration',
    icon: Container,
    tools: [
      {
        name: 'Kubernetes',
        icon: Container,
        description: 'Container orchestration platform',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Docker',
        icon: Container,
        description: 'Containerization and application packaging',
        gradient: 'from-indigo-500 to-purple-500',
      },
      {
        name: 'Helm',
        icon: Container,
        description: 'Kubernetes package manager',
        gradient: 'from-purple-500 to-pink-500',
      },
    ],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    category: 'Version Control & CI/CD',
    icon: GitBranch,
    tools: [
      {
        name: 'GitHub Actions',
        icon: GitBranch,
        description: 'Automated CI/CD workflows',
        gradient: 'from-gray-600 to-gray-800',
      },
      {
        name: 'Azure DevOps',
        icon: GitBranch,
        description: 'End-to-end DevOps platform',
        gradient: 'from-blue-600 to-blue-800',
      },
      {
        name: 'Jenkins',
        icon: GitBranch,
        description: 'Automation server for CI/CD pipelines',
        gradient: 'from-red-500 to-pink-500',
      },
    ],
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    category: 'Code Quality & Security',
    icon: Shield,
    tools: [
      {
        name: 'SonarQube',
        icon: Shield,
        description: 'Continuous code quality and security inspection',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Trivy',
        icon: Lock,
        description: 'Vulnerability scanner for containers and dependencies',
        gradient: 'from-green-500 to-emerald-500',
      },
      {
        name: 'OWASP ZAP',
        icon: Shield,
        description: 'Web application security testing tool',
        gradient: 'from-red-500 to-pink-500',
      },
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Monitoring & Deployment',
    icon: Activity,
    tools: [
      {
        name: 'Uptime Kuma',
        icon: Activity,
        description: 'Self-hosted monitoring and uptime tracking',
        gradient: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Devtron',
        icon: Layers,
        description: 'Kubernetes deployment and management platform',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Grafana',
        icon: Activity,
        description: 'Monitoring and observability dashboards',
        gradient: 'from-orange-500 to-amber-500',
      },
      {
        name: 'Prometheus',
        icon: Activity,
        description: 'Metrics collection and alerting system',
        gradient: 'from-red-500 to-pink-500',
      },
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Scripting & Automation',
    icon: Terminal,
    tools: [
      {
        name: 'Bash',
        icon: Terminal,
        description: 'Shell scripting for automation tasks',
        gradient: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Python',
        icon: Terminal,
        description: 'Scripting and automation development',
        gradient: 'from-blue-500 to-cyan-500',
      },
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Database Management',
    icon: Database,
    tools: [
      {
        name: 'PostgreSQL',
        icon: Database,
        description: 'Advanced relational database system',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'MySQL',
        icon: Database,
        description: 'Popular open-source database',
        gradient: 'from-orange-500 to-amber-500',
      },
      {
        name: 'MSSQL',
        icon: Database,
        description: 'Microsoft SQL Server database',
        gradient: 'from-red-500 to-pink-500',
      },
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
];

export default function Tools() {
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
            Tools & Technologies
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive arsenal of modern DevOps tools for building, deploying, and monitoring scalable systems
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="space-y-12">
          {toolCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                    <CategoryIcon className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {category.category}
                  </h2>
                </div>

                {/* Tools Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tools.map((tool, toolIndex) => {
                    const ToolIcon = tool.icon;
                    return (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + toolIndex * 0.05,
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -8
                        }}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex items-start mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            <ToolIcon className="text-white" size={24} />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                              {tool.name}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
            <Zap className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Learning & Innovation
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Constantly exploring and adopting new tools and technologies to improve
            workflows, enhance security, and deliver cutting-edge solutions for modern
            DevOps challenges. Staying ahead in the rapidly evolving cloud ecosystem.
          </p>
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10"
        >
          {[
            { number: '20+', label: 'Tools Mastered' },
            { number: '7', label: 'Categories' },
            { number: '100%', label: 'Automation Focus' },
            { number: '∞', label: 'Learning Mindset' }
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