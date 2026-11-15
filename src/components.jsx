import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2, Shield, Cpu, Cloud, Menu, X, FileText, Download } from 'lucide-react';

/* ─────────────── SHARED VARIANTS ─────────────── */
export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } }
};
export const stagger = { show: { transition: { staggerChildren: 0.1 } } };

/* ─────────────── TYPEWRITER ─────────────── */
const useTypewriter = (words, speed = 100, delay = 2200) => {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [rev, setRev] = useState(false);
  useEffect(() => {
    if (sub === words[idx].length + 1 && !rev) { setTimeout(() => setRev(true), delay); return; }
    if (sub === 0 && rev) { setRev(false); setIdx(p => (p + 1) % words.length); return; }
    const t = setTimeout(() => setSub(p => p + (rev ? -1 : 1)), rev ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [sub, idx, rev, words, speed, delay]);
  return words[idx].substring(0, sub);
};

/* ─────────────── NAVBAR ─────────────── */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#about" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-800 via-blue-600 to-sky-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">K</div>
          <span className="font-heading font-black text-lg tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">KENZA.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {['About', 'Projects', 'Experience', 'Testimonials', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">
              {item}
            </a>
          ))}
          <a href="/cv-kenza-mahleb.pdf" download="CV_Kenza_Mahleb.pdf" target="_blank" rel="noopener noreferrer"
            className="border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 shadow-sm bg-white">
            <Download size={13} className="text-blue-600" /> CV
          </a>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-blue-600/20 hover:scale-[1.02]">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl">
            {['About', 'Projects', 'Experience', 'Testimonials', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
            <a href="/cv-kenza-mahleb.pdf" download="CV_Kenza_Mahleb.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}
              className="border border-blue-200 text-blue-600 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 bg-blue-50/50">
              <Download size={15} /> Download CV (PDF)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ─────────────── HERO ─────────────── */
export const Hero = () => {
  const typed = useTypewriter([
    'Systems & Cloud Administrator',
    'Network & Security Engineer',
    'Cisco CCNA Certified (Score 94%)',
    'DevOps & Infrastructure Lead',
    'Full-Stack Developer (Django, React)'
  ]);
  
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
      {/* ── Light Artistic Background ── */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--neon-blue),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[auto_1fr] gap-16 items-start">
          
          {/* ── Circular Profile Photo at TOP LEFT ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-2"
          >
            <div className="w-44 h-44 xl:w-52 xl:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-2 ring-slate-200/80 bg-slate-50 relative z-10 group">
              <img 
                src="/profile_v5.webp" 
                alt="Kenza Mahleb" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </motion.div>

          {/* ── Content area ── */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="pt-4 relative">
            
            {/* ── Advanced 3D AI Neural Matrix & Live Code Core (Pure Cyber Blue & Slate) ── */}
            <div className="lg:absolute lg:-right-8 xl:-right-14 lg:top-20 xl:top-24 w-full max-w-sm mx-auto lg:mx-0 lg:w-96 mt-12 lg:mt-0 pointer-events-none min-h-[360px] z-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-80 flex items-center justify-center"
              >
                {/* Deep Ambient Energy Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-sky-600/10 to-blue-900/10 blur-[80px] rounded-full pointer-events-none" />
                
                {/* 3D Gyroscopic Neural Sphere Stage */}
                <div className="relative w-56 h-56 flex items-center justify-center [perspective:1000px]">
                  
                  {/* Outer Orbital Ring 1 (X/Y Plane Rotation) */}
                  <motion.div 
                    animate={{ rotateZ: [0, 360], rotateX: [65, 75, 65] }}
                    transition={{ rotateZ: { duration: 18, repeat: Infinity, ease: "linear" }, rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                  </motion.div>

                  {/* Orbital Ring 2 (Y/Z Incline Rotation) */}
                  <motion.div 
                    animate={{ rotateZ: [360, 0], rotateY: [60, 70, 60] }}
                    transition={{ rotateZ: { duration: 24, repeat: Infinity, ease: "linear" }, rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute inset-3 rounded-full border border-blue-400/30"
                  >
                    <div className="absolute bottom-2 right-4 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                  </motion.div>

                  {/* Central Neural Quantum Core (AI Processing Center) */}
                  <motion.div 
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 180, 270, 360] }}
                    transition={{ scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 30, repeat: Infinity, ease: "linear" } }}
                    className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 border border-blue-400/50 shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center justify-center backdrop-blur-md"
                  >
                    <div className="w-10 h-10 rounded-xl border border-cyan-400/40 flex items-center justify-center font-mono text-[9px] text-cyan-300 font-bold bg-cyan-950/40 shadow-inner">
                      AI_v4
                    </div>
                  </motion.div>

                  {/* Synaptic Code Particle Nodes */}
                  <motion.div 
                    animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-slate-900/90 border border-blue-500/40 text-[10px] font-mono text-sky-300 font-bold shadow-lg backdrop-blur-md"
                  >
                    Softmax(QKᵀ / √d)
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 left-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-bold shadow-lg backdrop-blur-md"
                  >
                    loss: 0.0014 · loss.backward()
                  </motion.div>

                </div>

                {/* Floating Glassmorphism Micro-Terminal Card (High-End Coding Proof) */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: [0, -6, 0], opacity: 1 }}
                  transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.8 } }}
                  className="absolute -bottom-6 -right-2 w-64 bg-slate-950/90 border border-slate-800 rounded-xl p-3 shadow-2xl backdrop-blur-md font-mono text-[10px] text-slate-300"
                >
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 text-[9px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> AI_KERNEL.ONLINE
                    </span>
                    <span>14ms Latency</span>
                  </div>
                  <div className="text-blue-400 font-semibold">// Neural Vector Pipeline</div>
                  <div className="text-slate-400 truncate">const model = new LLM("Qdrant-v2");</div>
                  <div className="text-emerald-400 font-bold truncate">✓ Zero-Trust Encryption: SHA-256</div>
                </motion.div>

              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                Cisco CCNA (94%) · ESGI Paris
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading font-black tracking-[-0.04em] mb-6 leading-tight text-slate-900" style={{ fontSize: 'clamp(2.5rem,5.5vw,4.5rem)' }}>
              DRIVING DIGITAL<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600">
                RESILIENCE.
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="h-10 flex items-center mb-8">
              <span className="text-xl font-medium text-slate-600">
                I am a{' '}
                <span className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4">{typed}</span>
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="max-w-xl leading-relaxed mb-10 text-lg text-slate-600">
              Bachelor in Computer Engineering graduate from <strong className="text-slate-900 font-bold">ESGI Paris</strong> and <strong className="text-blue-600 font-bold">Cisco CCNA Certified (Score 94%)</strong>. I specialize in architecting resilient cloud infrastructures, automating zero-downtime CI/CD pipelines, and integrating intelligent AI agent systems.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-xl hover:scale-[1.02] flex items-center gap-2">
                Explore Projects <ArrowRight size={16} />
              </a>
              <a href="/cv-kenza-mahleb.pdf" download="CV_Kenza_Mahleb.pdf" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-black text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-xl flex items-center gap-2">
                <Download size={16} className="text-sky-400" /> Download CV
              </a>
              <a href="#contact" className="border border-slate-300 hover:border-indigo-600 text-slate-700 hover:text-indigo-600 px-6 py-3.5 rounded-xl font-bold text-sm transition-all bg-white shadow-sm">
                Contact Me
              </a>
              <div className="flex gap-2.5 ml-2">
                {[{ Icon: Github, href: 'https://github.com/kenza-oss' }, { Icon: Linkedin, href: 'https://www.linkedin.com/in/kenza-mahleb-9860b5279' }, { Icon: Mail, href: 'mailto:mahlebkenza1@gmail.com' }].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 shadow-sm">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── SKILLS ORBIT & LOGOS ─────────────── */
const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const tools1 = [
  { name:'Python',       logo:`${D}/python/python-original.svg` },
  { name:'Docker',       logo:`${D}/docker/docker-original.svg` },
  { name:'Linux',        logo:`${D}/linux/linux-original.svg` },
  { name:'Git',          logo:`${D}/git/git-original.svg` },
  { name:'AWS',          logo:`${D}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { name:'Azure',        logo:`${D}/azure/azure-original.svg` },
];
const tools2 = [
  { name:'React',        logo:`${D}/react/react-original.svg` },
  { name:'Next.js',      logo:`${D}/nextjs/nextjs-original.svg` },
  { name:'Node.js',      logo:`${D}/nodejs/nodejs-original.svg` },
  { name:'Kubernetes',   logo:`${D}/kubernetes/kubernetes-plain.svg` },
  { name:'Terraform',    logo:`${D}/terraform/terraform-original.svg` },
  { name:'PostgreSQL',   logo:`${D}/postgresql/postgresql-original.svg` },
  { name:'Django',       logo:`${D}/django/django-plain.svg` },
  { name:'Redis',        logo:`${D}/redis/redis-original.svg` },
  { name:'Ansible',      logo:`${D}/ansible/ansible-original.svg` },
  { name:'GitLab',       logo:`${D}/gitlab/gitlab-original.svg` },
];

function OrbitTool({ tool, index, total, r, counterClass }) {
  const angle = (index / total) * 360;
  return (
    <div style={{
      position:'absolute', left:'50%', top:'50%',
      transform:`rotate(${angle}deg) translateX(${r}px)`,
      marginLeft:-32, marginTop:-32,
    }}>
      <div className={`${counterClass} orbit-bubble`} style={{
        width:56, height:56, borderRadius:'50%',
        background:'#FFF',
        border:'1px solid rgba(0,0,0,0.08)',
        boxShadow:'0 4px 12px rgba(0,0,0,0.05)',
        display:'flex', alignItems:'center', justifyContent:'center',
        overflow:'hidden',
      }} title={tool.name}>
        <img src={tool.logo} alt={tool.name}
          style={{ width:32, height:32, objectFit:'contain' }}
          onError={e => {
            e.target.style.display = 'none';
            const span = document.createElement('span');
            span.textContent = tool.name.slice(0,2).toUpperCase();
            span.style.cssText = 'font-size:10px;font-weight:900;color:#2563EB;font-family:Outfit,sans-serif;';
            e.target.parentNode.appendChild(span);
          }} />
      </div>
    </div>
  );
}

export const Skills = () => {
  const cats = [
    { cat:'Systems & Administration', items:['Linux (Debian, Kali, Ubuntu)', 'Windows Server & Active Directory', 'Docker Containerization', 'IAM & Access Control (RBAC)'] },
    { cat:'Networks & Infrastructure', items:['Routing & Switching (OSPF, BGP)', 'VLAN, STP & Network Segmentation', 'Wireshark & Packet Capture', 'Cisco Packet Tracer Architecture'] },
    { cat:'Cloud Computing & DevOps', items:['CI/CD Pipelines (GitHub Actions)', 'Render, Supabase & Cloud Hosting', 'Cloudinary CDN Optimization', 'DNS Management & cPanel'] },
    { cat:'Cybersecurity & Audit', items:['OWASP Top 10 Mitigation', 'JWT, OAuth2 & API Hardening', 'Nmap, Metasploit & Pentesting', 'Vulnerability Assessments'] },
    { cat:'Development & Scripting', items:['Python & Shell Scripting', 'RESTful API Engineering', 'Django & PostgreSQL Backend', 'React & Flutter Interfaces'] },
  ];
  return (
    <section id="skills" className="relative py-32 overflow-hidden border-t border-gray-100 bg-gray-50">
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', position: 'relative', zIndex: 10 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ textAlign:'center', marginBottom:80 }}>
          <motion.p variants={fadeUp} className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-blue-600 mb-6" style={{ display:'flex', justifyContent:'center' }}>Capabilities</motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-black text-gray-900 tracking-[-0.04em]" style={{ fontSize:'clamp(2.5rem,5vw,5rem)' }}>TECHNICAL STACK</motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-sm max-w-md mx-auto mt-4">
            An ecosystem of tools, protocols, and technologies powering my infrastructure and security architecture.
          </motion.p>
        </motion.div>

        {/* ── Orbit diagram (Mobile Responsive Scale) ── */}
        <div className="relative w-full h-[420px] sm:h-[520px] md:h-[600px] flex items-center justify-center mb-16 overflow-hidden">
          <div className="scale-[0.55] sm:scale-75 md:scale-100 transition-transform origin-center flex items-center justify-center relative w-[560px] h-[560px]">
            {/* Static ring guides */}
            <div style={{ position:'absolute', width:300, height:300, borderRadius:'50%', border:'1px dashed rgba(0,0,0,0.08)' }} />
            <div style={{ position:'absolute', width:540, height:540, borderRadius:'50%', border:'1px solid rgba(0,0,0,0.05)' }} />

            {/* Spinning rings */}
            <div className="orbit-ring-1" style={{ position:'absolute', width:300, height:300 }}>
              {tools1.map((t,i) => <OrbitTool key={t.name} tool={t} index={i} total={tools1.length} r={150} counterClass="counter-rotate-1" />)}
            </div>
            <div className="orbit-ring-2" style={{ position:'absolute', width:540, height:540 }}>
              {tools2.map((t,i) => <OrbitTool key={t.name} tool={t} index={i} total={tools2.length} r={270} counterClass="counter-rotate-2" />)}
            </div>

            {/* Center KM */}
            <div style={{
              position:'absolute', zIndex:20,
              width:120, height:120, borderRadius:'50%',
              background:'#FFF',
              border:'1px solid rgba(59,130,246,0.15)',
              boxShadow:'0 10px 30px rgba(0,0,0,0.08)',
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
            }}>
              <span style={{ fontFamily:'Outfit,sans-serif', fontWeight:900, fontSize:30, color:'#111827', letterSpacing:'-0.05em', lineHeight:1 }}>
                KM<span className="text-blue-600">.</span>
              </span>
              <span className="text-blue-600" style={{ fontFamily:'Space Mono,monospace', fontSize:8, letterSpacing:'0.25em', textTransform:'uppercase', marginTop:4 }}>Engineer</span>
            </div>
          </div>
        </div>

        {/* Category cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:24 }}>
          {cats.map(({ cat, items }) => (
            <div key={cat} className="glass-card bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-heading font-bold text-gray-900 mb-4 text-[15px]">{cat}</h3>
              <ul style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {items.map(it => (
                  <li key={it} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────── SCROLLING TAGS ─────────────── */
export const TagsBanner = () => {
  const allTools = [...tools1, ...tools2, ...tools1, ...tools2];
  return (
    <div className="py-8 overflow-hidden border-y border-gray-100 bg-white">
      <div className="flex gap-16 tags-scroll w-max items-center">
        {allTools.map((t, i) => (
          <div key={i} className="flex items-center gap-4">
            <img src={t.logo} alt={t.name} style={{ width: 24, height: 24, objectFit: 'contain' }} 
                 onError={e => e.target.style.display = 'none'} />
            <span className="font-heading font-black text-lg md:text-xl tracking-tighter uppercase text-gray-900">
              {t.name}
            </span>
            <span className="text-gray-100 ml-4">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
