import React from 'react'
import { Card, CardContent } from "@/components/ui/card";

export default function Projets() {
  return (
    <div>
        {/* Projets */}
        <section className="py-10 text-gray-900 relative min-h-screen bg-blue-100" style={{ fontFamily: 'Times New Roman, serif' }}> 
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 underline underline-offset-4 decoration-blue-500 mb-12">
  Mes projets
</h1>

          <div className="grid gap-6 sm:grid-cols-2 ">
            {[
  {
    title: "🌍 Transition énergétique - SEEG",
    desc: "Landing page HTML/CSS",
    tag: "Énergie, développement durable, frontend",
    link: "https://ton-lien.vercel.app" // à remplacer
  },
  {
    title: "🧮 RSE à la SEEG",
    desc: "Rapport et suivi des projets RSE",
    tag: "Responsabilité Sociétale, analyse de projet",
    link: "https://ton-lien.com"
  },
  {
    title: "🚚 Logistique - Mousse Industrie",
    desc: "Coordination transport",
    tag: "Logistique, gestion d’équipe",
    link: "https://ton-lien.com"
  },
  {
    title: "💻 Formation en développement web",
    desc: "Projets JavaScript, Node.js, React, Next.js",
    tag: "Développement fullstack",
    link: "https://ton-lien-github.com"
  },
  {
    title: "🌐 Projet de site Immobilier",
    desc: "Wireframe, zoning, maquettes",
    tag: "UX/UI, HTML/CSS, maquette",
    link: "https://elie-three.vercel.app/"
  },
  {
    title: "📄 Portfolio web (en cours)",
    desc: "Next.js, Shadcn UI, NextAuth",
    tag: "Frontend moderne, authentification",
    link: "https://xori-group.vercel.app/"
  },
].map((proj, i) => (
  // bloc Card avec le bouton comme ci-dessus

  <Card key={i}>
  <CardContent className="p-4 bg-white bg-opacity-90 rounded-lg space-y-2">
    <h3 className="text-xl font-bold">{proj.title}</h3>
    <p>{proj.desc}</p>
    <p className="text-sm text-gray-500">{proj.tag}</p>
    <a
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Consulter
    </a>
  </CardContent>
</Card>

))}

             
          </div>
        </section>
    </div>
  )
}
