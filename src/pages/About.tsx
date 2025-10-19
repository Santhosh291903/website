import { motion } from 'framer-motion';
import { Award, Target, TrendingUp, Cloud, Server, Code, Zap, Users, Clock, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-full bg-gradient-to-br from-purple-900 via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming ideas into scalable, reliable cloud infrastructure
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Professional Profile</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a DevOps Engineer with extensive experience in cloud platforms (Azure, AWS),
                CI/CD automation (GitHub Actions, Azure DevOps), and containerization
                (Docker, Kubernetes). Skilled in monitoring and performance optimization
                using Azure Monitoring and Grafana to ensure system reliability and
                efficiency.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate about automation, infrastructure scalability, and
                optimizing deployment workflows to enhance operational performance in live
                projects. Committed to driving innovation through cutting-edge DevOps practices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
              >
                <Users className="text-cyan-400 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
              >
                <Clock className="text-cyan-400 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {[
              {
                icon: Award,
                title: "Expertise",
                description: "Cloud infrastructure & DevOps automation specialist",
                gradient: "from-blue-500 to-cyan-500",
                delay: 0.1
              },
              {
                icon: Target,
                title: "Focus",
                description: "System reliability, scalability & operational excellence",
                gradient: "from-purple-500 to-pink-500",
                delay: 0.2
              },
              {
                icon: TrendingUp,
                title: "Approach",
                description: "Continuous improvement & performance optimization",
                gradient: "from-green-500 to-emerald-500",
                delay: 0.3
              },
              {
                icon: Shield,
                title: "Mission",
                description: "Building secure, resilient systems for the future",
                gradient: "from-orange-500 to-red-500",
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Core Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Azure", icon: Cloud },
              { name: "AWS", icon: Cloud },
              { name: "Docker", icon: Server },
              { name: "Kubernetes", icon: Code },
              { name: "GitHub Actions", icon: Zap },
              { name: "Azure DevOps", icon: TrendingUp },
              { name: "Grafana", icon: Shield },
              { name: "Terraform", icon: Target }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <tech.icon className="text-cyan-400 mx-auto mb-2" size={24} />
                <div className="text-white font-medium text-sm">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}