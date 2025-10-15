# Bet Auto Service - Site Web

Site web profesional pentru Bet Auto Service, un service auto din București.

## Tehnologii Folosite

- **Next.js 14** - Framework React cu App Router
- **TypeScript** - Tipizare statică
- **Tailwind CSS** - Framework CSS pentru styling
- **Framer Motion** - Animații și tranziții
- **Lucide React** - Iconițe moderne

## Caracteristici

- ✅ Design responsive și modern
- ✅ Animații smooth și hover effects
- ✅ SEO optimizat
- ✅ Formular de contact funcțional
- ✅ Hartă Google Maps integrată
- ✅ Navigație fixă cu scroll
- ✅ Pagini complete: Acasă, Servicii, Despre Noi, Contact

## Instalare și Rulare

### Cerințe
- Node.js 18+ 
- npm sau yarn

### Pași de instalare

1. **Clonează repository-ul**
   ```bash
   git clone <repository-url>
   cd bet-auto-service
   ```

2. **Instalează dependențele**
   ```bash
   npm install
   # sau
   yarn install
   ```

3. **Rulează în modul development**
   ```bash
   npm run dev
   # sau
   yarn dev
   ```

4. **Deschide în browser**
   ```
   http://localhost:3000
   ```

### Build pentru producție

```bash
npm run build
npm start
```

## Structura Proiectului

```
bet-auto-service/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Stiluri globale
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Pagina Acasă
│   ├── servicii/          # Pagina Servicii
│   ├── despre-noi/        # Pagina Despre Noi
│   ├── contact/           # Pagina Contact
│   ├── sitemap.ts         # Sitemap XML
│   ├── robots.ts          # Robots.txt
│   └── manifest.ts        # PWA Manifest
├── components/            # Componente React
│   ├── Navigation.tsx     # Navigația principală
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Secțiunea hero
│   ├── ServicesPreview.tsx # Preview servicii
│   ├── AboutPreview.tsx   # Preview despre noi
│   ├── ContactPreview.tsx # Preview contact
│   ├── Testimonials.tsx   # Testimoniale
│   ├── ServicesList.tsx   # Lista servicii
│   ├── ServiceDetails.tsx # Detalii servicii
│   ├── AboutHero.tsx      # Hero despre noi
│   ├── HistorySection.tsx # Istoric
│   ├── ValuesSection.tsx  # Valori
│   ├── TeamSection.tsx    # Echipă
│   ├── ContactHero.tsx    # Hero contact
│   ├── ContactForm.tsx    # Formular contact
│   ├── ContactInfo.tsx    # Info contact
│   └── MapSection.tsx     # Hartă
├── public/                # Fișiere statice
├── package.json           # Dependențe
├── tailwind.config.js     # Configurare Tailwind
├── next.config.js         # Configurare Next.js
└── tsconfig.json          # Configurare TypeScript
```

## Personalizare

### Culori
Culorile pot fi modificate în `tailwind.config.js`:
- Primary (galben): `#facc15`
- Dark (negru): `#1a1a1a`

### Conținut
- Informațiile de contact sunt în componentele respective
- Adresa: Strada Drumul Garii 8, București 077085
- Telefon: 0726226622

### Imagini
Imaginile sunt încărcate de pe Unsplash. Pentru a folosi imagini proprii:
1. Adaugă imaginile în folderul `public/`
2. Actualizează URL-urile în componente

## Deployment

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Configurează variabilele de mediu (dacă sunt necesare)
3. Deploy automat la fiecare push

### Netlify
1. Conectează repository-ul la Netlify
2. Configurează build command: `npm run build`
3. Configurează publish directory: `.next`

### VPS/Server propriu
1. Rulează `npm run build`
2. Configurează un server web (Nginx/Apache)
3. Servește folderul `.next`

## SEO

Site-ul este optimizat pentru SEO cu:
- Meta tags complete
- Sitemap XML
- Robots.txt
- Schema markup (poate fi adăugat)
- Imagini cu ALT text
- URL-uri SEO-friendly

## Suport

Pentru întrebări sau probleme, contactează:
- Email: contact@betautoservice.ro
- Telefon: 0726226622
