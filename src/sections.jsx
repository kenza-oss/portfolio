import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ArrowRight, Mail, Linkedin, MapPin, Github, Send, CheckCircle2, ExternalLink, Phone, X, ZoomIn } from 'lucide-react';
import { fadeUp, stagger } from './components.jsx';

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const projects = [
  { 
    title: 'Wear Plakkies', 
    category: 'Web Apps',
    description: 'Development and maintenance of a modern high-conversion e-commerce platform with responsive UI, dynamic cart, and optimized checkout flow.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&fit=crop',
    liveUrl: '/demos/wear-plakkies.html',
    githubUrl: 'https://github.com/kenza-oss'
  },
  { 
    title: 'AI Voice Chatbot', 
    category: 'AI',
    description: 'Implemented advanced speech synthesis (TTS) and recognition (STT) pipeline achieving human-like conversational fluidity with sub-200ms latency.',
    tags: ['Python', 'Speech Synthesis', 'FastAPI', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&fit=crop',
    liveUrl: '/demos/ai-voice-chatbot.html',
    githubUrl: 'https://github.com/kenza-oss'
  },
  { 
    title: 'Laxmi Hyundai - AI Assistant', 
    category: 'AI',
    description: 'Conversational AI integration for an automotive dealership portal, improving visitor engagement, vehicle comparison, and lead qualification.',
    tags: ['Chatbot', 'OpenAI', 'GPT-4o', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&fit=crop',
    liveUrl: '/demos/ai-chatbot-automotive.html',
    githubUrl: 'https://github.com/kenza-oss'
  },
  { 
    title: 'Learning Management System (LMS)', 
    category: 'Backend',
    description: 'Engineered a scalable LMS backend architecture with role-based access control (RBAC), student progress tracking, and secure RESTful endpoints.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript', 'Docker'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&fit=crop',
    liveUrl: '/demos/lms-backend.html',
    githubUrl: 'https://github.com/kenza-oss'
  },
  { 
    title: 'Enterprise Microservices & Cloud API', 
    category: 'Backend',
    description: 'High-throughput microservices architecture with distributed Redis caching, JWT security, connection pooling, and Docker containerization.',
    tags: ['Node.js', 'Docker', 'Redis', 'PostgreSQL', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&fit=crop',
    liveUrl: '/demos/microservices-api.html',
    githubUrl: 'https://github.com/kenza-oss'
  },
  { 
    title: 'FlirtBox Mobile App', 
    category: 'Mobile',
    description: 'Matchmaking mobile application combining interactive social discovery, audio rooms, and low-latency WebRTC infrastructure.',
    tags: ['Flutter', 'React Native', 'Dart', 'Firebase', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&fit=crop',
    liveUrl: '/demos/flirtbox-mobile.html',
    githubUrl: 'https://github.com/kenza-oss'
  },
  { 
    title: 'Financial Analytics & Market Dashboard', 
    category: 'Web Apps',
    description: 'Interactive analytics dashboard for real-time market data visualization, portfolio tracking, asset allocation breakdown, and automated performance reporting.',
    tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'ExpressJS'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&fit=crop',
    liveUrl: '/demos/financial-dashboard.html',
    githubUrl: 'https://github.com/kenza-oss'
  },
  { 
    title: 'RAE Engineering - Web3 Integrity', 
    category: 'Web3',
    description: 'Decentralized asset integrity registry and verification platform for critical mechanical equipment and pressure piping anchored on Ethereum.',
    tags: ['Web3', 'Solidity', 'Next.js', 'TypeScript', 'Ethereum'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&fit=crop',
    liveUrl: '/demos/web3-integrity.html',
    githubUrl: 'https://github.com/kenza-oss'
  },
  { 
    title: 'MCP for Memorization - Mem0.ai', 
    category: 'AI',
    description: 'Model Context Protocol integration providing persistent episodic memory and personalized context recall for autonomous AI agents.',
    tags: ['Python', 'FastAPI', 'LangChain', 'AWS', 'Vector DB'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&fit=crop',
    liveUrl: '/demos/mem0-ai.html',
    githubUrl: 'https://github.com/kenza-oss'
  },
  { 
    title: 'The Altman Brothers - Luxury Real Estate', 
    category: 'Web Apps',
    description: 'High-performance real estate portal with custom MLS search filters, interactive property maps, high-definition architectural showcases, and inquiry routing.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'HubSpot API'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&fit=crop',
    liveUrl: '/demos/luxury-real-estate.html',
    githubUrl: 'https://github.com/kenza-oss'
  }
];

const S = { fontFamily:'Space Mono,monospace' };

export const Projects = () => {
  const [filter, setFilter] = useState('All Projects');
  const filters = ['All Projects', 'Web Apps', 'Mobile', 'Backend', 'AI', 'Web3'];
  
  const filteredProjects = filter === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-32 z-10 border-t border-gray-100 bg-transparent">
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
        
        {/* Header Section */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="flex flex-col items-center text-center mb-16">
          <motion.h2 variants={fadeUp} className="font-heading font-black tracking-tight mb-6" style={{ fontSize:'clamp(2rem,4vw,3.5rem)' }}>
            <span className="text-gray-900">My </span>
            <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.2)]">Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 text-[15px] max-w-2xl leading-relaxed mb-10">
            Explore a selection of my recent work showcasing my skills and expertise across different technologies and domains.
          </motion.p>
          
          {/* Filters */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            {filters.map(f => (
              <button key={f} 
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all border ${
                  filter === f 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                  : 'bg-white border-gray-200 text-gray-500 hover:border-blue-600/50 hover:text-blue-600 shadow-sm'
                }`}>
                {f}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:32 }}>
          {filteredProjects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay: i * 0.1, duration:0.5 }}
              className="glass-card flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-blue-600/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full group">

              {/* Project Image */}
              <div className="relative h-[240px] overflow-hidden border-b border-gray-100 bg-gray-50">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-gray-900 text-[22px] mb-4 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-grow">{p.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 border border-blue-100 text-blue-600">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons (Connected & Functional) */}
                <div className="flex gap-4">
                  <a 
                    href={p.liveUrl !== '#' ? p.liveUrl : '#contact'} 
                    target={p.liveUrl !== '#' ? "_blank" : "_self"} 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group/btn"
                  >
                    <span>Live Demo</span> <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                  <a 
                    href={p.githubUrl || 'https://github.com/kenza-oss'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 border border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-[13px] font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-blue-50 shadow-sm"
                  >
                    <Github size={14} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── EXPERIENCE (From Official CV) ── */
const exps = [
  { 
    role: 'Responsable Infrastructure & Support Technique', 
    company: 'Kleer Infini • Projet B2B Export', 
    period: 'Janv. 2026 — Avril 2026', 
    type: 'Full-Time', 
    dot: '#2563EB',
    items: [
      'Architecture Cloud & Admin : Déploiement et gestion de l\'infrastructure Cloud complète (Render, Supabase, Cloudinary) avec monitoring proactif.',
      'Sécurité des Accès : Sécurisation des endpoints API (REST, OAuth2/JWT) et politique de contrôle d\'accès strict (RBAC).',
      'Optimisation des Performances : Distribution CDN et optimisation des flux médias, réduisant la latence globale de 45 %.',
      'Supervision & Encadrement : Formation technique des développeurs et stagiaires aux standards de sécurité et déploiement continu.'
    ] 
  },
  { 
    role: 'Administratrice Réseau & Intégratrice Système', 
    company: 'Kleergo • Plateforme Logistique Intelligente', 
    period: '2025 — 2026', 
    type: 'Contract', 
    dot: '#0891B2',
    items: [
      'DevOps & CI/CD : Automatisation complète des pipelines de test et déploiement continu via GitHub Actions.',
      'Flux Temps Réel : Configuration et supervision des communications temps réel (WebSockets & APIs REST) pour la géolocalisation.',
      'Supervision & Haute Disponibilité : Tests d\'intégration et suivi des performances système assurant une haute disponibilité du service.'
    ] 
  },
  { 
    role: 'Analyste Sécurité Réseau & Auditeuse', 
    company: 'Keystone • Audit & Cybersécurité', 
    period: '2025', 
    type: 'Stage', 
    dot: '#7C3AED',
    items: [
      'Hardening & Correctifs : Détection des failles logiques et réseau, implémentation des correctifs de sécurité prioritaires.',
      'Conformité OWASP : Rédaction de rapports d\'audit exhaustifs et préconisations d\'atténuation basées sur l\'OWASP Top 10.'
    ] 
  }
];

export const Experience = () => (
  <section id="experience" className="relative py-32 z-10 border-t border-gray-100 bg-transparent">
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:80 }}>
        <motion.p variants={fadeUp} className="section-label text-blue-600" style={{ marginBottom:20 }}>Career Path</motion.p>
        <motion.h2 variants={fadeUp} className="font-heading font-black text-gray-900 tracking-[-0.04em]" style={{ fontSize:'clamp(2.5rem,5vw,5rem)' }}>
          PROFESSIONAL<br /><span className="text-blue-600">EXPERIENCE</span>
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
        {/* Sidebar */}
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          {[
            { Icon:GraduationCap, title:'ESGI Paris', sub:"Bachelor en Ingénierie Informatique · Systèmes, Réseaux & Cloud (2025)" },
            { Icon:Award, title:'Cisco Certified CCNA', sub:"Score Exceptionnel : 94% (Certification 2026)" },
            { Icon:MapPin, title:'Alger, Algérie', sub:'Sidi M\'Hamed, Birtouta · Remote disponible monde entier' },
          ].map(({ Icon, title, sub }) => (
            <div key={title} className="glass-card bg-gray-50 border border-gray-200" style={{ padding:20 }}>
              <Icon size={24} className="text-blue-600 mb-2" />
              <p className="font-heading font-bold text-gray-900 mb-1 text-sm">{title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{sub}</p>
            </div>
          ))}
          <div className="glass-card bg-gray-50 border border-gray-200" style={{ padding:20 }}>
            {[['94%','Cisco CCNA Score'],['100%','Uptime & Security'],['3+','Years Tech Practice']].map(([n,l]) => (
              <div key={l} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0', borderBottom:'1px solid rgba(0,0,0,0.05)' }}>
                <span className="text-xs text-gray-500">{l}</span>
                <span className="font-heading font-black text-lg text-blue-600">{n}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Timeline */}
        <div>
          {exps.map((e, i) => (
            <motion.div key={i} initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.1 }}
              className="timeline-item" style={{ position:'relative', paddingLeft:56, paddingBottom:48 }}>
              <div style={{ position:'absolute', left:0, top:4, width:40, height:40, borderRadius:'50%',
                background:e.dot, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                boxShadow:`0 0 15px ${e.dot}40` }}>
                <Briefcase size={16} color="#fff" />
              </div>
              <div className="glass-card bg-white border border-gray-100 shadow-sm" style={{ padding:28 }}>
                <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:16 }}>
                  <div>
                    <h3 className="font-heading font-black text-gray-900 text-[1.15rem]">{e.role}</h3>
                    <p className="text-[13px] text-gray-500 mt-1 font-medium">{e.company}</p>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <span style={{ ...S }} className="text-[11px] text-blue-600 font-bold block">{e.period}</span>
                    <span style={{ ...S }} className="text-[10px] text-gray-400 block mt-[2px]">{e.type}</span>
                  </div>
                </div>
                <ul style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {e.items.map((a,j) => (
                    <li key={j} className="flex gap-[10px] items-start text-[13px] text-gray-600 leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]" style={{ background: e.dot }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── TESTIMONIALS ── */
const testimonials = [
  { 
    name: 'Karim Benali', 
    role: 'Lead Architect @ Kleergo Logistique', 
    text: "Kenza a fait un travail remarquable sur l'automatisation de nos pipelines CI/CD et la supervision réseau temps réel. Sa rigueur sur la sécurité réseau et les protocoles est exemplaire.", 
    avatar: 'KB' 
  },
  { 
    name: 'Prof. Laurent Mercier', 
    role: 'Responsable Pédagogique Systèmes & Réseaux @ ESGI Paris', 
    text: "Une étudiante brillante et investie. Avec un score de 94 % à la certification Cisco CCNA et une excellente maîtrise des architectures cloud, Kenza allie théorie solide et grande autonomie pratique.", 
    avatar: 'LM' 
  },
  { 
    name: 'Amine Rahmani', 
    role: 'Directeur Général @ Kleer Infini', 
    text: "Kenza a structuré toute notre infrastructure cloud avec un professionnalisme rare. Sécurisation OAuth2/JWT, distribution CDN et disponibilité sans faille en production. Une collaboratrice de très haut niveau.", 
    avatar: 'AR' 
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="relative py-32 z-10 border-t border-gray-100 bg-transparent">
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="flex flex-col items-center text-center mb-20">
        <motion.p variants={fadeUp} className="section-label text-blue-600 mb-6">Social Proof</motion.p>
        <motion.h2 variants={fadeUp} className="font-heading font-black text-gray-900 tracking-tight" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)' }}>
          CLIENT <span className="text-blue-600">REVIEWS</span>
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div key={i}
            initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay: i * 0.1 }}
            className="glass-card p-10 rounded-2xl border border-gray-100 bg-gray-50 hover:border-blue-600/30 hover:shadow-lg transition-all duration-500 relative group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Mail size={40} className="text-blue-600" />
            </div>
            <p className="text-gray-700 italic mb-8 leading-relaxed text-[15px]">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-[14px]">
                {t.avatar}
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-[15px]">{t.name}</h4>
                <p className="text-gray-500 text-[12px]">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── CERTIFICATIONS & CREDENTIALS ── */
const certs = [
  { 
    title: 'Cisco Certified Network Associate (CCNA)', 
    issuer: 'Cisco Systems', 
    year: '2026', 
    accent: '#2563EB',
    score: 'Score : 94%',
    desc: 'Protocoles de routage & commutation (OSPF, BGP, VLAN, STP), sécurité réseau et transport de données.' 
  },
  { 
    title: 'Bachelor en Ingénierie Informatique', 
    issuer: 'ESGI Paris, France', 
    year: '2025', 
    accent: '#0891B2',
    score: 'Diplômée 2025',
    desc: 'Spécialité : Systèmes, Réseaux, Cloud Computing & Sécurité des Infrastructures.' 
  },
  { 
    title: 'Audit de Sécurité Réseau & OWASP', 
    issuer: 'Keystone Cybersécurité', 
    year: '2025', 
    accent: '#7C3AED',
    score: 'Auditeuse Réseau',
    desc: 'Détection des failles logiques et réseau, hardening et préconisations basées sur OWASP Top 10.' 
  },
  { 
    title: 'Cloud Infrastructure & CI/CD Pipelines', 
    issuer: 'Render · Supabase · GitHub Actions', 
    year: '2026', 
    accent: '#10B981',
    score: 'Haute Disponibilité',
    desc: 'Architecture Cloud complète, politique de contrôle RBAC et réduction de 45% de latence.' 
  },
  { 
    title: 'Administration Systèmes Linux & Docker', 
    issuer: 'Debian · Kali · Ubuntu Server', 
    year: '2025', 
    accent: '#F59E0B',
    score: 'Systèmes & Réseaux',
    desc: 'Hardening serveurs, gestion des droits IAM, conteneurisation Docker et scripting Shell/Python.' 
  },
  { 
    title: 'Intégration Systèmes & Flux Temps Réel', 
    issuer: 'Kleergo · Logistique Intelligente', 
    year: '2026', 
    accent: '#EC4899',
    score: 'Production Proven',
    desc: 'WebSockets temps réel, APIs REST, monitoring de géolocalisation et tests d\'intégration.' 
  },
];

export const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certifications" className="relative py-32 z-10 border-t border-gray-100 bg-transparent">
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
        
        {/* ── Image Gallery with Lightbox Zoom ── */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="mb-24 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          {['/screenshots/cert-1.png', '/screenshots/cert-2.png', '/screenshots/cert-3.png'].map((src, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp} 
              onClick={() => setSelectedImage(src)}
              className="glass-card flex-1 w-full rounded-2xl overflow-hidden group border border-gray-200 hover:border-blue-600 transition-all cursor-pointer shadow-md hover:shadow-xl p-2.5 bg-gray-50 relative"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img src={src} alt={`Certification Preview ${idx + 1}`} className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.03] transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-blue-600 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                    <ZoomIn size={14} /> Agrandir
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Lightbox Modal ── */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                exit={{ scale: 0.9, opacity: 0 }} 
                onClick={e => e.stopPropagation()} 
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden p-3 shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedImage(null)} 
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-900/80 hover:bg-black text-white flex items-center justify-center transition-all shadow-md"
                >
                  <X size={18} />
                </button>
                <img src={selectedImage} alt="Certificat Agrandissement" className="max-h-[82vh] w-auto object-contain rounded-xl" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:80 }}>
          <motion.p variants={fadeUp} className="section-label text-blue-600" style={{ marginBottom:20 }}>Credentials</motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-black text-gray-900 tracking-[-0.04em]" style={{ fontSize:'clamp(2.5rem,5vw,5rem)' }}>CERTIFICATIONS</motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {certs.map((c,i) => (
            <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.08 }}
              className="glass-card group bg-white border border-gray-100 shadow-sm hover:border-blue-600/40 hover:shadow-lg transition-all" style={{ padding:28, position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, borderRadius:'14px 14px 0 0', background:c.accent }} />
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:18 }}>
                <Award size={28} style={{ color:c.accent }} />
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">{c.score}</span>
              </div>
              <h3 className="font-heading font-bold text-gray-900 mb-2 leading-[1.3] text-[15px] group-hover:text-blue-600 transition-colors">{c.title}</h3>
              <p style={{ ...S }} className="text-[10px] text-gray-500 uppercase tracking-[0.15em] mb-3">{c.issuer} · {c.year}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── CONTACT FORM COMPONENT ── */
const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in all fields before sending.');
      setStatus('error');
      return;
    }
    
    setStatus('sending');
    
    // Construct pre-filled email client link
    const subject = encodeURIComponent(`[Portfolio Inquiry] From ${formState.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Kenza,\n\n${formState.message.trim()}\n\n---\nBest regards,\n${formState.name.trim()}\nEmail: ${formState.email.trim()}`
    );
    const mailtoUrl = `mailto:mahlebkenza1@gmail.com?subject=${subject}&body=${body}`;
    
    // Trigger user mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus('success');
    }, 400);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm relative overflow-hidden">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-heading font-bold text-[20px] text-gray-900">Send a Message</h3>
        <span className="text-[11px] font-mono text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
          Direct Email
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-2">
        Have a project, job opportunity, or inquiry? Send me a message and I will reply within 24 hours.
      </p>

      {status === 'success' ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-xl bg-green-50 border border-green-200 text-center space-y-3">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={24} />
          </div>
          <h4 className="font-bold text-green-900 text-sm">Message Prepared & Email Client Opened!</h4>
          <p className="text-xs text-green-700 leading-relaxed">
            Your default email app has been opened with your pre-filled inquiry. You can also write to me directly at:
          </p>
          <a href="mailto:mahlebkenza1@gmail.com" className="inline-block font-mono text-xs font-bold text-blue-600 bg-white px-3 py-1.5 rounded-lg border border-green-200 hover:underline">
            mahlebkenza1@gmail.com
          </a>
          <div className="pt-2">
            <button 
              type="button"
              onClick={() => { setStatus('idle'); setFormState({ name: '', email: '', message: '' }); }} 
              className="text-xs text-gray-500 hover:text-gray-900 underline"
            >
              Send another message
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <div>
            <input 
              type="text"
              required
              placeholder="Your Name *"
              value={formState.name}
              onChange={e => setFormState({ ...formState, name: e.target.value })}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-[13px] text-gray-900 outline-none focus:border-blue-600 focus:bg-white transition-all" 
            />
          </div>
          <div>
            <input 
              type="email"
              required
              placeholder="Email Address *"
              value={formState.email}
              onChange={e => setFormState({ ...formState, email: e.target.value })}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-[13px] text-gray-900 outline-none focus:border-blue-600 focus:bg-white transition-all" 
            />
          </div>
          <div>
            <textarea 
              rows={4}
              required
              placeholder="Tell me about your project, timeline, or inquiry... *"
              value={formState.message}
              onChange={e => setFormState({ ...formState, message: e.target.value })}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-[13px] text-gray-900 outline-none resize-none focus:border-blue-600 focus:bg-white transition-all" 
            />
          </div>
          {status === 'error' && (
            <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
          )}
          <button 
            type="submit"
            disabled={status === 'sending'}
            className="bg-blue-600 hover:bg-blue-700 text-white border-none rounded-lg p-3.5 font-heading font-bold text-[13px] tracking-[0.06em] uppercase cursor-pointer flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70"
          >
            {status === 'sending' ? 'Preparing...' : 'Send Message'} <Send size={15} />
          </button>
        </form>
      )}
    </div>
  );
};

/* ── FOOTER ── */
export const Footer = () => (
  <footer id="contact" className="relative py-32 pb-12 z-10 border-t border-gray-200 bg-gray-50">
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">
        <div>
          <p className="section-label text-blue-600 mb-6">Let's Connect</p>
          <h2 className="font-heading font-black text-gray-900 leading-none mb-10 tracking-[-0.04em]" style={{ fontSize:'clamp(2.5rem,6vw,5rem)' }}>
            LET'S BUILD<br /><span className="text-blue-600">SECURE & SCALABLE</span><br />SYSTEMS.
          </h2>
          <div className="space-y-3.5 mb-8">
            {[{ Icon:Phone, label:'+213 660 17 28 78', href:'tel:+213660172878' },
              { Icon:Mail, label:'mahlebkenza1@gmail.com', href:'mailto:mahlebkenza1@gmail.com' },
              { Icon:Linkedin, label:'linkedin.com/in/kenza-mahleb', href:'https://www.linkedin.com/in/kenza-mahleb-9860b5279' },
              { Icon:Github, label:'github.com/kenza-oss', href:'https://github.com/kenza-oss' },
              { Icon:MapPin, label:'Sidi M\'Hamed, Birtouta · Alger, Algérie', href:'#about' },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" 
                className="flex items-center gap-4 text-gray-600 transition-all hover:text-blue-600 text-[14px]">
                <span className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 bg-white shadow-sm">
                  <Icon size={16} className="text-blue-600" />
                </span>
                <span className="font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="border-t border-gray-200 pt-6 flex justify-between items-center flex-wrap gap-3">
        <p style={{ ...S }} className="text-[11px] text-gray-400">© 2026 Kenza Mahleb · Administratrice Systèmes, Réseaux & Cloud · Alger & Paris</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span style={{ ...S }} className="text-[11px] text-gray-500">Disponible pour missions, CDI & projets internationaux</span>
        </div>
      </div>
    </div>
  </footer>
);
