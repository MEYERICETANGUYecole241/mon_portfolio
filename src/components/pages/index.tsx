// Portfolio Next.js - MEYER ICE TANGUY
"use client";



import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Mail, Phone, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-blue-200 text-gray-900" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Header */}
      <section className="text-center py-10">
        <img
          src="/profil.2.jpeg"
          alt="Meyer Ice Tanguy"
          className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-4">MEYER ICE TANGUY</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Développeur web en formation, engagé dans les enjeux RSE et énergétiques,
          je conçois des solutions numériques et durables pour accompagner la transformation des entreprises.
        </p>
        <div className="flex justify-center gap-4 mt-4">
         
           <Popover>
      <PopoverTrigger asChild>
        <button
          className="bg-blue-900 inline-flex items-center px-8 py-4 text-xl font-semibold border border-blue-600 rounded-lg text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <Mail className="mr-3 h-6 w-6" />
          Contact
        </button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={8}
        className="
          w-80 
          bg-white dark:bg-gray-900 
          rounded-xl shadow-2xl 
          p-6
          ring-1 ring-black ring-opacity-10
          animate-popover-fade-in slide-in-from-top
          will-change-transform
          "
          style={{ fontFamily: 'Times New Roman, serif' }}
      >
        <div className="flex items-center space-x-4 mb-4">
          <Mail className="h-6 w-6 text-blue-600" />
          <a
            href="mailto:icetanguy065@gmail.com"
            className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:underline"
          >
            icetanguy065@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Phone className="h-6 w-6 text-green-600" />
          <span className="text-lg text-gray-800 dark:text-gray-300 font-semibold">
            +241 065 51 09 46
          </span>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Phone className="h-6 w-6 text-green-600" />
          <span className="text-lg text-gray-800 dark:text-gray-300 font-semibold">
            +241 074 15 99 70
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Linkedin className="h-6 w-6 text-blue-700" />
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-700 hover:underline"
          >
            Profil LinkedIn
          </a>
        </div>
      </PopoverContent>

      <style jsx>{`
        @keyframes popoverFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-popover-fade-in {
          animation: popoverFadeIn 250ms ease forwards;
        }
        @keyframes slideInFromTop {
          0% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .slide-in-from-top {
          animation: slideInFromTop 250ms ease forwards;
        }
      `}</style>
    </Popover>
        </div>
        
      </section>

      {/* Projets */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Mes projets</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">🌍 Transition énergétique - SEEG</h3>
              <p>Landing page HTML/CSS</p>
              <p className="text-sm text-gray-500">Énergie, développement durable, frontend</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">🧮 RSE à la SEEG</h3>
              <p>Rapport et suivi des projets RSE</p>
              <p className="text-sm text-gray-500">Responsabilité Sociétale, analyse de projet</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">🚚 Logistique - Mousse Industrie</h3>
              <p>Coordination transport</p>
              <p className="text-sm text-gray-500">Logistique, gestion d’équipe</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">💻 Formation en développement web</h3>
              <p>Projets JavaScript, Node.js, React, Next.js</p>
              <p className="text-sm text-gray-500">Développement fullstack</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">🌐 Projet de site restaurant</h3>
              <p>Wireframe, zoning, maquettes</p>
              <p className="text-sm text-gray-500">UX/UI, HTML/CSS, maquette</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">📄 Portfolio web (en cours)</h3>
              <p>Next.js, Shadcn UI, NextAuth</p>
              <p className="text-sm text-gray-500">Frontend moderne, authentification</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
