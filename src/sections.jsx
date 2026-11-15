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
    screens: [
      { label: 'Storefront & Hero Catalog', badge: 'Primary Kiosk', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&fit=crop' },
      { label: 'Dynamic Cart & Checkout Flow', badge: 'POS Terminal', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&fit=crop' },
      { label: 'Mobile Responsive Experience', badge: 'Mobile View', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/wear-plakkies.html',
    githubUrl: 'https://github.com/kenza-oss'
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
    screens: [
      { label: 'Acoustic Waveform & Mic Capture', badge: 'Audio Engine', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&fit=crop' },
      { label: 'Whisper STT Real-Time Dialogue', badge: 'Neural Pipeline', image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&fit=crop' },
      { label: 'FastAPI WebSocket Latency Log', badge: 'Live Metrics', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/ai-voice-chatbot.html',
    githubUrl: 'https://github.com/kenza-oss'
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
    screens: [
      { label: 'Vehicle Virtual Showroom', badge: 'Main Display', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&fit=crop' },
      { label: 'GPT-4o Diagnostic Assistant', badge: 'Chatbot UI', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&fit=crop' },
      { label: 'Test-Drive Booking Workflow', badge: 'Lead Engine', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/ai-chatbot-automotive.html',
    githubUrl: 'https://github.com/kenza-oss'
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
    screens: [
      { label: 'Admin Course Analytics Dashboard', badge: 'KDS / Live View', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&fit=crop' },
      { label: 'Student Learning & Progress Tracker', badge: 'Portal UI', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&fit=crop' },
      { label: 'REST API & Access Token Monitor', badge: 'Backend Terminal', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/lms-backend.html',
    githubUrl: 'https://github.com/kenza-oss'
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
    screens: [
      { label: 'Cluster Topology & Health Monitor', badge: 'Datacenter Grid', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&fit=crop' },
      { label: 'Distributed Redis Hit-Rate Stream', badge: 'Cache Layer', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&fit=crop' },
      { label: 'Docker Swarm Node Terminal', badge: 'Live Logs', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/microservices-api.html',
    githubUrl: 'https://github.com/kenza-oss'
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
    screens: [
      { label: 'Smart Discovery & Match Feed', badge: 'Mobile App', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&fit=crop' },
      { label: 'WebRTC Live Audio Rooms', badge: 'Audio Stream', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&fit=crop' },
      { label: 'Live Video Broadcast & Chat', badge: 'Overlay UI', image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/flirtbox-mobile.html',
    githubUrl: 'https://github.com/kenza-oss'
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
    screens: [
      { label: 'Quantitative Candlestick Chart', badge: 'Market Desk', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&fit=crop' },
      { label: 'Asset Allocation Breakdown Pie', badge: 'Risk Engine', image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&fit=crop' },
      { label: 'Real-Time Order Book & Ticker', badge: 'Live Stream', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/financial-dashboard.html',
    githubUrl: 'https://github.com/kenza-oss'
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
    screens: [
      { label: 'Industrial Equipment Inspection Stage', badge: 'Asset Registry', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&fit=crop' },
      { label: 'Ethereum Smart Contract Verifier', badge: 'Sepolia Block', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&fit=crop' },
      { label: 'Merkle Root Cryptographic Ledger', badge: 'Proof Log', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/web3-integrity.html',
    githubUrl: 'https://github.com/kenza-oss'
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
    screens: [
      { label: 'Episodic Memory Vector Graph', badge: 'Neural Recall', image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&fit=crop' },
      { label: 'Qdrant Embedding Space Clusters', badge: 'Vector DB', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&fit=crop' },
      { label: 'MCP Protocol Tool Schema', badge: 'RPC Server', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/mem0-ai.html',
    githubUrl: 'https://github.com/kenza-oss'
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
    screens: [
      { label: 'Bel Air Architectural Villa Showcase', badge: 'Ultra-Prime Estate', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&fit=crop' },
      { label: 'Luxury Sunset Terrace & Interior', badge: 'HD Tour', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&fit=crop' },
      { label: 'Interactive MLS Floor Plan & Map', badge: 'Client Portal', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&fit=crop' }
    ],
    liveUrl: '/demos/luxury-real-estate.html',
    githubUrl: 'https://github.com/kenza-oss'
  }
];

const S = { fontFamily:'Space Mono,monospace' };

// Individual Case Study Component with Otter OS Multi-Screen Collage Stage
const BehanceProjectCard = ({ project, index }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const activeScreen = project.screens[activeScreenIndex] || project.screens[0];
  const nextScreen1 = project.screens[(activeScreenIndex + 1) % project.screens.length];
  const nextScreen2 = project.screens[(activeScreenIndex + 2) % project.screens.length];

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
    <motion.div 
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin: "-100px" }}
      transition={{ duration:0.6, delay: 0.1 }}
      className="bg-[#0b0d13] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl group"
    >
      {/* Background Subtle Geometric Curves */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />

      {/* ── TOP BAR: Title & Number + Tech Stack Cloud ── */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10 pb-8 border-b border-white/10 relative z-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase font-bold">
              {project.id} / CASE STUDY
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-mono">
              ⚡ {project.metric}
            </span>
          </div>
          <h3 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-2">
            {project.behanceTitle}
          </h3>
          <p className="text-blue-300 font-medium text-sm sm:text-base">
            {project.tagline}
          </p>
        </div>

        {/* Floating Tech Stack Icon Grid (Behance Cloud) */}
        <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
          <span className="text-gray-400 text-[11px] font-mono tracking-widest uppercase mb-3 font-semibold">
            Core Technologies
          </span>
          <div className="flex flex-wrap lg:justify-end gap-2.5 max-w-sm">
            {project.tags.map((tag) => (
              <div 
                key={tag}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all shadow-sm"
              >
                <img 
                  src={getTechIcon(tag)} 
                  alt={tag} 
                  className="w-4 h-4 object-contain" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="text-xs font-semibold text-gray-200">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MIDDLE ROW: Narrative & Multi-Screen Collage Stage ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Column: Narrative, Screen View Pills & Architecture Badges */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-6">
            {renderFormattedText(project.description)}
          </div>

          {/* Otter OS-Style Screen View Pills (Interactive Switcher) */}
          <div className="mb-6">
            <span className="text-gray-400 text-[11px] font-mono tracking-widest uppercase mb-3 block font-semibold flex items-center gap-1.5">
              <Layers size={13} className="text-blue-400" /> Multi-Screen Viewport Selector
            </span>
            <div className="flex flex-col gap-2">
              {project.screens.map((screen, sIdx) => {
                const isSelected = activeScreenIndex === sIdx;
                return (
                  <button
                    key={sIdx}
                    onClick={() => setActiveScreenIndex(sIdx)}
                    className={`text-left px-4 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'border-blue-400 bg-blue-500/20 text-white shadow-md shadow-blue-500/20'
                        : 'border-white/20 bg-white/[0.03] text-gray-300 hover:border-white/40 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue-400 animate-pulse' : 'bg-gray-500'}`} />
                      <span>{screen.label}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                      {screen.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Architecture Badges */}
          <div className="mb-8">
            <span className="text-gray-400 text-[11px] font-mono tracking-widest uppercase mb-2.5 block font-semibold">
              Key Engineering Deliverables
            </span>
            <div className="flex flex-wrap gap-2">
              {project.pills.map((pill, idx) => (
                <div 
                  key={idx}
                  className="border border-white/20 text-gray-200 font-medium text-xs px-3.5 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-sm"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-7 py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
            >
              <span>Explore Live Demo</span>
              <ExternalLink size={15} />
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 sm:flex-initial border border-white/20 hover:border-white text-gray-200 hover:text-white text-sm font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all hover:bg-white/10"
            >
              <Github size={15} /> Source Code
            </a>
          </div>
        </div>

        {/* Right Column: Otter OS Multi-Device Collage Stage */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
          
          {/* Main Primary Screen (Center-Left) */}
          <div className="w-[85%] sm:w-[80%] rounded-2xl overflow-hidden border border-white/20 bg-[#12151e] shadow-2xl relative z-20 transition-all duration-500">
            {/* Window Top Bar */}
            <div className="bg-[#181c28] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
              </div>
              <div className="bg-black/50 border border-white/10 text-gray-400 text-[10px] font-mono px-3 py-0.5 rounded-full truncate max-w-[200px]">
                {activeScreen.badge} · {project.title}
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live View
              </div>
            </div>

            {/* Screen Image with smooth transition */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <motion.img 
                key={activeScreen.image}
                src={activeScreen.image} 
                alt={activeScreen.label} 
                initial={{ opacity:0, scale:1.04 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.4 }}
                className="w-full h-full object-cover filter brightness-[0.95]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-bold">
                  {activeScreen.label}
                </span>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3.5 py-1 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] flex items-center gap-1 shadow-lg"
                >
                  Test Demo <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Floating Screen (Top-Right Angle) - Clickable to switch */}
          <div 
            onClick={() => setActiveScreenIndex((activeScreenIndex + 1) % project.screens.length)}
            className="absolute top-2 right-0 w-[48%] sm:w-[45%] rounded-xl overflow-hidden border border-white/20 bg-[#161a26] shadow-2xl z-10 cursor-pointer transform hover:scale-105 hover:z-30 transition-all duration-300 opacity-90 hover:opacity-100"
            title="Click to view this screen"
          >
            <div className="bg-[#1f2434] px-3 py-1.5 border-b border-white/10 flex items-center justify-between text-[10px] text-gray-300 font-mono">
              <span className="truncate">{nextScreen1.badge}</span>
              <span className="text-blue-400 font-bold">View ↗</span>
            </div>
            <div className="aspect-[16/10] bg-black overflow-hidden relative">
              <img src={nextScreen1.image} alt={nextScreen1.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 hover:bg-transparent transition-colors" />
            </div>
          </div>

          {/* Tertiary Floating Device (Bottom-Right Angle) - Clickable to switch */}
          <div 
            onClick={() => setActiveScreenIndex((activeScreenIndex + 2) % project.screens.length)}
            className="absolute -bottom-4 right-4 sm:right-6 w-[42%] sm:w-[38%] rounded-xl overflow-hidden border border-white/25 bg-[#121622] shadow-2xl z-30 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:border-blue-400"
            title="Click to view this screen"
          >
            <div className="bg-[#181d2a] px-3 py-1 border-b border-white/10 flex items-center justify-between text-[10px] text-gray-300 font-mono">
              <span className="truncate">{nextScreen2.badge}</span>
              <span className="text-blue-400 font-bold">View ↗</span>
            </div>
            <div className="aspect-[16/10] bg-black overflow-hidden relative">
              <img src={nextScreen2.image} alt={nextScreen2.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/25 hover:bg-transparent transition-colors" />
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState('All Projects');
  const filters = ['All Projects', 'Web Apps', 'Mobile', 'Backend', 'AI', 'Web3'];
  
  const filteredProjects = filter === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-28 z-10 border-t border-gray-100 bg-[#07090e] text-white overflow-hidden">
      {/* Background Ambient Glows & Tech Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div style={{ maxWidth:1320, margin:'0 auto', padding:'0 24px' }} className="relative z-10">
        
        {/* Header Section */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="flex flex-col items-center text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-inner">
            <Sparkles size={14} className="text-blue-400" /> Executive Engineering Case Studies
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="font-heading font-black tracking-tight mb-4" style={{ fontSize:'clamp(2.2rem,4.5vw,3.8rem)' }}>
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">Engineering Work</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 text-[15px] max-w-2xl leading-relaxed mb-8">
            Complete portfolio of production systems, architecture patterns, and multi-device interactive deliverables presented in Behance executive case-study format.
          </motion.p>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {filters.map(f => (
              <button key={f} 
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                  filter === f 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30 scale-105' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                }`}>
                {f} {f === 'All Projects' && `(${projects.length})`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── ALL PROJECTS STACKED IN BEHANCE MULTI-SCREEN FORMAT ── */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {filteredProjects.map((project, idx) => (
            <BehanceProjectCard key={project.id} project={project} index={idx} />
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
