'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Wrench, Sparkles } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: 'Acasă', href: '/' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Despre Noi', href: '/despre-noi' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-xl shadow-2xl border-b border-white/5' 
          : 'bg-dark-900/60 backdrop-blur-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-10">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-primary-500/30 rounded-xl blur-lg group-hover:bg-primary-500/50 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-lg group-hover:shadow-primary-500/50 transition-all duration-500">
                <Wrench className="h-7 w-7 text-black" />
              </div>
            </motion.div>
            <div>
              <h1 className="text-2xl font-black text-white group-hover:text-primary-400 transition-colors duration-300">
                Bet Auto Service
              </h1>
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-primary-400" />
                <p className="text-xs text-gray-400 font-medium">Service Auto Profesional</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-white/90 hover:text-white font-semibold transition-all duration-300 px-4 py-2 rounded-lg group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-primary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <motion.span 
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            <motion.a
              href="tel:0726226622"
              className="btn-primary flex items-center space-x-2 ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">0726226622</span>
              <span className="lg:hidden">Sună</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary-400 transition-colors duration-300 relative z-50 p-2"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-7 w-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-7 w-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-dark-900/95 backdrop-blur-xl z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="md:hidden fixed top-24 right-0 bottom-0 w-80 bg-dark-900/98 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-40 overflow-y-auto"
              >
                <div className="p-8 space-y-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-white hover:text-primary-400 font-bold text-xl transition-colors duration-300 py-3 border-b border-white/5"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.a
                    href="tel:0726226622"
                    className="btn-primary flex items-center justify-center space-x-2 w-full mt-8"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Phone className="h-5 w-5" />
                    <span>0726226622</span>
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
