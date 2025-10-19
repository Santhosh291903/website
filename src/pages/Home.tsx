import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Code, Server, Cpu, Database, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-br from-purple-900 via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            >
              Kishor
              <br />
              <span className="text-purple-400">Santhosh</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl font-semibold text-purple-300 mb-8 flex items-center gap-3"
            >
              <div className="w-12 h-0.5 bg-purple-400"></div>
              Senior DevOps Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl"
            >
              Transforming cloud infrastructure through innovative DevOps practices. 
              Expert in building resilient, scalable systems on Azure and AWS platforms. 
              Passionate about automation, containerization, and driving operational excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:santhoshprabhakaran03@gmail.com"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-3 group"
              >
                Start Conversation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/experience"
                  className="bg-white/10 backdrop-blur-sm border border-purple-500/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-3"
                >
                  Explore Work
                  <div className="w-5 h-5 border-2 border-white rounded-full animate-spin"></div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: Cloud,
                title: "Cloud Platforms",
                description: "Azure & AWS Infrastructure",
                gradient: "from-purple-500 to-pink-500",
                delay: 0.1
              },
              {
                icon: Cpu,
                title: "Infrastructure",
                description: "IaC & Automation",
                gradient: "from-blue-500 to-cyan-500",
                delay: 0.2
              },
              {
                icon: Code,
                title: "CI/CD Pipelines",
                description: "Azure DevOps & GitHub Actions",
                gradient: "from-green-500 to-emerald-500",
                delay: 0.3
              },
              {
                icon: Database,
                title: "Containerization",
                description: "Docker & Kubernetes",
                gradient: "from-orange-500 to-red-500",
                delay: 0.4
              },
              {
                icon: Shield,
                title: "Security",
                description: "DevSecOps & Compliance",
                gradient: "from-indigo-500 to-purple-500",
                delay: 0.5
              },
              {
                icon: Zap,
                title: "Monitoring",
                description: "Observability & Performance",
                gradient: "from-yellow-500 to-amber-500",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                className="bg-white/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}