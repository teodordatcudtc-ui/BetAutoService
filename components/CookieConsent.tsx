'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings, Cookie, Check, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      const saved = JSON.parse(consent)
      setPreferences(saved)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    setShowBanner(false)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    setPreferences(onlyNecessary)
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary))
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="glass-card-strong p-6 lg:p-8 rounded-2xl border-2 border-primary-500/30 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Icon & Content */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-primary-500/20 rounded-xl p-3 flex-shrink-0">
                      <Cookie className="h-6 w-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-2">
                        Folosim Cookie-uri
                      </h3>
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                        Folosim cookie-uri pentru a îmbunătăți experiența ta pe site, pentru analiză și pentru personalizare.{' '}
                        <Link 
                          href="/politica-cookie-uri" 
                          className="text-primary-400 hover:text-primary-300 underline font-semibold"
                        >
                          Află mai multe
                        </Link>
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={acceptAll}
                          className="btn-primary text-sm px-6 py-2.5 flex items-center gap-2"
                        >
                          <Check className="h-4 w-4" />
                          Acceptă Toate
                        </button>
                        <button
                          onClick={() => setShowSettings(true)}
                          className="btn-secondary text-sm px-6 py-2.5 flex items-center gap-2"
                        >
                          <Settings className="h-4 w-4" />
                          Setări
                        </button>
                        <button
                          onClick={rejectAll}
                          className="px-6 py-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          Respinge
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Close Button */}
                  <button
                    onClick={rejectAll}
                    className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 flex-shrink-0"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card-strong p-8 rounded-2xl border-2 border-primary-500/30 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-white flex items-center gap-3">
                  <Settings className="h-6 w-6 text-primary-400" />
                  Setări Cookie-uri
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Poți gestiona preferințele tale pentru cookie-uri mai jos. Anulează cookie-urile care nu dorești să fie stocate.
              </p>

              <div className="space-y-6 mb-8">
                {/* Necessary Cookies */}
                <div className="glass-card p-5 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-black text-white mb-1">Cookie-uri Necesare</h3>
                      <p className="text-sm text-gray-400">
                        Esențiale pentru funcționarea site-ului
                      </p>
                    </div>
                    <div className="bg-primary-500/20 px-3 py-1 rounded-lg">
                      <span className="text-xs font-semibold text-primary-400">Întotdeauna Activate</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Aceste cookie-uri sunt necesare pentru funcționarea de bază a site-ului și nu pot fi dezactivate.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="glass-card p-5 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-black text-white mb-1">Cookie-uri Analitică</h3>
                      <p className="text-sm text-gray-400">
                        Ne ajută să înțelegem cum folosești site-ul
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference('analytics', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Aceste cookie-uri colectează informații despre modul în care folosești site-ul pentru a ne ajuta să îl îmbunătățim.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="glass-card p-5 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-black text-white mb-1">Cookie-uri Marketing</h3>
                      <p className="text-sm text-gray-400">
                        Pentru personalizare și publicitate
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => updatePreference('marketing', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Aceste cookie-uri sunt folosite pentru a oferi conținut personalizat și pentru rețelele sociale.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={savePreferences}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  Salvează Preferințe
                </button>
                <Link
                  href="/politica-cookie-uri"
                  className="btn-secondary flex-1 flex items-center justify-center gap-2"
                >
                  Citește Politica
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

