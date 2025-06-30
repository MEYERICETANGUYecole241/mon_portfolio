"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Mail, Phone, Linkedin, ArrowDown, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  console.log("Hero section rendering");

  const scrollToProjects = () => {
    console.log("Scrolling to projects section");
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen text-white font-sans">
      {/* Video Background with Enhanced Overlay */}
      <div className="fixed inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="videop.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-30 p-6"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent"
          >
            MIT
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={scrollToProjects}
              className="text-slate-300 hover:text-white transition-colors duration-200 relative group"
            >
              Projets
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-200"></span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <Image
                src="/profil.2.jpeg"
                alt="Meyer Ice Tanguy"
                width={180}
                height={180}
                className="rounded-full object-cover shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/20 to-violet-500/20"></div>
            </div>
          </motion.div>

          {/* Main Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl space-y-6"
          >
            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-sky-200 to-violet-200 bg-clip-text text-transparent"
              >
                MEYER ICE TANGUY
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-lg md:text-xl text-sky-300 font-medium"
              >
                Développeur Frontend • Expert React & Next.js
              </motion.div>
            </div>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto"
            >
              Passionné par la création d'expériences web modernes, je transforme vos idées en 
              <span className="text-sky-300 font-semibold"> solutions digitales innovantes</span>. 
              Avec une approche centrée sur l'impact et la performance, 
              j'accompagne les entreprises dans leur <span className="text-violet-300 font-semibold">transformation numérique durable</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              {/* CV Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/cv Meyer ice tanguy (2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-lg hover:shadow-amber-500/25"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Télécharger mon CV
                </Link>
              </motion.div>

              {/* Contact Button */}
              <Popover>
                <PopoverTrigger asChild>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-violet-600 text-white px-8 py-4 rounded-xl font-bold hover:from-sky-500 hover:to-violet-500 transition-all duration-200 shadow-lg hover:shadow-sky-500/25"
                  >
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Me contacter
                  </motion.button>
                </PopoverTrigger>
                <PopoverContent className="backdrop-blur-xl bg-slate-900/95 border border-white/20 rounded-2xl shadow-2xl p-6 text-left space-y-4 w-80">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Restons en contact</h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-violet-400 mx-auto"></div>
                  </div>
                  
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Mail className="text-sky-400 w-5 h-5" />
                    <a href="mailto:icetanguy065@gmail.com" className="text-white hover:text-sky-300 transition-colors">
                      icetanguy065@gmail.com
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <Phone className="text-green-400 w-5 h-5" />
                    <span className="text-white">+241 065 51 09 46</span>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <Phone className="text-green-400 w-5 h-5" />
                    <span className="text-white">+241 074 15 99 70</span>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Linkedin className="text-blue-400 w-5 h-5" />
                    <a
                      href="https://www.linkedin.com/feed/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      Profil LinkedIn
                    </a>
                  </motion.div>
                </PopoverContent>
              </Popover>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToProjects}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/70 hover:text-white transition-colors group"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium group-hover:text-sky-300 transition-colors">Découvrir mes projets</span>
                <ArrowDown className="w-6 h-6" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}