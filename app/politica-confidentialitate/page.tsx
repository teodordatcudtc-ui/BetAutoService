'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, UserCheck, Database } from 'lucide-react'

export default function PrivacyPolicy() {
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
                <Shield className="h-8 w-8 text-primary-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                  Politica de Confidențialitate
                </h1>
                <p className="text-gray-400">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="glass-card-strong p-8 rounded-2xl space-y-8">
              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary-400" />
                  Introducere
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bet Auto Service („noi”, „noastre”, „serviciul nostru”) respectă confidențialitatea dumneavoastră și se angajează 
                  să protejeze datele personale pe care ni le furnizați. Această Politică de Confidențialitate explică modul în care 
                  colectăm, utilizăm, dezvăluim și protejăm informațiile dumneavoastră personale.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Prin utilizarea site-ului nostru web și serviciilor noastre, acceptați practicile descrise în această politică.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <Database className="h-6 w-6 text-primary-400" />
                  Datele pe care le Colectăm
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Colectăm următoarele tipuri de informații:
                </p>
                
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Informații de Contact</h3>
                    <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside">
                      <li>Nume și prenume</li>
                      <li>Număr de telefon</li>
                      <li>Adresă de email</li>
                      <li>Adresă completă (dacă este necesar pentru servicii)</li>
                    </ul>
                  </div>

                  <div className="glass-card p-4 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Informații despre Vehicul</h3>
                    <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside">
                      <li>Marca și modelul vehiculului</li>
                      <li>Numărul de înmatriculare</li>
                      <li>Istoricul serviciilor efectuate</li>
                      <li>Informații despre reparații și întreținere</li>
                    </ul>
                  </div>

                  <div className="glass-card p-4 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Date Tehnice</h3>
                    <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside">
                      <li>Adresă IP</li>
                      <li>Tipul de browser</li>
                      <li>Pagini vizitate pe site-ul nostru</li>
                      <li>Data și ora accesării</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary-400" />
                  Cum Utilizăm Datele
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Utilizăm datele colectate în următoarele scopuri:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Furnizarea și îmbunătățirea serviciilor noastre auto</li>
                  <li>Procesarea programărilor și comunicarea cu clienții</li>
                  <li>Gestionarea relației cu clienții și furnizarea suportului</li>
                  <li>Îmbunătățirea experienței utilizatorilor pe site</li>
                  <li>Trimiterea de notificări despre serviciile noastre (doar cu acordul dumneavoastră)</li>
                  <li>Respectarea obligațiilor legale și reglementărilor aplicabile</li>
                  <li>Prevenirea fraudelor și asigurarea securității</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-primary-400" />
                  Partajarea Datelor
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nu vindem datele dumneavoastră personale către terți. Putem împărtăși informații doar în următoarele situații:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Cu furnizorii noștri de servicii (de exemplu, servicii de hosting, procesare plăți) care ne ajută să vă oferim serviciile</li>
                  <li>Când este necesar pentru a respecta legea sau cererea autorităților competente</li>
                  <li>Pentru a proteja drepturile, proprietatea sau siguranța noastră sau a altora</li>
                  <li>În cazul unei fuziuni, achiziții sau vânzări de active, datele pot fi transferate ca parte a acelor tranzacții</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Securitatea Datelor
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale împotriva accesului 
                  neautorizat, pierderii, distrugerii sau modificării. Cu toate acestea, niciun sistem nu este 100% sigur, și nu putem 
                  garanta securitatea absolută a datelor.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Datele sunt stocate pe servere securizate și accesibile doar personalului autorizat care necesită aceste informații pentru 
                  a-și îndeplini responsabilitățile.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Drepturile Dumneavoastră
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  În conformitate cu GDPR, aveți următoarele drepturi:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li><strong className="text-white">Dreptul la acces:</strong> Puteți solicita o copie a datelor personale pe care le deținem despre dumneavoastră</li>
                  <li><strong className="text-white">Dreptul la rectificare:</strong> Puteți solicita corectarea datelor incorecte sau incomplete</li>
                  <li><strong className="text-white">Dreptul la ștergere:</strong> Puteți solicita ștergerea datelor dumneavoastră personale</li>
                  <li><strong className="text-white">Dreptul la restricționarea procesării:</strong> Puteți solicita restricționarea procesării datelor</li>
                  <li><strong className="text-white">Dreptul la portabilitate:</strong> Puteți solicita transferul datelor către un alt operator</li>
                  <li><strong className="text-white">Dreptul la opoziție:</strong> Puteți vă opune procesării datelor pentru anumite scopuri</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Pentru a exercita aceste drepturi, vă rugăm să ne contactați la adresa de email: <a href="mailto:contact@betautoservice.ro" className="text-primary-400 hover:text-primary-300">contact@betautoservice.ro</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Stocarea Datelor
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Păstrăm datele dumneavoastră personale doar pentru perioada necesară pentru îndeplinirea scopurilor pentru care au fost 
                  colectate, respectând obligațiile legale de păstrare a documentelor. După expirarea acestei perioade, datele vor fi 
                  șterse sau anonimizate în siguranță.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Modificări ale Politicii
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Ne rezervăm dreptul de a actualiza această Politică de Confidențialitate în orice moment. Vă vom notifica despre 
                  orice modificări semnificative prin publicarea noii politici pe această pagină, cu actualizarea datei „Ultima actualizare”.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Contact
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Pentru întrebări sau preocupări despre această Politică de Confidențialitate sau despre modul în care procesăm datele 
                  dumneavoastră personale, vă rugăm să ne contactați:
                </p>
                <div className="glass-card p-4 rounded-xl">
                  <p className="text-white font-semibold mb-2">Bet Auto Service</p>
                  <p className="text-gray-300 text-sm mb-1">Strada Drumul Garii 8, București 077085</p>
                  <p className="text-gray-300 text-sm mb-1">
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

