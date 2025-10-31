'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle, Shield } from 'lucide-react'

export default function TermsAndConditions() {
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
                <FileText className="h-8 w-8 text-primary-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                  Termeni și Condiții
                </h1>
                <p className="text-gray-400">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="glass-card-strong p-8 rounded-2xl space-y-8">
              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <Scale className="h-6 w-6 text-primary-400" />
                  Introducere
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bine ați venit la Bet Auto Service. Acești Termeni și Condiții reglementează utilizarea site-ului nostru web și 
                  serviciile oferite. Prin accesarea sau utilizarea site-ului nostru și serviciilor, acceptați să fiți obligați 
                  de acești termeni și condiții.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Dacă nu sunteți de acord cu oricare dintre acești termeni, vă rugăm să nu utilizați site-ul sau serviciile noastre.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400" />
                  Servicii Oferite
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bet Auto Service oferă următoarele servicii auto:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Reparații auto complete pentru toate mărcile și modelele</li>
                  <li>Diagnostic tehnic computerizat</li>
                  <li>Schimb ulei și filtre</li>
                  <li>Montaj, echilibrare și aliniere roți</li>
                  <li>Pregătire pentru ITP</li>
                  <li>Service rapid pentru reparații urgente</li>
                  <li>Reparații sisteme electrice, de răcire și de frânare</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Ne rezervăm dreptul de a modifica, suspenda sau discontinua orice serviciu în orice moment, fără notificare prealabilă.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary-400" />
                  Programări și Anulări
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Programări:</strong> Programările pot fi făcute prin telefon, email sau formularul online. 
                  Confirmăm programările prin SMS sau telefon. Vă rugăm să ne anunțați dacă nu puteți respecta programarea.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Anulări:</strong> Anulările trebuie făcute cu cel puțin 24 de ore înainte de programarea 
                  stabilită. Anulări în ultima oră sau neprezentarea la programare poate rezulta în aplicarea unei taxe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Prețuri și Plăți
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Estimări:</strong> Toate prețurile sunt indicative și pot varia în funcție de complexitatea 
                  lucrării și de piese necesare. Vă vom oferi întotdeauna o estimare înainte de a începe lucrarea.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Plăți:</strong> Acceptăm plata în numerar sau prin transfer bancar. Plata se face la finalizarea 
                  serviciului sau conform acordului stabilit.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Modificări preț:</strong> Ne rezervăm dreptul de a modifica prețurile în orice moment, 
                  dar modificările nu vor afecta programările deja confirmate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Garanții
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Oferim garanție pentru lucrările efectuate și piesele montate, conform următoarelor condiții:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Garanție minimă de 6 luni sau 10.000 km pentru reparații și piese montate</li>
                  <li>Garanția nu acoperă uzura normală sau deteriorări cauzate de utilizare incorectă</li>
                  <li>Pentru a beneficia de garanție, trebuie să păstrați factura și să respectați recomandările de întreținere</li>
                  <li>Garanția poate fi anulată dacă lucrarea este modificată sau reparată de alții</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-primary-400" />
                  Responsabilități și Limitări
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Răspunderea noastră:</strong> Ne angajăm să oferim servicii de calitate și să folosim 
                  piese originale sau echivalente de calitate superioară. În cazul unor probleme rezultate din serviciile noastre, răspundem 
                  conform garanției oferite.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Limitarea răspunderii:</strong> Nu suntem responsabili pentru:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Daune care rezultă din utilizarea incorectă a vehiculului</li>
                  <li>Daune preexistente care nu au fost identificate sau comunicate</li>
                  <li>Pierderi indirecte sau consecvențiale (pierderi de profit, timp, date etc.)</li>
                  <li>Daune cauzate de forță majoră sau evenimente în afara controlului nostru</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Proprietatea Intelectuală
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Toate conținuturile site-ului (text, imagini, logo-uri, design) sunt proprietatea Bet Auto Service sau ale partenerilor 
                  noștri și sunt protejate de legile române și internaționale privind proprietatea intelectuală. Nu aveți dreptul să reproduceți, 
                  distribuiți sau modificați conținutul fără acordul nostru scris.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Link-uri către Site-uri Terțe
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Site-ul nostru poate conține link-uri către site-uri terțe. Nu suntem responsabili pentru conținutul sau practicile 
                  acestor site-uri terțe. Accesarea acestor link-uri se face pe propria responsabilitate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Modificări ale Termenilor
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările vor intra în vigoare 
                  imediat după publicarea pe site. Continuarea utilizării serviciilor după modificare constituie acceptarea noilor termeni.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Legea Aplicabilă și Jurisdicție
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Acești Termeni și Condiții sunt guvernați de și interpretați în conformitate cu legile României. Orice dispută 
                  rezultată din sau legată de acești termeni va fi supusă jurisdicției exclusive a instanțelor competente din România.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">
                  Contact
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Pentru întrebări despre acești Termeni și Condiții, vă rugăm să ne contactați:
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

