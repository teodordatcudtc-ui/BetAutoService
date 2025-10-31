'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Cookie, Shield, BarChart3, Target } from 'lucide-react'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Înapoi la Acasă</span>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary-500/20 rounded-xl p-4">
                <Cookie className="h-8 w-8 text-primary-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                  Politica Cookie-uri
                </h1>
                <p className="text-gray-400">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="glass-card-strong p-8 rounded-2xl space-y-8">
              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary-400" />
                  Ce sunt Cookie-urile?
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul tău mobil când vizitezi un site web. 
                  Ele sunt utilizate pe scară largă pentru a face site-urile web să funcționeze sau să funcționeze mai eficient, 
                  precum și pentru a oferi informații proprietarilor site-ului.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Cookie-urile ne permit să recunoaștem dispozitivul tău și să stocăm unele informații despre preferințele sau acțiunile anterioare, 
                  pentru a îmbunătăți experiența ta pe site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <Cookie className="h-6 w-6 text-primary-400" />
                  Tipuri de Cookie-uri pe care le folosim
                </h2>
                
                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary-400" />
                      Cookie-uri Necesare (Strict Necessitate)
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Aceste cookie-uri sunt esențiale pentru ca site-ul să funcționeze corect. Ele permit funcționalități de bază precum 
                      navigarea site-ului și accesul la zonele securizate ale site-ului web.
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                      <li>Cookie-uri de sesiune pentru menținerea stării de conectare</li>
                      <li>Cookie-uri de securitate pentru protecția datelor</li>
                      <li>Cookie-uri pentru preferințele de bază ale utilizatorului</li>
                    </ul>
                  </div>

                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary-400" />
                      Cookie-uri Analitică (Performance)
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Aceste cookie-uri ne ajută să înțelegem cum vizitatorii interacționează cu site-ul nostru, colectând și raportând 
                      informații anonime. Acestea ne permit să recunoaștem și să numărăm vizitatorii și să vedem cum se mișcă vizitatorii 
                      în jurul site-ului nostru.
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                      <li>Numărul de vizitatori</li>
                      <li>Sursele de trafic</li>
                      <li>Comportamentul utilizatorilor pe site</li>
                    </ul>
                  </div>

                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary-400" />
                      Cookie-uri Marketing (Funcționalitate & Targeting)
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Aceste cookie-uri sunt folosite pentru a vă oferi o experiență mai personalizată și pentru a vă arăta conținut relevante. 
                      Acestea pot fi setate de noi sau de furnizori terți ale căror servicii am adăugat pe paginile noastre.
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                      <li>Personalizarea conținutului</li>
                      <li>Rețele sociale și partajare</li>
                      <li>Publicitate personalizată (dacă aplicabil)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Gestionarea Cookie-urilor
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Poți gestiona sau șterge cookie-urile în orice moment. Poți seta browserul tău să refuze cookie-uri, 
                  dar acest lucru poate afecta funcționalitatea site-ului.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Majoritatea browserelor web acceptă cookie-uri automat, dar poți modifica setările browserului tău pentru a refuza 
                  cookie-uri dacă preferi. Poți șterge toate cookie-urile care sunt deja pe computerul tău și poți seta majoritatea 
                  browserelor să prevină plasarea acestora.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Durata de Stocare
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Cookie-urile de sesiune sunt stocate temporar și sunt șterse când închizi browserul. Cookie-urile persistente rămân 
                  pe dispozitivul tău pentru o perioadă determinată sau până le ștergi manual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Contact
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Dacă ai întrebări despre utilizarea cookie-urilor pe acest site, te rugăm să ne contactezi:
                </p>
                <div className="glass-card p-4 rounded-xl">
                  <p className="text-white font-semibold mb-2">Bet Auto Service</p>
                  <p className="text-gray-300 text-sm">Strada Drumul Garii 8, București 077085</p>
                  <p className="text-gray-300 text-sm">
                    Telefon: <a href="tel:0726226622" className="text-primary-400 hover:text-primary-300">0726226622</a>
                  </p>
                  <p className="text-gray-300 text-sm">
                    Email: <a href="mailto:contact@betautoservice.ro" className="text-primary-400 hover:text-primary-300">contact@betautoservice.ro</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

