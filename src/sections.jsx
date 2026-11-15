import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ArrowRight, Mail, Linkedin, MapPin, Github, Send, CheckCircle2, ExternalLink, Phone, X, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Layers, ShieldCheck, Monitor, Smartphone, Terminal } from 'lucide-react';
import { fadeUp, stagger } from './components.jsx';

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const getTechIcon = (tech) => {
  const map = {
    'React': `${D}/react/react-original.svg`,
    'Next.js': `${D}/nextjs/nextjs-original.svg`,
    'Tailwind CSS': `${D}/tailwindcss/tailwindcss-original.svg`,
    'TailwindCSS': `${D}/tailwindcss/tailwindcss-original.svg`,
    'Shopify': `${D}/shopify/shopify-original.svg`,
    'Python': `${D}/python/python-original.svg`,
    'FastAPI': `${D}/fastapi/fastapi-original.svg`,
    'OpenAI': `${D}/python/python-original.svg`,
    'Node.js': `${D}/nodejs/nodejs-original.svg`,
    'Express': `${D}/express/express-original.svg`,
    'ExpressJS': `${D}/express/express-original.svg`,
    'PostgreSQL': `${D}/postgresql/postgresql-original.svg`,
    'TypeScript': `${D}/typescript/typescript-original.svg`,
    'Docker': `${D}/docker/docker-original.svg`,
    'Redis': `${D}/redis/redis-original.svg`,
    'Microservices': `${D}/docker/docker-original.svg`,
    'Flutter': `${D}/flutter/flutter-original.svg`,
    'React Native': `${D}/react/react-original.svg`,
    'Dart': `${D}/dart/dart-original.svg`,
    'Firebase': `${D}/firebase/firebase-original.svg`,
    'Web3': `${D}/solidity/solidity-original.svg`,
    'Solidity': `${D}/solidity/solidity-original.svg`,
    'Ethereum': `${D}/solidity/solidity-original.svg`,
    'AWS': `${D}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    'LangChain': `${D}/python/python-original.svg`,
    'Vector DB': `${D}/postgresql/postgresql-original.svg`,
    'HubSpot API': `${D}/javascript/javascript-original.svg`
  };
  return map[tech] || `${D}/javascript/javascript-original.svg`;
};

const projects = [
  { 
    id: '01',
    title: 'Wear Plakkies',
    behanceTitle: '— Wear Plakkies.',
    category: 'Web Apps',
    tagline: 'High-Conversion Modern E-Commerce Platform',
    description: 'Wear Plakkies is an **end-to-end modern e-commerce ecosystem** built for seamless retail operations. Engineered with **React & Next.js**, featuring instant cart synchronization, sub-second checkout, and headless Shopify GraphQL APIs with **100% data consistency** across devices.',
    pills: ['Sub-Second Checkout Flow', 'Headless Shopify GraphQL', 'Dynamic Cart State Sync', 'Multi-Device Responsive'],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Shopify', 'Node.js'],
    metric: '< 0.8s Checkout Speed',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&fit=crop',
    liveUrl: '/demos/wear-plakkies.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'desktop'
  },
  { 
    id: '02',
    title: 'AI Voice Chatbot',
    behanceTitle: '— AI Voice Chatbot.',
    category: 'AI',
    tagline: 'Low-Latency Conversational Audio Intelligence',
    description: 'An intelligent **conversational voice assistant** pipeline achieving human-like audio dialogue. Combines **OpenAI Whisper STT** and neural speech synthesis (TTS) over **WebSockets** with **sub-200ms latency** and persistent session recall.',
    pills: ['Sub-200ms Voice Latency', 'Whisper STT & Neural TTS', 'FastAPI WebSocket Stream', 'Contextual Dialogue Memory'],
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Node.js'],
    metric: '< 200ms Audio Latency',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&fit=crop',
    liveUrl: '/demos/ai-voice-chatbot.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'terminal'
  },
  { 
    id: '03',
    title: 'Laxmi Hyundai - AI Assistant',
    behanceTitle: '— Laxmi Hyundai AI.',
    category: 'AI',
    tagline: 'Automotive Digital Concierge & Lead Conversion',
    description: 'Enterprise **conversational AI agent** deployed on an automotive portal. Powers real-time **vehicle comparison, test-drive scheduling**, and financing estimations, driving a **40% increase in qualified sales leads**.',
    pills: ['GPT-4o Guided Sales', 'Automated Test-Drive Booking', 'Multi-Model Spec Comparison', 'CRM Webhook Integration'],
    tags: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Express'],
    metric: '+40% Lead Conversion',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&fit=crop',
    liveUrl: '/demos/ai-chatbot-automotive.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'desktop'
  },
  { 
    id: '04',
    title: 'Learning Management System (LMS)',
    behanceTitle: '— Scalable LMS Platform.',
    category: 'Backend',
    tagline: 'Enterprise EdTech Architecture & RESTful API',
    description: 'Engineered an **enterprise-grade LMS platform** with strict **Role-Based Access Control (RBAC)**. Features student progress tracking, automated assignment grading, and high-performance **PostgreSQL connection pooling**.',
    pills: ['Strict RBAC Permissions', 'PostgreSQL Connection Pooling', 'JWT & Refresh Token Auth', 'Modular Micro-Courses API'],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript', 'Docker'],
    metric: '99.9% Uptime Guarantee',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&fit=crop',
    liveUrl: '/demos/lms-backend.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'desktop'
  },
  { 
    id: '05',
    title: 'Enterprise Microservices & Cloud API',
    behanceTitle: '— Microservices Cloud Infrastructure.',
    category: 'Backend',
    tagline: 'High-Throughput Distributed Backend & Cache Layer',
    description: 'Resilient **cloud microservices ecosystem** orchestrated with **Docker Swarm & Redis caching**. Handles **28K req/s with 99.9% uptime**, automated failover, rate limiting, and zero-trust authentication.',
    pills: ['28K Requests/sec Throughput', 'Distributed Redis Caching (94% Hit Rate)', 'Containerized Docker Swarm', 'Zero-Trust JWT Security'],
    tags: ['Docker', 'Redis', 'PostgreSQL', 'Node.js', 'Express'],
    metric: '28K req/s Throughput',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&fit=crop',
    liveUrl: '/demos/microservices-api.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'terminal'
  },
  { 
    id: '06',
    title: 'FlirtBox Mobile App',
    behanceTitle: '— FlirtBox Mobile.',
    category: 'Mobile',
    tagline: 'Real-Time Audio Matchmaking & Interactive Social',
    description: 'Cross-platform **mobile matchmaking application** with low-latency **WebRTC live audio rooms**. Powered by **Flutter & Firebase Realtime Database**, featuring real-time presence sync and smart compatibility algorithms.',
    pills: ['Sub-50ms WebRTC Audio Rooms', 'Cross-Platform Flutter/Dart', 'Realtime Firebase Sync', 'Smart Compatibility Engine'],
    tags: ['Flutter', 'Dart', 'Firebase', 'PostgreSQL', 'React Native'],
    metric: 'Sub-50ms WebRTC Rooms',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&fit=crop',
    liveUrl: '/demos/flirtbox-mobile.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'mobile'
  },
  { 
    id: '07',
    title: 'Financial Analytics & Market Dashboard',
    behanceTitle: '— Financial Analytics Dashboard.',
    category: 'Web Apps',
    tagline: 'Real-Time Market Intelligence & Quantitative Tracking',
    description: 'Interactive **quantitative market intelligence platform** offering sub-second asset price updates, automated risk metrics (**Sharpe Ratio, Alpha**), asset allocation breakdowns, and downloadable compliance reports.',
    pills: ['Real-Time Ticker Streaming', 'Sharpe Ratio & Risk Metrics', 'Interactive Canvas Visualizations', 'Automated Portfolio Audit'],
    tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'ExpressJS'],
    metric: 'Real-Time Tick Streaming',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&fit=crop',
    liveUrl: '/demos/financial-dashboard.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'desktop'
  },
  { 
    id: '08',
    title: 'RAE Engineering - Web3 Integrity',
    behanceTitle: '— RAE Web3 Integrity Registry.',
    category: 'Web3',
    tagline: 'Decentralized Equipment Certification on Ethereum',
    description: 'A **tamper-proof asset verification registry** anchoring industrial equipment inspections directly on **Ethereum Sepolia**. Implements cryptographic **Merkle tree proofs** and gas-optimized smart contracts for critical pressure piping.',
    pills: ['Ethereum Sepolia Smart Contracts', 'Cryptographic Merkle Proofs', '-38% Gas Optimization via Calldata', 'Zero-Knowledge Compliance Audit'],
    tags: ['Solidity', 'Web3', 'Ethereum', 'Next.js', 'TypeScript'],
    metric: '100% On-Chain Proofs',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&fit=crop',
    liveUrl: '/demos/web3-integrity.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'terminal'
  },
  { 
    id: '09',
    title: 'MCP for Memorization - Mem0.ai',
    behanceTitle: '— Mem0.ai Memory Protocol.',
    category: 'AI',
    tagline: 'Model Context Protocol for Long-Term AI Recall',
    description: 'Advanced **Model Context Protocol (MCP)** server providing autonomous AI agents with **episodic and semantic long-term memory**. Leverages **Qdrant vector embeddings** and cosine similarity ranking for instant recall.',
    pills: ['Model Context Protocol (MCP) Standard', 'Vector Database Embeddings (Qdrant)', 'Sub-15ms Similarity Search', 'Episodic Memory Graph'],
    tags: ['Python', 'FastAPI', 'LangChain', 'AWS', 'Vector DB'],
    metric: 'Sub-15ms Vector Recall',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&fit=crop',
    liveUrl: '/demos/mem0-ai.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'terminal'
  },
  { 
    id: '10',
    title: 'The Altman Brothers - Luxury Real Estate',
    behanceTitle: '— The Altman Brothers Portal.',
    category: 'Web Apps',
    tagline: 'Ultra-Luxury Architectural Real Estate Experience',
    description: 'High-performance digital portal showcasing **$100M+ ultra-prime luxury estates**. Built with **Next.js & Tailwind CSS**, featuring real-time MLS synchronization, interactive neighborhood maps, and VIP client inquiry routing.',
    pills: ['MLS Real-Time Synchronization', 'Interactive Ultra-HD Galleries', 'VIP Inquiry Routing System', 'Ultra-Fast Lighthouse 98+ Score'],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'HubSpot API', 'TypeScript'],
    metric: 'Lighthouse 98/100 Score',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&fit=crop',
    liveUrl: '/demos/luxury-real-estate.html',
    githubUrl: 'https://github.com/kenza-oss',
    deviceType: 'desktop'
  }
];

const S = { fontFamily:'Space Mono,monospace' };

export const Projects = () => {
  const [filter, setFilter] = useState('All Projects');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState('behance'); // 'behance' | 'grid'
  const filters = ['All Projects', 'Web Apps', 'Mobile', 'Backend', 'AI', 'Web3'];
  
  const filteredProjects = filter === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Keep index within filtered bounds
  const currentProject = filteredProjects[selectedIndex % filteredProjects.length] || filteredProjects[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  // Format bold markdown within string safely
  const renderFormattedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return <span key={idx} className="text-gray-300">{part}</span>;
    });
  };

  return (
    <section id="projects" className="relative py-28 z-10 border-t border-gray-100 bg-[#07090e] text-white overflow-hidden">
      {/* Background Ambient Glows & Tech Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div style={{ maxWidth:1320, margin:'0 auto', padding:'0 24px' }} className="relative z-10">
        
        {/* Header Section */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="flex flex-col items-center text-center mb-12">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-inner">
            <Sparkles size={14} className="text-blue-400" /> Executive Engineering Case Studies
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="font-heading font-black tracking-tight mb-4" style={{ fontSize:'clamp(2.2rem,4.5vw,3.8rem)' }}>
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">Engineering Work</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 text-[15px] max-w-2xl leading-relaxed mb-8">
            Detailed breakdown of production systems, architecture patterns, and live deliverables presented in Behance executive case-study format.
          </motion.p>
          
          {/* Controls: Category Filter + View Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-3xl">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map(f => (
                <button key={f} 
                  onClick={() => { setFilter(f); setSelectedIndex(0); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    filter === f 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                  }`}>
                  {f}
                </button>
              ))}
            </div>

            {/* Toggle Showcase vs Grid View */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 ml-auto">
              <button 
                onClick={() => setViewMode('behance')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'behance' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Layers size={13} /> Case Study
              </button>
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Monitor size={13} /> Grid
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── BEHANCE EXECUTIVE CASE-STUDY SHOWCASE VIEW ── */}
        {viewMode === 'behance' && currentProject && (
          <div className="relative">
            {/* Master Showcase Card (Exact Behance Case Study Style) */}
            <motion.div 
              key={currentProject.id}
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.45 }}
              className="bg-[#0b0d13] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl"
            >
              {/* Subtle Geometric Graphic Curves in Background */}
              <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
              
              {/* Top Row: Title & Number + Tech Stack Cloud */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10 pb-8 border-b border-white/10">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-400 font-mono text-sm tracking-widest uppercase font-bold">
                      {currentProject.id} / CASE STUDY
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                      {currentProject.category}
                    </span>
                    <span className="ml-auto lg:hidden px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                      {currentProject.metric}
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
                    {currentProject.behanceTitle}
                  </h3>
                  <p className="text-blue-300 font-medium text-sm sm:text-base">
                    {currentProject.tagline}
                  </p>
                </div>

                {/* Tech Stack Icon Grid (Behance Floating Cloud) */}
                <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
                  <span className="text-gray-400 text-[11px] font-mono tracking-widest uppercase mb-3 font-semibold">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap lg:justify-end gap-2.5 max-w-sm">
                    {currentProject.tags.map((tag) => (
                      <div 
                        key={tag}
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all shadow-sm"
                        title={tag}
                      >
                        <img 
                          src={getTechIcon(tag)} 
                          alt={tag} 
                          className="w-4 h-4 object-contain filter group-hover:scale-110 transition-transform" 
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span className="text-xs font-semibold text-gray-200">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle Row: Content & Mockup Stage */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Column: Narrative & Pill Badges */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-8">
                    {renderFormattedText(currentProject.description)}
                  </div>

                  {/* Behance-Style Pill Badges (White Outline Badges) */}
                  <div className="mb-8">
                    <span className="text-gray-400 text-[11px] font-mono tracking-widest uppercase mb-3 block font-semibold">
                      Key Architecture Deliverables
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {currentProject.pills.map((pill, idx) => (
                        <div 
                          key={idx}
                          className="border border-white/25 hover:border-blue-400 text-white font-medium text-xs sm:text-[13px] px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-sm transition-all hover:bg-white/10 shadow-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span>{pill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                    <a 
                      href={currentProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-7 py-3.5 rounded-full flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Explore Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={currentProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 sm:flex-initial border border-white/20 hover:border-white text-gray-200 hover:text-white text-sm font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all hover:bg-white/10"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  </div>
                </div>

                {/* Right Column: Multi-Device Realistic Mockup Showcase */}
                <div className="lg:col-span-7 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl group">
                    {/* Top Browser / System Chrome Bar */}
                    <div className="bg-[#141721] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="bg-black/40 border border-white/10 text-gray-400 text-[11px] font-mono px-4 py-1 rounded-full truncate max-w-[260px]">
                        https://portfolio-kenza.onrender.com{currentProject.liveUrl}
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live System
                      </div>
                    </div>

                    {/* Main High-Resolution Preview Image with Zoom & Hover */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                      <img 
                        src={currentProject.image} 
                        alt={currentProject.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.95] group-hover:brightness-100" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating Key Performance Pill (Bottom Left of Mockup) */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-lg">
                          ⚡ {currentProject.metric}
                        </span>
                        
                        <a 
                          href={currentProject.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-500/40 transition-all hover:scale-105"
                        >
                          Launch App <ArrowRight size={13} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Perspective Decorative Layer (Behance Depth Effect) */}
                  <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl border border-white/5 bg-blue-500/5 blur-sm" />
                </div>

              </div>

              {/* Navigation Rail inside Showcase (Previous / Next) */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
                <button 
                  onClick={handlePrev}
                  className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all"
                >
                  <ChevronLeft size={16} /> Previous Project
                </button>

                <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
                  <span className="text-white font-bold">{currentProject.id}</span>
                  <span>/</span>
                  <span>{filteredProjects.length < 10 ? `0${filteredProjects.length}` : filteredProjects.length}</span>
                </div>

                <button 
                  onClick={handleNext}
                  className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all"
                >
                  Next Project <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Quick-Switch Thumbnail Ribbon */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5">
              {filteredProjects.map((p, idx) => {
                const isActive = (selectedIndex % filteredProjects.length) === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all ${
                      isActive 
                      ? 'bg-blue-600/20 border-blue-500 shadow-md shadow-blue-600/20' 
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-blue-400 font-bold">{p.id}</span>
                    <span className="text-xs font-bold text-white truncate w-full">{p.title}</span>
                    <span className="text-[10px] text-gray-400 truncate w-full">{p.category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── ALTERNATIVE GRID VIEW (Full Catalog) ── */}
        {viewMode === 'grid' && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:28 }}>
            {filteredProjects.map((p) => (
              <motion.div key={p.title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0d0f17] hover:border-blue-500/40 hover:shadow-2xl transition-all group h-full">

                {/* Project Image */}
                <div className="relative h-[220px] overflow-hidden bg-black/40">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/75 border border-white/20 text-white font-mono text-[11px] font-bold">
                    {p.id}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[11px] font-bold">
                    {p.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-bold text-white text-[20px] mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-blue-300 text-xs font-medium mb-3">{p.tagline}</p>
                  <p className="text-gray-400 text-[13px] leading-relaxed mb-5 flex-grow">{p.description.replace(/\*\*/g, '')}</p>
                  
                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.pills.slice(0, 2).map((pill) => (
                      <span key={pill} className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold border border-white/20 text-gray-300">
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={p.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md"
                    >
                      <span>Live Demo</span> <ExternalLink size={13} />
                    </a>
                    <a 
                      href={p.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 border border-white/20 hover:border-white text-gray-300 hover:text-white text-[12px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all hover:bg-white/5"
                    >
                      <Github size={13} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

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
