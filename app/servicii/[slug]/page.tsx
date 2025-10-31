'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Phone, Wrench, Settings, Droplets, Car, Shield, Clock, CheckCircle, Clock as ClockIcon, Award, HelpCircle, Battery, Gauge, Zap } from 'lucide-react'

const servicesData: Record<string, {
  title: string
  icon: any
  description: string
  longDescription: string
  longDescription2?: string
  features: string[]
  process?: string[]
  benefits?: string[]
  warranty?: string
  faq?: Array<{ question: string, answer: string }>
  image: string
  price?: string
  duration?: string
}> = {
  'reparatii-auto': {
    title: 'Reparații Auto',
    icon: Wrench,
    description: 'Reparații complete pentru toate mărcile și modelele de autovehicule',
    longDescription: 'Oferim servicii complete de reparații auto pentru toate mărcile și modelele de vehicule. Echipa noastră de mecanici specializați are experiență în reparații de motor, transmisie, suspensie, frâne și multe altele.',
    longDescription2: 'Folosim doar piese originale sau echivalente de calitate superioară, iar toate reparațiile sunt efectuate cu precizie și atenție la detalii. Beneficiezi de garanție extinsă pentru toate lucrările efectuate.',
    features: [
      'Reparații motor și transmisie',
      'Reparații suspensie și direcție',
      'Reparații sistem de frânare',
      'Reparații sistem electric și electronice',
      'Reparații caroserie',
      'Diagnoză și rezolvare rapidă'
    ],
    process: [
      'Diagnosticarea precisă a problemei',
      'Estimare costuri și timp de execuție',
      'Aprobarea de către client',
      'Reparație cu piese de calitate',
      'Testare și verificare finală',
      'Livrarea vehiculului'
    ],
    benefits: [
      'Mecanici certificați și experimentați',
      'Echipamente moderne și tehnologie de ultimă generație',
      'Piese originale sau echivalente premium',
      'Garanție extinsă pentru toate lucrările',
      'Servicii rapide și eficiente',
      'Transparență totală în procesul de reparație'
    ],
    warranty: 'Toate reparațiile beneficiază de garanție minimă 6 luni sau 10.000 km, care poate fi extinsă la cerere.',
    duration: 'Durata reparației variază în funcție de complexitatea problemei, de la câteva ore la 2-3 zile.',
    faq: [
      {
        question: 'Cât timp durează o reparație?',
        answer: 'Durata variază în funcție de complexitatea problemei. Problemele simple pot fi rezolvate în câteva ore, în timp ce reparațiile complexe pot necesita 2-3 zile.'
      },
      {
        question: 'Folosiți piese originale?',
        answer: 'Da, folosim piese originale sau echivalente de calitate superioară. Alegerea piesei se face în comun cu clientul, ținând cont de buget și preferințe.'
      },
      {
        question: 'Oferiți garanție?',
        answer: 'Da, toate reparațiile beneficiază de garanție minimă 6 luni sau 10.000 km, care poate fi extinsă la cerere.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    price: 'De la 150 RON'
  },
  'diagnoza-tehnica': {
    title: 'Diagnoză Tehnică',
    icon: Settings,
    description: 'Diagnoză computerizată cu echipamente de ultimă generație',
    longDescription: 'Folosim echipamente de diagnostic de ultimă generație pentru a identifica rapid și precis orice problemă la vehiculul tău. Diagnosticul computerizat ne permite să localizăm defecțiunile exacte.',
    longDescription2: 'Echipamentele noastre OBD-II și sistemele de diagnostic avansate pot citi codurile de eroare din toate modulele electronice ale vehiculului, oferind o imagine completă a stării tehnice.',
    features: [
      'Diagnostic computerizat complet',
      'Citire și ștergere coduri de eroare',
      'Verificare parametri motor în timp real',
      'Diagnostic sistem ABS și ESP',
      'Verificare sistem de climatizare',
      'Raport detaliat cu recomandări'
    ],
    process: [
      'Conectarea echipamentului de diagnostic',
      'Citirea tuturor modulelor electronice',
      'Analiza codurilor de eroare și parametrilor',
      'Identificarea precisă a problemei',
      'Explicație detaliată clientului',
      'Raport scris cu recomandări'
    ],
    benefits: [
      'Echipamente profesionale OBD-II',
      'Diagnostic rapid și precis',
      'Identificare probleme înainte de defecțiuni majore',
      'Raport detaliat și transparent',
      'Consultanță tehnică gratuită',
      'Economie de timp și bani'
    ],
    warranty: 'Diagnosticul este garantat precis. Dacă problema nu este identificată corect, retestăm gratuit.',
    duration: 'Diagnosticul complet durează aproximativ 30-45 minute.',
    faq: [
      {
        question: 'Cât costă un diagnostic?',
        answer: 'Diagnosticul complet costă de la 100 RON, în funcție de complexitatea verificării și numărul de module testate.'
      },
      {
        question: 'Se poate șterge codul de eroare fără reparație?',
        answer: 'Da, dar acest lucru nu rezolvă problema. Recomandăm întotdeauna să identificați și să rezolvați cauza reală pentru a preveni probleme viitoare.'
      },
      {
        question: 'Diagnosticul este inclus în reparație?',
        answer: 'Dacă alegi să faci reparația la noi, costul diagnosticului este dedus din prețul final al reparației.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    price: 'De la 100 RON'
  },
  'schimb-ulei': {
    title: 'Schimb Ulei',
    icon: Droplets,
    description: 'Schimb ulei și filtre cu produse de calitate superioară',
    longDescription: 'Serviciu de schimb ulei și filtre folosind doar produse premium. Schimbul regulat al uleiului și filtrelor este esențial pentru menținerea motorului în stare optimă.',
    longDescription2: 'Folosim uleiuri și filtre de la producători renumiți, recomandate de producătorul vehiculului tău. Schimbul se face rapid, iar verificăm și nivelul altor lichide importante.',
    features: [
      'Schimb ulei motor',
      'Schimb filtru ulei',
      'Schimb filtru aer',
      'Schimb filtru combustibil',
      'Produse premium recomandate',
      'Verificare nivel lichide'
    ],
    process: [
      'Ridicarea vehiculului pe elevator',
      'Golirea uleiului vechi',
      'Înlocuirea filtrelor',
      'Adăugarea uleiului nou',
      'Verificare nivel ulei',
      'Verificare nivel lichide (răcire, frână)'
    ],
    benefits: [
      'Uleiuri premium de la producători renumiți',
      'Filtre originale sau echivalente calitative',
      'Schimb rapid în maxim 30 minute',
      'Verificare completă lichide',
      'Documentație pentru istoric service',
      'Recomandări pentru următorul schimb'
    ],
    warranty: 'Garantăm calitatea uleiului și filtrelor folosite. Garanție 6 luni sau 10.000 km pentru serviciul efectuat.',
    duration: 'Serviciul de schimb ulei și filtre durează aproximativ 20-30 minute.',
    faq: [
      {
        question: 'La ce interval se recomandă schimbul uleiului?',
        answer: 'În general, se recomandă la fiecare 10.000-15.000 km sau o dată pe an. Intervalul exact depinde de modelul vehiculului și tipul de ulei folosit.'
      },
      {
        question: 'Ce tipuri de ulei folosiți?',
        answer: 'Folosim uleiuri sintetice și semi-sintetice de la producători renumiți, respectând specificațiile producătorului vehiculului.'
      },
      {
        question: 'Este necesar să schimb toate filtrele?',
        answer: 'Recomandăm schimbul complet (ulei + toate filtrele) pentru protecție optimă a motorului. Poți alege și schimbul parțial dacă este necesar.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    price: 'De la 80 RON'
  },
  'montaj-roti': {
    title: 'Montaj Roți',
    icon: Car,
    description: 'Montaj, echilibrare și aliniere roți pentru siguranță maximă',
    longDescription: 'Servicii complete de montaj, echilibrare și aliniere roți. Asigurăm că roțile tale sunt montate corect, echilibrate și aliniate pentru siguranță și confort maxim.',
    longDescription2: 'Folosim echipamente profesionale pentru echilibrare și aliniere precisă. O geometrie corectă prelungește durata de viață a anvelopelor și îmbunătățește siguranța condusului.',
    features: [
      'Montaj și demontaj roți',
      'Echilibrare roți profesională',
      'Aliniere geometrie',
      'Verificare presiune anvelope',
      'Schimb pneuri (vară/iarnă)',
      'Control uzură anvelope'
    ],
    process: [
      'Verificare starea anvelopelor',
      'Montaj/demontaj roți',
      'Echilibrare precisă pe echipament profesional',
      'Aliniere geometrie roți',
      'Verificare și ajustare presiune',
      'Testare pe drum și verificare finală'
    ],
    benefits: [
      'Echipamente profesionale de precizie',
      'Echilibrare perfectă pentru confort',
      'Geometrie corectă pentru uzură uniformă',
      'Prelungire durata de viață anvelope',
      'Siguranță sporită la condus',
      'Consum optim de combustibil'
    ],
    warranty: 'Garanție 3 luni pentru echilibrare și aliniere. Dacă apare problema din nou, reparam gratuit.',
    duration: 'Montaj și echilibrare durează 30-45 minute. Alinierea poate dura 1-2 ore pentru geometrie completă.',
    faq: [
      {
        question: 'Cât de des trebuie echilibrate roțile?',
        answer: 'Se recomandă echilibrarea la fiecare schimb de roți (vară/iarnă) sau când observi vibrații la volan. La fiecare 10.000 km este un interval bun.'
      },
      {
        question: 'Când este necesară alinierea?',
        answer: 'Alinierea este necesară când observi uzură neuniformă a anvelopelor, când mașina trage într-o parte, sau după impacturi majore (borduri, gropi).'
      },
      {
        question: 'Păstrezi roțile iernii?',
        answer: 'Da, oferim serviciu de depozitare roți pentru sezonul nefolosit, cu condiții optimale de păstrare.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    price: 'De la 60 RON'
  },
  'itp': {
    title: 'ITP',
    icon: Shield,
    description: 'Inspecție tehnică periodică și pregătire pentru ITP',
    longDescription: 'Te ajutăm să treci ITP-ul cu succes prin pregătirea completă a vehiculului. Verificăm toate componentele esențiale înainte de inspecție.',
    longDescription2: 'Realizăm o verificare completă pre-ITP pentru a identifica orice problemă înainte de inspecție. Astfel, vei putea rezolva problemele și vei trece ITP-ul fără refuz.',
    features: [
      'Pregătire completă ITP',
      'Verificare frâne și suspensie',
      'Verificare sistem iluminare',
      'Verificare emisii poluante',
      'Consultanță înainte de inspecție',
      'Service pentru trecere ITP'
    ],
    process: [
      'Verificare completă pre-ITP',
      'Testare sistem frânare',
      'Verificare suspensie și direcție',
      'Control sistem iluminare',
      'Măsurare emisii poluante',
      'Listă cu probleme identificate și soluții',
      'Reparații necesare',
      'Retestare după reparații'
    ],
    benefits: [
      'Verificare completă înainte de ITP',
      'Identificare preventivă a problemelor',
      'Economie de timp și bani',
      'Treci ITP-ul din prima',
      'Consultanță expertă gratuită',
      'Servicii complete sub un singur acoperiș'
    ],
    warranty: 'Garantăm că după pregătirea noastră vei trece ITP-ul. Dacă apare refuz din cauza unui aspect pe care nu l-am verificat, refacem verificarea gratuit.',
    duration: 'Verificarea pre-ITP durează aproximativ 1-2 ore, în funcție de complexitatea vehiculului.',
    faq: [
      {
        question: 'Cât costă pregătirea pentru ITP?',
        answer: 'Verificarea pre-ITP costă de la 200 RON. Dacă sunt necesare reparații, costul este separat și îl discutăm înainte.'
      },
      {
        question: 'Garantează că voi trece ITP-ul?',
        answer: 'După pregătirea completă și rezolvarea tuturor problemelor identificate, garantăm că vei trece ITP-ul. Dacă apare refuz din cauza unui aspect pe care nu l-am verificat, refacem verificarea gratuit.'
      },
      {
        question: 'Cât timp înainte de ITP recomandați verificarea?',
        answer: 'Recomandăm să faci verificarea cu 1-2 săptămâni înainte de ITP, pentru a avea timp să rezolvi eventualele probleme identificate.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    price: 'De la 200 RON'
  },
  'service-rapid': {
    title: 'Service Rapid',
    icon: Clock,
    description: 'Reparații rapide pentru probleme minore și urgente',
    longDescription: 'Service rapid pentru reparații urgente și probleme minore. Rezolvăm rapid problemele care te împiedică să folosești vehiculul în siguranță.',
    longDescription2: 'Perfect pentru reparații care nu necesită timp de așteptare îndelungat. Prioritizăm serviciile rapide și te anunțăm imediat când este gata.',
    features: [
      'Reparații urgente',
      'Schimb baterie',
      'Reparații pneuri',
      'Schimb becuri',
      'Servicii în maxim 2 ore',
      'Disponibil și în weekend'
    ],
    process: [
      'Evaluare rapidă a problemei',
      'Estimare timp și cost',
      'Aprobare client',
      'Reparație rapidă',
      'Testare și verificare',
      'Livrare vehicul'
    ],
    benefits: [
      'Reparații în maxim 2 ore',
      'Servicii și în weekend',
      'Piese în stoc pentru probleme comune',
      'Prețuri accesibile',
      'Nu rămâi fără mașină',
      'Rezolvare rapidă pentru probleme urgente'
    ],
    warranty: 'Toate reparațiile rapide beneficiază de aceeași garanție ca serviciile standard - 6 luni sau 10.000 km.',
    duration: 'Majoritatea serviciilor rapide sunt finalizate în 1-2 ore, maxim o zi lucrătoare.',
    faq: [
      {
        question: 'Ce tipuri de reparații se pot face rapid?',
        answer: 'Reparații simple: schimb baterie, becuri, furtune, reparații minore la sistem electric, schimb ulei rapid, montaj roți, etc.'
      },
      {
        question: 'Oferiți servicii rapide în weekend?',
        answer: 'Da, oferim servicii rapide și sâmbăta între 09:00-14:00. Pentru urgente, poți suna pentru programare specială.'
      },
      {
        question: 'Cum prioritezi serviciile rapide?',
        answer: 'Serviciile rapide sunt finalizate în ordinea sosirii, dar pentru situații adevărat urgente (ex: mașină blocată), găsim soluții flexibile.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    price: 'De la 50 RON'
  },
  'sistem-electric': {
    title: 'Sistem Electric',
    icon: Battery,
    description: 'Reparații și înlocuiri pentru sistemul electric al vehiculului',
    longDescription: 'Oferim servicii complete de reparații și întreținere pentru sistemul electric al vehiculului. De la baterie la alternator, de la starter la sistemul de încărcare, ne ocupăm de toate componentele electrice.',
    longDescription2: 'Folosim echipamente profesionale pentru diagnosticarea problemelor electrice și pentru înlocuirea componentelor defecte. Toate lucrările sunt efectuate cu precizie și respectă standardele de siguranță.',
    features: [
      'Reparații baterie și încărcare',
      'Înlocuire alternator',
      'Reparații starter',
      'Diagnostic sistem electric',
      'Reparații cabluri și siguranțe',
      'Instalare accesorii electrice'
    ],
    process: [
      'Diagnostic sistem electric complet',
      'Identificare componentă defectă',
      'Estimare costuri și timp',
      'Aprobare client',
      'Înlocuire sau reparație componentă',
      'Testare și verificare finală'
    ],
    benefits: [
      'Diagnostic precis cu echipamente specializate',
      'Componente originale sau echivalente premium',
      'Reparații rapide și eficiente',
      'Garanție pe toate componentele',
      'Experiență în toate mărcile',
      'Soluții personalizate pentru fiecare problemă'
    ],
    warranty: 'Toate componentele electrice montate beneficiază de garanție minimă 6 luni sau 10.000 km.',
    duration: 'Reparațiile electrice simple durează 1-2 ore. Pentru înlocuiri majore (alternator, starter), durata este de 2-4 ore.',
    faq: [
      {
        question: 'Cum știu dacă am o problemă cu sistemul electric?',
        answer: 'Semne comune: baterie descărcată frecvent, becuri care nu funcționează, probleme la pornire, aprindere a indicatorului de baterie pe bord. Recomandăm un diagnostic complet.'
      },
      {
        question: 'Cât costă înlocuirea unei baterii?',
        answer: 'Costul variază în funcție de tipul de baterie necesar (tipul și capacitatea). În general, costurile încep de la 200 RON, incluzând montajul.'
      },
      {
        question: 'Oferiți garantie pe baterii?',
        answer: 'Da, bateriile noi beneficiază de garanție de la producător (de obicei 1-2 ani). Asigurăm și garanție pe serviciul de montaj.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    price: 'De la 100 RON'
  },
  'sistem-de-racire': {
    title: 'Sistem de Răcire',
    icon: Gauge,
    description: 'Reparații și întreținere sistem de răcire motor',
    longDescription: 'Sistemul de răcire este esențial pentru funcționarea corectă a motorului. Oferim servicii complete de reparații, întreținere și înlocuire pentru toate componentele sistemului de răcire.',
    longDescription2: 'De la radiator la termostat, de la pompa de apă la schimbul de antigel, ne asigurăm că sistemul de răcire funcționează perfect pentru a prelungi durata de viață a motorului.',
    features: [
      'Reparații radiator',
      'Înlocuire termostat',
      'Reparații pompa de apă',
      'Schimb antigel',
      'Curgere și diagnostic',
      'Purjare și umplere sistem'
    ],
    process: [
      'Verificare sistem de răcire',
      'Diagnostic probleme (curgeri, blocaje)',
      'Identificare componentă defectă',
      'Estimare costuri și timp',
      'Reparație sau înlocuire',
      'Umplere cu antigel și testare'
    ],
    benefits: [
      'Componente de calitate superioară',
      'Antigel premium recomandat',
      'Reparații durabile',
      'Verificare completă a sistemului',
      'Prevenire supraîncălzire motor',
      'Economie pe termen lung'
    ],
    warranty: 'Toate reparațiile sistemului de răcire beneficiază de garanție minimă 6 luni sau 10.000 km.',
    duration: 'Schimbul de antigel durează 30-45 minute. Pentru reparații majore (radiator, pompa de apă), durata este de 2-4 ore.',
    faq: [
      {
        question: 'Cât de des trebuie schimbat antigelul?',
        answer: 'Se recomandă schimbul de antigel la fiecare 2 ani sau 40.000-60.000 km, în funcție de tipul de antigel folosit și de specificațiile producătorului.'
      },
      {
        question: 'Cum știu dacă sistemul de răcire are probleme?',
        answer: 'Semne comune: supraîncălzire motorului, antigel scăzut frecvent, zgomote neobișnuite, indicator de temperatură ridicată pe bord. Consultă-ne pentru un diagnostic complet.'
      },
      {
        question: 'Ce tip de antigel folosiți?',
        answer: 'Folosim antigel premium recomandat de producătorul vehiculului. Alegem întotdeauna antigelul potrivit pentru modelul tău de mașină.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    price: 'De la 150 RON'
  },
  'sistem-de-franare': {
    title: 'Sistem de Frânare',
    icon: Zap,
    description: 'Reparații complete sistem de frânare pentru siguranță',
    longDescription: 'Sistemul de frânare este unul dintre cele mai importante pentru siguranța ta. Oferim servicii complete de reparații, înlocuire și întreținere pentru toate componentele sistemului de frânare.',
    longDescription2: 'Folosim doar piese premium pentru sistemul de frânare, asigurându-ne că frânele tale funcționează perfect. Siguranța ta este prioritatea noastră.',
    features: [
      'Înlocuire plăcuțe frână',
      'Înlocuire discuri frână',
      'Schimb lichid frână',
      'Reparații cilindri frână',
      'Verificare sistem ABS',
      'Reparații frână de mână'
    ],
    process: [
      'Verificare completă sistem frânare',
      'Diagnostic uzură componente',
      'Măsurare grosime discuri',
      'Estimare costuri și recomandări',
      'Aprobare client',
      'Înlocuire componente și testare'
    ],
    benefits: [
      'Piese premium pentru siguranță maximă',
      'Verificare completă sistem',
      'Reparații conforme standardelor',
      'Testare profesională după reparație',
      'Consultanță pentru menținere',
      'Siguranță garantată'
    ],
    warranty: 'Toate componentele sistemului de frânare beneficiază de garanție minimă 6 luni sau 10.000 km, cu verificare gratuită după 1000 km.',
    duration: 'Înlocuirea plăcuțelor de frână durează 1-2 ore. Pentru înlocuirea discurilor și lichidului, durata este de 2-3 ore.',
    faq: [
      {
        question: 'Când trebuie schimbate plăcuțele de frână?',
        answer: 'În general, plăcuțele de frână se schimbă la fiecare 20.000-40.000 km, dar variază în funcție de stilul de condus și de tipul de vehicul. Recomandăm verificarea la fiecare 10.000 km.'
      },
      {
        question: 'Cum știu dacă trebuie să schimb plăcuțele?',
        answer: 'Semne comune: zgomot la frânare (scârțâit), distanță de frânare mai mare, vibrații la pedala de frână, indicator pe bord. Consultă-ne pentru o verificare profesională.'
      },
      {
        question: 'Oferiți servicii pentru toate tipurile de frâne?',
        answer: 'Da, lucrăm cu toate tipurile de frâne: disc, tambur, ABS, ESP. Avem experiență cu toate mărcile și modelele de vehicule.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    price: 'De la 200 RON'
  }
}

export default function ServicePage() {
  const params = useParams()
  const slug = params?.slug as string
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const service = servicesData[slug]

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Serviciu negăsit</h1>
          <Link href="/servicii" className="text-primary-400 hover:text-primary-300">
            ← Înapoi la Servicii
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = service.icon

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link 
              href="/servicii"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Înapoi la Servicii</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-r ${service.title === 'Reparații Auto' ? 'from-red-500 to-red-600' : service.title === 'Diagnoză Tehnică' ? 'from-blue-500 to-blue-600' : service.title === 'Schimb Ulei' ? 'from-green-500 to-green-600' : service.title === 'Montaj Roți' ? 'from-purple-500 to-purple-600' : service.title === 'ITP' ? 'from-orange-500 to-orange-600' : 'from-pink-500 to-pink-600'} rounded-xl p-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {service.longDescription}
              </p>
              {service.price && (
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-2xl font-black text-primary-400">{service.price}</span>
                  {service.duration && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <ClockIcon className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  )}
                </div>
              )}
              {service.longDescription2 && (
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.longDescription2}
                </p>
              )}
              <a
                href="tel:0726226622"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Programează o Vizită</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary-500/20">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Ce <span className="text-gradient">Include</span> Serviciul?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 flex items-center gap-3"
                >
                  <div className="bg-primary-500/20 rounded-lg p-2">
                    <IconComponent className="h-5 w-5 text-primary-400" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <section className="py-16 bg-dark-800/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
                Cum <span className="text-gradient">Funcționează</span>?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center font-black text-white">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 glass-card p-4">
                        <p className="text-white font-medium">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
                De Ce <span className="text-gradient">Să Ne Alegi</span>?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="glass-card p-6 rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary-400 flex-shrink-0 mt-1" />
                      <span className="text-white font-medium">{benefit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Warranty Section */}
      {service.warranty && (
        <section className="py-16 bg-dark-800/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-card-strong p-8 rounded-2xl border-2 border-primary-500/30">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/20 rounded-xl p-3">
                    <Award className="h-8 w-8 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-3">Garanție</h3>
                    <p className="text-gray-300 leading-relaxed">{service.warranty}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
                Întrebări <span className="text-gradient">Frecvente</span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {service.faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="glass-card p-6 rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-primary-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-black text-white mb-2">{item.question}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500/10 via-primary-600/10 to-primary-500/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Gata să Începi?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contactează-ne acum pentru o programare sau pentru mai multe informații
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0726226622"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Sună Acum</span>
              </a>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <span>Trimite Mesaj</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

