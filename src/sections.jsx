import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ArrowRight, Mail, Linkedin, MapPin } from 'lucide-react';
import { fadeUp, stagger } from './components.jsx';

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const projects = [
  { 
    title: 'Wear Plakkies', 
    category: 'Web Apps',
    description: 'Development and Maintenance of e-commerce Website',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&fit=crop'
  },
  { 
    title: 'AI Voice Chatbot', 
    category: 'AI',
    description: 'Implemented advanced algorithms for TTS and STT to achieve human-like voice quality and accuracy.',
    tags: ['Speech Synthesis', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&fit=crop'
  },
  { 
    title: 'Laxmi Hyundai - Chatbot', 
    category: 'AI',
    description: 'Chatbot integration for a website, it improves the interaction with site visitors',
    tags: ['Chatbot', 'OpenAI', 'GPT-4o', 'React'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&fit=crop'
  },
  { 
    title: 'Learning Management System', 
    category: 'Web Apps',
    description: 'Developed a comprehensive Learning Management System (LMS) using Next.js and TypeScript to deliver a seamless and scalable platform.',
    tags: ['Next.js', 'React', 'TypeScript', 'NodeJS Framework', 'Redux'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&fit=crop'
  },
  { 
    title: 'FlirtBox', 
    category: 'Mobile',
    description: 'Flirt Box is a matchmaking app that combines audio rooms and live streams, offering a unique platform for real-time audience interaction through live audio.',
    tags: ['Flutter', 'React Native', 'Dart', 'Firebase', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&fit=crop'
  },
  { 
    title: 'Tesla Website', 
    category: 'Web Apps',
    description: 'An interactive dashboard for financial data visualization, portfolio management, and investment tracking with real-time updates.',
    tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'ExpressJS'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&fit=crop'
  },
  { 
    title: 'RAE Engineering - Web3', 
    category: 'Web3',
    description: 'At RAE Engineering, our focus is on determining and managing the integrity of pressure equipment, pressure piping, tanks and related mechanical equipment.',
    tags: ['Web3', 'Next.js', 'TypeScript', 'TailwindCSS', 'ExpressJS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&fit=crop'
  },
  { 
    title: 'MCP for Memorization - Mem0.ai', 
    category: 'AI',
    description: 'Mem0 remembers user preferences, adapts to individual needs, and continuously improves over time.',
    tags: ['LangFlow', 'Next.js', 'AWS', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&fit=crop'
  },
  { 
    title: 'Thealtmanbrothers - Real Estate', 
    category: 'Web Apps',
    description: 'The Altman Brothers is a real estate company that provides a wide range of services to their clients.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Hubspot'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&fit=crop'
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

                {/* Buttons (NeonNexus Style) */}
                <div className="flex gap-4">
                  <a href="#" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                    Live Demo <ArrowRight size={14} />
                  </a>
                  <a href="#" className="flex-1 border border-gray-200 hover:border-blue-600 text-gray-700 text-[13px] font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-blue-50">
                    Source Code
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

/* ── EXPERIENCE ── */
const exps = [
  { role:'IT Project Manager & Tech Lead', company:'ESGI — Paris, France', period:'2023 — Present', type:'Full-Time', dot:'#22D3EE',
    items:['Led 8+ cross-functional teams delivering cloud migration projects on time and under budget','Architected hybrid cloud strategy (AWS + Azure) reducing infra costs by 35%','Managed international remote collaborations across 4 countries'] },
  { role:'Cloud & Network Security Engineer', company:'Enterprise Security Division', period:'2022 — 2023', type:'Internship × 2', dot:'#3B82F6',
    items:['Conducted full VA/PT assessments on critical infrastructure for 2 major clients','Deployed Zero-Trust network segmentation across 1200+ endpoints','Hardened Linux/Windows servers; reduced attack surface by 78%'] },
  { role:'Senior Full-Stack Developer', company:'Freelance — International Clients', period:'2021 — 2023', type:'Freelance', dot:'#8B5CF6',
    items:['Delivered 15+ production-grade web apps for French, Algerian, and Canadian clients','Built Kleer Infini SaaS: React/Next.js + Django + PostgreSQL serving 500+ students','Maintained 4.9★ client satisfaction across all engagements'] },
  { role:'Full-Stack Developer', company:'Tech Startup — Paris', period:'2020 — 2021', type:'Full-Time', dot:'#10B981',
    items:['Built REST APIs in Node.js handling 50k+ requests/day at < 100ms P99','Migrated monolith to microservices, cutting deploy time by 70%','Set up first CI/CD pipeline (GitHub Actions + Docker) for the team'] },
];

export const Experience = () => (
  <section id="experience" className="relative py-32 z-10 border-t border-gray-100 bg-transparent">
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:80 }}>
        <motion.p variants={fadeUp} className="section-label text-blue-600" style={{ marginBottom:20 }}>Career Path</motion.p>
        <motion.h2 variants={fadeUp} className="font-heading font-black text-gray-900 tracking-[-0.04em]" style={{ fontSize:'clamp(2.5rem,5vw,5rem)' }}>
          5 YEARS OF<br /><span className="text-blue-600">EXCELLENCE</span>
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
        {/* Sidebar */}
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          {[
            { Icon:GraduationCap, title:'ESGI Paris', sub:"Master's Level \u00B7 Computer Engineering" },
            { Icon:MapPin, title:'Paris, France', sub:'Remote available worldwide' },
          ].map(({ Icon, title, sub }) => (
            <div key={title} className="glass-card bg-gray-50 border border-gray-200" style={{ padding:24 }}>
              <Icon size={26} className="text-blue-600 mb-3" />
              <p className="font-heading font-bold text-gray-900 mb-1">{title}</p>
              <p className="text-xs text-gray-500">{sub}</p>
            </div>
          ))}
          <div className="glass-card bg-gray-50 border border-gray-200" style={{ padding:24 }}>
            {[['5+','Years Exp.'],['30+','Projects'],['4','Countries']].map(([n,l]) => (
              <div key={l} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0', borderBottom:'1px solid rgba(0,0,0,0.05)' }}>
                <span className="text-xs text-gray-500">{l}</span>
                <span className="font-heading font-black text-xl text-blue-600">{n}</span>
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
                    <p className="text-[13px] text-gray-500 mt-1">{e.company}</p>
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
  { name: 'Sarah Johnson', role: 'CTO @ CloudScale', text: 'Kenza is an exceptional engineer. Her ability to architect complex cloud systems while maintaining a focus on security is truly impressive.', avatar: 'SJ' },
  { name: 'Marc Lefebvre', role: 'Senior Architect @ ESGI', text: 'One of the most talented tech leads I have worked with. Kenza brought clarity and efficiency to our hybrid cloud migration project.', avatar: 'ML' },
  { name: 'Amine Rahmani', role: 'Founder @ Kleer Infini', text: 'The platform Kenza built for us has served over 500 students with zero downtime. Her technical skills are matched only by her professionalism.', avatar: 'AR' },
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

/* ── CERTIFICATIONS ── */
const certs = [
  { title:'AWS Solutions Architect — Associate', issuer:'Amazon Web Services', year:'2024', accent:'#22D3EE' },
  { title:'Cisco CCNA — Network Associate',      issuer:'Cisco Systems',       year:'2023', accent:'#3B82F6' },
  { title:'Azure Fundamentals AZ-900',            issuer:'Microsoft',           year:'2023', accent:'#60A5FA' },
  { title:'Cybersecurity Analyst Professional',   issuer:'IBM / Coursera',      year:'2022', accent:'#818CF8' },
  { title:'Google Cloud Associate Engineer',      issuer:'Google Cloud',        year:'2023', accent:'#34D399' },
  { title:'Certified Ethical Hacker (CEH)',       issuer:'EC-Council',          year:'2022', accent:'#F87171' },
];

export const Certifications = () => (
  <section id="certifications" className="relative py-32 z-10 border-t border-gray-100 bg-transparent">
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
      
      {/* ── Image Gallery (Professional & Small) ── */}
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} className="mb-24 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        {['/screenshots/cert-1.png', '/screenshots/cert-2.png', '/screenshots/cert-3.png'].map((src, idx) => (
          <motion.div key={idx} variants={fadeUp} className="glass-card flex-1 w-full rounded-2xl overflow-hidden group border border-gray-200 hover:border-blue-600/30 transition-all cursor-pointer shadow-lg p-2 bg-gray-50">
             <img src={src} alt={`Certification Preview ${idx + 1}`} className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:80 }}>
        <motion.p variants={fadeUp} className="section-label text-blue-600" style={{ marginBottom:20 }}>Credentials</motion.p>
        <motion.h2 variants={fadeUp} className="font-heading font-black text-gray-900 tracking-[-0.04em]" style={{ fontSize:'clamp(2.5rem,5vw,5rem)' }}>CERTIFICATIONS</motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {certs.map((c,i) => (
          <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:i*0.08 }}
            className="glass-card group bg-white border border-gray-100 shadow-sm" style={{ padding:28, position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:3, borderRadius:'14px 14px 0 0', background:c.accent }} />
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
              <Award size={28} style={{ color:c.accent }} />
              <span style={{ ...S }} className="text-[11px] text-gray-400">{c.year}</span>
            </div>
            <h3 className="font-heading font-bold text-gray-900 mb-2 leading-[1.3] text-[15px] group-hover:text-blue-600 transition-colors">{c.title}</h3>
            <p style={{ ...S }} className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">{c.issuer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── FOOTER ── */
export const Footer = () => (
  <footer id="contact" className="relative py-32 pb-12 z-10 border-t border-gray-200 bg-gray-50">
    <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">
        <div>
          <p className="section-label text-blue-600 mb-6">Let's Connect</p>
          <h2 className="font-heading font-black text-gray-900 leading-none mb-10 tracking-[-0.04em]" style={{ fontSize:'clamp(2.5rem,6vw,5rem)' }}>
            LET'S BUILD<br /><span className="text-blue-600">FUTURE</span><br />SYSTEMS.
          </h2>
          {[{ Icon:Mail, label:'mahlebkenza1@gmail.com', href:'mailto:mahlebkenza1@gmail.com' },
            { Icon:Linkedin, label:'linkedin.com/in/kenza-mahleb', href:'https://www.linkedin.com/in/kenza-mahleb-9860b5279' },
          ].map(({ Icon, label, href }) => (
            <a key={label} href={href} className="flex items-center gap-4 text-gray-600 mb-4 transition-all hover:text-blue-600 text-[15px]">
              <span className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 bg-white"><Icon size={16} /></span>
              {label}
            </a>
          ))}
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-[14px] shadow-sm">
          <h3 className="font-heading font-bold text-[20px] text-gray-900 mb-1">Send a Message</h3>
          {['Your Name','Email Address'].map(ph => (
            <input key={ph} placeholder={ph} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-[13px] text-gray-900 outline-none focus:border-blue-600 transition-all" />
          ))}
          <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-[13px] text-gray-900 outline-none resize-none focus:border-blue-600 transition-all" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white border-none rounded-lg p-3.5 font-heading font-bold text-[13px] tracking-[0.06em] uppercase cursor-pointer flex items-center justify-center gap-2 transition-all shadow-md">
            Send Message <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-6 flex justify-between items-center flex-wrap gap-3">
        <p style={{ ...S }} className="text-[11px] text-gray-400">© 2026 Kenza Mahleb · Senior Systems Engineer · Paris, France</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span style={{ ...S }} className="text-[11px] text-gray-500">Open to remote & international projects</span>
        </div>
      </div>
    </div>
  </footer>
);
