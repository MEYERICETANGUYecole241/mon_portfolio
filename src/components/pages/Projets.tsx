"use client";

import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code, Palette, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Projets() {
  console.log("Projects section rendering");

  const projects = [
    {
      title: "EcoConnect",
      desc: "Plateforme communautaire moderne dédiée à l'environnement et au développement durable avec une expérience utilisateur immersive.",
      tag: "Next.js • Tailwind CSS • Design System",
      link: "https://ecoconnect-seven.vercel.app/",
      icon: <Globe className="w-6 h-6" />,
      category: "Développement Durable",
      featured: true
    },
    {
      title: "SEEG - Refonte Complète",
      desc: "Transformation digitale complète du site vitrine avec architecture moderne, performance optimisée et design responsive.",
      tag: "Next.js 14 • Shadcn UI • Optimisation SEO",
      link: "https://seeg-refonte.vercel.app/",
      icon: <Zap className="w-6 h-6" />,
      category: "Site Vitrine",
      featured: true
    },
    {
  title: "Calculateur CO₂ Carbone-Gabon",
  desc: "Plateforme interactive pour estimer les émissions de CO₂ générées par vos déplacements, selon le mode de transport utilisé au Gabon.",
  tag: "Environnement • Mobilité durable • Données locales",
  link: "https://carbonne-gabon.vercel.app", 
  icon: <Code className="w-6 h-6" />,
  category: "Transition écologique"
},

    {
      title: "Hôtel Prestige",
      desc: "Site vitrine élégant pour établissement hôtelier avec système de réservation et galerie interactive.",
      tag: "HTML5 • CSS3 • UX Design Avancé",
      link: "https://i-tan-tau.vercel.app/",
      icon: <Palette className="w-6 h-6" />,
      category: "Hôtellerie"
    },
    {
      title: "Plateforme Immobilière",
      desc: "Interface complète de recherche immobilière avec filtres avancés, cartes interactives et système de favoris.",
      tag: "UX/UI Design • Wireframing • Prototypage",
      link: "https://loca-gabon.vercel.app/",
      icon: <Palette className="w-6 h-6" />,
      category: "Immobilier"
    },
    {
      title: "Xori-Group • En cours",
      desc: "Interface B2B moderne avec authentification avancée, dashboard analytics et gestion multi-utilisateurs.",
      tag: "Next.js • NextAuth • Dashboard",
      link: "https://xori-group.vercel.app/",
      icon: <Code className="w-6 h-6" />,
      category: "B2B Platform",
      featured: true
    },
    {
  title: "TalentGabon RH - Plateforme de Digitalisation RH",
  desc: "Plateforme digitale dédiée à la gestion des talents, conçue pour répondre aux besoins spécifiques des entreprises en Afrique. Optimisation des processus RH avec une approche moderne et contextuelle.",
  tag: "Next.js 14 • Shadcn UI • Optimisation SEO",
  link: "https://rh2-flax.vercel.app/ ",
  icon: <Zap className="w-6 h-6\" />,
  category: "Plateforme RH",
  featured: true
}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  };

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mes <span className="bg-gradient-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">Réalisations</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez une sélection de projets qui reflètent ma passion pour l&rsquo;innovation technique et l&rsquo;excellence design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 h-full flex flex-col">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-sky-500 to-violet-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-sky-600 font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        ⭐ Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tag.split(' • ').map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-sky-500 hover:to-violet-500 transition-all duration-200 shadow-lg hover:shadow-sky-500/25 mt-6"
                    onClick={() => console.log("Opening project:", project.title)}
                  >
                    <span>Voir le projet</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-sky-50 to-violet-50 border border-sky-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Prêt à collaborer ?
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Discutons de votre prochain projet et créons ensemble quelque chose d&rsquo;exceptionnel.
            </p>
            <motion.a
              href="mailto:icetanguy065@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-violet-600 text-white px-8 py-4 rounded-xl font-bold hover:from-sky-500 hover:to-violet-500 transition-all duration-200 shadow-lg hover:shadow-sky-500/25"
            >
              <ExternalLink className="w-5 h-5" />
              Commencer un projet
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}