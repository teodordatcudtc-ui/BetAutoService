import Link from 'next/link'
import { Phone, MapPin, Clock, Wrench, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-500 p-2 rounded-lg">
                  <Wrench className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">Bet Auto Service</h3>
              </div>
              <p className="text-gray-400">
                Service auto profesional în București cu peste 10 ani de experiență în domeniu.
              </p>
              <div className="flex space-x-4">
                <a href="tel:0726226622" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="mailto:contact@betautoservice.ro" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Link-uri Rapide</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    Acasă
                  </Link>
                </li>
                <li>
                  <Link href="/servicii" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    Servicii
                  </Link>
                </li>
                <li>
                  <Link href="/despre-noi" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    Despre Noi
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Servicii Principale</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Reparații Auto</li>
                <li>Diagnoză Tehnică</li>
                <li>Schimb Ulei</li>
                <li>Montaj Roți</li>
                <li>ITP</li>
                <li>Service General</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">
                      Strada Drumul Garii 8<br />
                      București 077085
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <a href="tel:0726226622" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    0726226622
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p>Luni - Vineri: 08:00 - 18:00</p>
                    <p>Sâmbătă: 09:00 - 14:00</p>
                    <p>Duminică: Închis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Bet Auto Service. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-confidentialitate" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Politica de Confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
