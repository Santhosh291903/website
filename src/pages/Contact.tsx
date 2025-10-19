import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Github, Linkedin, MessageCircle, Calendar } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+8056626787',
    href: 'tel:+918056626787',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'santhoshprabhakaran03@gmail.com',
    href: 'mailto:santhoshprabhakaran03@gmail.com',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tirunelveli, Tamil Nadu',
    href: null,
    gradient: 'from-green-500 to-emerald-500'
  },
];

export default function Contact() {
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next DevOps project? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8
                }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group cursor-pointer h-full flex flex-col"
              >
                <div className="flex flex-col items-center justify-center flex-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3 text-center">
                    {item.label}
                  </h3>
                  <p className="text-gray-300 text-lg font-medium text-center break-words hyphens-auto leading-tight">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} className="block h-full">
                {content}
              </a>
            ) : (
              <div key={item.label} className="h-full">
                {content}
              </div>
            );
          })}
        </div>

        {/* Social & Action Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Follow My Work
            </h2>
            <div className="flex justify-center gap-6 mb-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Santhosh291903/",
                  label: "GitHub",
                  gradient: "from-gray-600 to-gray-800"
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kishor-santhosh-p-a9b7861ab/",
                  label: "LinkedIn",
                  gradient: "from-blue-600 to-blue-800"
                },
                {
                  icon: MessageCircle,
                  href: "https://x.com/Santhosh_DevOps",
                  label: "Twitter",
                  gradient: "from-sky-500 to-blue-500"
                }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${social.gradient} flex items-center justify-center hover:shadow-2xl transition-all duration-300 group`}
                >
                  <social.icon className="text-white" size={28} />
                </motion.a>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm">
              Connect with me on professional networks
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Schedule a Call
            </h2>
            <p className="text-gray-300 mb-6">
              Let's discuss your project requirements and how I can help bring your vision to life.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:santhoshprabhakaran03@gmail.com"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Book Consultation
              <Calendar size={20} className="group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}