import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2, Shield, Cpu, Cloud, Menu, X } from 'lucide-react';

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
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">K</div>
          <span className="font-heading font-black text-lg tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors">KENZA.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Projects', 'Experience', 'Testimonials', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md">
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
                className="text-sm font-bold uppercase tracking-widest text-gray-500">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ─────────────── HERO ─────────────── */
export const Hero = () => {
  const typed = useTypewriter(['System & Network Engineer', 'Cloud & DevOps Specialist', 'Full-Stack Developer', 'IT Project Manager', 'Cybersecurity Analyst']);
  
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
      {/* ── Light Artistic Background ── */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--neon-blue),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[auto_1fr] gap-16 items-start">
          
          {/* ── Smaller Rectangular Photo at TOP LEFT ── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group mt-4"
          >
            <div className="w-40 h-52 xl:w-48 xl:h-64 rounded-xl overflow-hidden border border-gray-200 shadow-lg relative z-10 bg-gray-50">
              <img 
                src="/profile_v4.png" 
                alt="Kenza Mahleb" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            
            {/* Elegant Accents */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg" />
          </motion.div>

          {/* ── Content area ── */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="pt-4 relative">
            
            {/* ── Premium Tech Particle Network (Plexus Visual) ── */}
            <div className="lg:absolute lg:-right-10 xl:-right-16 lg:top-32 xl:top-40 w-full max-w-sm mx-auto lg:mx-0 lg:w-80 mt-12 lg:mt-0 pointer-events-none min-h-[300px]">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative w-full h-64 lg:h-80"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-100/20 blur-[80px] rounded-full" />
                
                {/* Interactive Tech Core */}
                <div className="relative w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        x: [Math.sin(i) * 20, Math.cos(i) * 40, Math.sin(i) * 20],
                        y: [Math.cos(i) * 30, Math.sin(i) * 50, Math.cos(i) * 30],
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ 
                        duration: 8 + i, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute w-2 h-2 bg-blue-600 rounded-full"
                      style={{ 
                        left: `${40 + Math.random() * 20}%`,
                        top: `${40 + Math.random() * 20}%`,
                        boxShadow: '0 0 10px rgba(37,99,235,0.5)'
                      }}
                    />
                  ))}

                  {/* SVG Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: 'center' }}
                    >
                      <circle cx="50%" cy="50%" r="25%" fill="none" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="4 4" />
                      <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="8 8" />
                      
                      {/* Abstract Tech Vectors */}
                      <path d="M 50% 10% L 90% 50% L 50% 90% L 10% 50% Z" fill="none" stroke="#2563EB" strokeWidth="1" className="opacity-20" />
                    </motion.g>
                  </svg>

                  {/* Tech Floating Label */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-blue-100 px-4 py-2 rounded-full shadow-lg z-20"
                  >
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">System Core</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-blue-600">Senior IT Lead</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading font-black tracking-[-0.04em] mb-6 leading-tight text-gray-900" style={{ fontSize: 'clamp(2.5rem,5.5vw,4.5rem)' }}>
              DRIVING DIGITAL<br />
              <span className="text-blue-600">RESILIENCE.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="h-10 flex items-center mb-8">
              <span className="text-xl font-medium text-gray-600">
                I am a{' '}
                <span className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4">{typed}</span>
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="max-w-xl leading-relaxed mb-10 text-lg text-gray-500">
              Graduate from <strong className="text-gray-900">ESGI Paris</strong>. I design and build high-performance,
              secure infrastructures and intelligent applications — bridging software engineering with cloud architecture.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-xl">
                View My Work <ArrowRight size={16} className="inline ml-2" />
              </a>
              <a href="#contact" className="border border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-sm transition-all bg-white">
                Contact Me
              </a>
              <div className="flex gap-3 ml-2">
                {[{ Icon: Github, href: 'https://github.com/kenza-oss' }, { Icon: Linkedin, href: 'https://www.linkedin.com/in/kenza-mahleb-9860b5279' }, { Icon: Mail, href: 'mailto:mahlebkenza1@gmail.com' }].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all border-gray-100 text-gray-400 hover:text-blue-600 hover:bg-blue-50">
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
    { cat:'Cloud & DevOps',     items:['AWS · Azure · GCP','Kubernetes · Docker','Terraform · Ansible','CI/CD Pipelines'] },
    { cat:'Network & Security', items:['Architecture réseau','Pen Testing / VA','ISO 27001 · SOC2','Firewalls · VPN'] },
    { cat:'Full-Stack Dev',     items:['React · Next.js','Node.js · Python','Django · FastAPI','PostgreSQL · Redis'] },
    { cat:'AI & Automation',    items:['LLM Integration','Process Automation','Data Pipelines','Monitoring & Alerting'] },
  ];
  return (
    <section id="skills" className="relative py-32 overflow-hidden border-t border-gray-100 bg-gray-50">
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', position: 'relative', zIndex: 10 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ textAlign:'center', marginBottom:80 }}>
          <motion.p variants={fadeUp} className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-blue-600 mb-6" style={{ display:'flex', justifyContent:'center' }}>Capabilities</motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-black text-gray-900 tracking-[-0.04em]" style={{ fontSize:'clamp(2.5rem,5vw,5rem)' }}>TECHNICAL STACK</motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-sm max-w-md mx-auto mt-4">
            An ecosystem of tools and technologies orbiting my core expertise.
          </motion.p>
        </motion.div>

        {/* ── Orbit diagram ── */}
        <div style={{ position:'relative', width:'100%', height:600, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:64 }}>
          {/* Static ring guides */}
          <div style={{ position:'absolute', width:300, height:300, borderRadius:'50%', border:'1px dashed rgba(0,0,0,0.05)' }} />
          <div style={{ position:'absolute', width:540, height:540, borderRadius:'50%', border:'1px solid rgba(0,0,0,0.03)' }} />

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
            border:'1px solid rgba(59,130,246,0.1)',
            boxShadow:'0 10px 30px rgba(0,0,0,0.08)',
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          }}>
            <span style={{ fontFamily:'Outfit,sans-serif', fontWeight:900, fontSize:30, color:'#111827', letterSpacing:'-0.05em', lineHeight:1 }}>
              KM<span className="text-blue-600">.</span>
            </span>
            <span className="text-blue-600" style={{ fontFamily:'Space Mono,monospace', fontSize:8, letterSpacing:'0.25em', textTransform:'uppercase', marginTop:4 }}>Engineer</span>
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
