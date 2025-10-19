import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Code, Server, Cpu, Database, Shield, Zap, Sparkles, Rocket, Globe, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full opacity-40"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 400),
              }}
              animate={{
                y: [null, -20, 0],
                x: [null, 15, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Animated Gradients */}
        <motion.div
          className="absolute -top-20 -right-20 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-13 pb-12">
        {/* Mobile First Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-cyan-100 to-emerald-200 bg-clip-text text-transparent leading-tight"
            
            >
              KISHOR
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                SANTHOSH
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8"
            >
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
              <span className="text-lg sm:text-xl text-cyan-300 font-light">DevOps Engineer II</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
            >
              Architecting next-generation cloud ecosystems with cutting-edge DevOps methodologies. 
              Transforming complex infrastructure challenges into elegant, scalable solutions on 
              Azure and AWS platforms.
            </motion.p>

            {/* CTA Buttons - Stack on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-10"
            >
              <Link to="/experience">
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, #22d3ee 0%, #0ea5e9 50%, #10b981 100%)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-cyan-500 to-emerald-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 flex items-center justify-center gap-3 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Link to="/experience">Explore Portfolio</Link> 
                <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              </Link>
            </motion.div>

            {/* Enhanced Stats - Grid layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt- sm:pt-12 border-t border-white/10"
            >
              {[
                { number: "15+", label: "Projects Handled", suffix: "★" },
                { number: "3+", label: "Years", suffix: "⚡" }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-1 sm:mb-2 flex items-center justify-center gap-1">
                    {stat.number}
                    <span className="text-sm sm:text-lg">{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2 w-full"
          >
            {[
              {
                icon: Cloud,
                title: "Cloud Platforms",
                description: "Azure & AWS",
                gradient: "from-cyan-500 to-blue-500",
                delay: 0.1
              },
              {
                icon: Terminal,
                title: "Infrastructure",
                description: "Terraform & Automation",
                gradient: "from-emerald-500 to-green-500",
                delay: 0.2
              },
              {
                icon: Code,
                title: "CI/CD",
                description: "Azure DevOps & GitHub",
                gradient: "from-violet-500 to-purple-500",
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
                gradient: "from-indigo-500 to-blue-500",
                delay: 0.5
              },
              {
                icon: Globe,
                title: "Monitoring",
                description: "Observability & Performance",
                gradient: "from-pink-500 to-rose-500",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: item.delay }}
                whileHover={{ 
                  scale: 1.05,
                  y: -4,
                }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-500 h-full flex flex-col">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg flex-shrink-0`}>
                    <item.icon size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-xl mb-1 sm:mb-2 lg:mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-2 flex-grow">
                    {item.description}
                  </p>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-2/3 transition-all duration-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}