import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2, Shield, Cpu, Cloud, Menu, X, FileText, Download, Server, Terminal, Network, ShieldCheck, Sparkles, Activity } from 'lucide-react';

/* ─────────────── SHARED VARIANTS ─────────────── */
export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } }
};
export const stagger = { show: { transition: { staggerChildren: 0.1 } } };

/* ─────────────── TYPEWRITER (ROBUST & TRANSLATION-SAFE) ─────────────── */
const useTypewriter = (words, speed = 80, delay = 2200) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentWord = words[loopNum % words.length];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, speed);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, speed, delay]);

  return text;
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
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-950 via-blue-700 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">K</div>
          <span className="font-heading font-black text-lg tracking-tighter text-slate-900 group-hover:text-cyan-600 transition-colors">KENZA MAHLEB.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {['About', 'Projects', 'Experience', 'Testimonials', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-600 transition-colors">
              {item}
            </a>
          ))}
          <a href="/cv-kenza-mahleb.pdf" download="CV_Kenza_Mahleb.pdf" target="_blank" rel="noopener noreferrer"
            className="border border-slate-200 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 shadow-sm bg-white">
            <Download size={13} className="text-cyan-600" /> CV
          </a>
          <a href="#contact" className="bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02]">
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
                className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-cyan-600 transition-colors">
                {item}
              </a>
            ))}
            <a href="/cv-kenza-mahleb.pdf" download="CV_Kenza_Mahleb.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}
              className="border border-cyan-200 text-cyan-600 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 bg-cyan-50/50">
              <Download size={15} /> Download CV (PDF)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ─────────────── 3D HYDRODYNAMIC OCEAN WAVE SIMULATION ─────────────── */
/* ─────────────── REAL OCEAN WAVE & LIVE CODE ENGINE ─────────────── */
export const OceanWave3D = () => {
  const mountRef = React.useRef(null);
  const [activeTab, setActiveTab] = useState('resilience');
  const [codeText, setCodeText] = useState('');

  const snippets = {
    resilience: `// Kenza Mahleb · Cloud Resilience Engine
const cluster = await CloudMesh.deploy({
  region: "paris-esgi-datacenter",
  nodes: 16,
  security: "Cisco-CCNA-ZeroTrust",
  orchestrator: "Kubernetes v1.30"
});

await cluster.enforcePolicy({
  failover: "instant-zero-downtime",
  latency: "< 14ms",
  ddosMitigation: "Active"
});

// Status: Production Mesh Online (100% SLA)
console.log("🌊 Resilience Cluster Active");`,

    ai: `# Kenza Mahleb · Autonomous AI Pipeline
class NeuralResilienceCore:
    def __init__(self, model="DeepSeek-R1-Distill"):
        self.vector_store = QdrantClient(host="mesh.kenza.io")
        self.metrics = SystemTelemetry(ccna_score=0.94)

    async def dispatch_agent(self, task: str):
        context = await self.vector_store.recall(task)
        result = await self.pipeline.execute(task, ctx=context)
        return self.metrics.log_verification(result)

# Real-Time Neural Stream: 60 FPS Latency Verified`
  };

  // Live Typing Effect
  useEffect(() => {
    const fullText = snippets[activeTab];
    setCodeText('');
    let idx = 0;
    const timer = setInterval(() => {
      if (idx < fullText.length) {
        idx += 2;
        setCodeText(fullText.substring(0, idx));
      } else {
        clearInterval(timer);
      }
    }, 28);
    return () => clearInterval(timer);
  }, [activeTab]);

  // Three.js Ocean Wave — pure coded geometry, no photo texture
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const W = container.clientWidth || 480;
    const H = 320;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020c1f, 0.08);

    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100);
    camera.position.set(0, 1.6, 5.2);
    camera.lookAt(0, 0.6, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // ── WAVE SURFACE ───────────────────────────────────────────────
    // Build a parametric surface: NX columns (wave profile) × NZ rows (depth)
    const NX = 120;   // horizontal resolution (wave shape)
    const NZ = 60;    // lateral depth resolution
    const WAVE_W = 6.0;
    const WAVE_D = 3.5;

    const totalVerts = (NX + 1) * (NZ + 1);
    const positions = new Float32Array(totalVerts * 3);
    const colors    = new Float32Array(totalVerts * 3);
    const uvs       = new Float32Array(totalVerts * 2);

    // Helper: wave profile at normalised u ∈ [0,1]
    // Returns {x, y} in world space (x = horizontal, y = height)
    // The wave rises steeply and curls at the crest (barrel shape)
    function waveProfile(u) {
      let x = (u - 0.5) * WAVE_W;
      let y;
      if (u < 0.30) {
        // deep trough — calm dark water
        y = -0.6 + u * 0.5;
      } else if (u < 0.62) {
        // rising face — steep slope
        const t = (u - 0.30) / 0.32;
        y = -0.45 + t * t * 2.6;
      } else if (u < 0.82) {
        // crest arch — the barrel curl
        const t = (u - 0.62) / 0.20;
        const angle = t * Math.PI * 0.72;   // 0 → ~130°
        const R = 0.55;
        x = (0.62 - 0.5) * WAVE_W + R * Math.sin(angle) * 0.9;
        y = 1.95 + R - R * Math.cos(angle);
      } else {
        // back slope / splash zone
        const t = (u - 0.82) / 0.18;
        x = (0.62 - 0.5) * WAVE_W + 0.55 * Math.sin(0.72 * Math.PI) * 0.9 + t * 0.5;
        y = 1.95 + 0.55 - 0.55 * Math.cos(0.72 * Math.PI) - t * 0.9;
      }
      return { x, y };
    }

    // Vertex colours keyed by height ratio h ∈ [0,1]
    function waveColor(u, h) {
      // Deep water / trough → dark navy
      const deep   = { r: 0.01, g: 0.07, b: 0.28 };
      // Mid face → turquoise cyan
      const face   = { r: 0.05, g: 0.52, b: 0.72 };
      // Crest / foam → bright cyan-white
      const foam   = { r: 0.78, g: 0.96, b: 1.00 };

      let t;
      if (h < 0.45) {
        t = h / 0.45;
        return { r: deep.r+(face.r-deep.r)*t, g: deep.g+(face.g-deep.g)*t, b: deep.b+(face.b-deep.b)*t };
      } else {
        t = (h - 0.45) / 0.55;
        return { r: face.r+(foam.r-face.r)*t, g: face.g+(foam.g-face.g)*t, b: face.b+(foam.b-face.b)*t };
      }
    }

    // Fill vertex arrays
    for (let iz = 0; iz <= NZ; iz++) {
      const v = iz / NZ;
      const z = (v - 0.5) * WAVE_D;
      for (let ix = 0; ix <= NX; ix++) {
        const u = ix / NX;
        const { x, y } = waveProfile(u);
        const idx3 = (iz * (NX + 1) + ix) * 3;
        const idx2 = (iz * (NX + 1) + ix) * 2;

        positions[idx3]     = x;
        positions[idx3 + 1] = y;
        positions[idx3 + 2] = z;

        // height ratio for colouring
        const hNorm = Math.max(0, Math.min(1, (y + 0.6) / 2.8));
        const col = waveColor(u, hNorm);
        colors[idx3]     = col.r;
        colors[idx3 + 1] = col.g;
        colors[idx3 + 2] = col.b;

        uvs[idx2]     = u;
        uvs[idx2 + 1] = v;
      }
    }

    // Build index buffer
    const indices = [];
    for (let iz = 0; iz < NZ; iz++) {
      for (let ix = 0; ix < NX; ix++) {
        const a = iz * (NX + 1) + ix;
        const b = a + 1;
        const c = a + (NX + 1);
        const d = c + 1;
        indices.push(a, c, b, b, c, d);
      }
    }

    const wavGeo = new THREE.BufferGeometry();
    wavGeo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
    wavGeo.setAttribute('color',    new THREE.BufferAttribute(colors,    3));
    wavGeo.setAttribute('uv',       new THREE.BufferAttribute(uvs,       2));
    wavGeo.setIndex(indices);
    wavGeo.computeVertexNormals();

    // Store original positions for animation
    const basePos = positions.slice();

    const wavMat = new THREE.MeshPhongMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      shininess: 90,
      specular: new THREE.Color(0x88ddff),
      transparent: true,
      opacity: 0.92,
    });

    const waveMesh = new THREE.Mesh(wavGeo, wavMat);
    scene.add(waveMesh);

    // ── FOAM RIBBON at the crest ───────────────────────────────────
    const foamCount = 180;
    const foamPositions = new Float32Array(foamCount * 3);
    for (let i = 0; i < foamCount; i++) {
      const u = 0.60 + (i / foamCount) * 0.26;
      const { x, y } = waveProfile(u);
      const z = (Math.random() - 0.5) * WAVE_D;
      foamPositions[i * 3]     = x + (Math.random() - 0.5) * 0.08;
      foamPositions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.06;
      foamPositions[i * 3 + 2] = z;
    }
    const foamGeo = new THREE.BufferGeometry();
    foamGeo.setAttribute('position', new THREE.BufferAttribute(foamPositions, 3));
    const foamMat = new THREE.PointsMaterial({ color: 0xeaf8ff, size: 0.045, transparent: true, opacity: 0.85 });
    const foamPoints = new THREE.Points(foamGeo, foamMat);
    scene.add(foamPoints);

    // ── SEA SPRAY PARTICLES ────────────────────────────────────────
    const sprayCount = 420;
    const sprayPos   = new Float32Array(sprayCount * 3);
    const sprayVel   = new Float32Array(sprayCount * 3);

    function resetSpray(i) {
      const u = 0.65 + Math.random() * 0.18;
      const { x, y } = waveProfile(u);
      sprayPos[i * 3]     = x + (Math.random() - 0.5) * 0.15;
      sprayPos[i * 3 + 1] = y;
      sprayPos[i * 3 + 2] = (Math.random() - 0.5) * WAVE_D * 0.8;
      sprayVel[i * 3]     = (Math.random() - 0.5) * 0.025;
      sprayVel[i * 3 + 1] = 0.012 + Math.random() * 0.028;
      sprayVel[i * 3 + 2] = (Math.random() - 0.5) * 0.012;
    }

    for (let i = 0; i < sprayCount; i++) {
      resetSpray(i);
      // scatter them at random phase
      sprayPos[i * 3 + 1] += Math.random() * 0.5;
    }

    const sprayGeo = new THREE.BufferGeometry();
    sprayGeo.setAttribute('position', new THREE.BufferAttribute(sprayPos, 3));
    const sprayMat = new THREE.PointsMaterial({ color: 0xd0f0ff, size: 0.025, transparent: true, opacity: 0.7 });
    const sprayPoints = new THREE.Points(sprayGeo, sprayMat);
    scene.add(sprayPoints);

    // ── OCEAN FLOOR / TROUGH PLANE ─────────────────────────────────
    const seaGeo = new THREE.PlaneGeometry(WAVE_W * 1.4, WAVE_D * 1.3, 1, 1);
    seaGeo.rotateX(-Math.PI / 2);
    const seaMat = new THREE.MeshPhongMaterial({ color: 0x010b1f, shininess: 20, transparent: true, opacity: 0.6 });
    const seaMesh = new THREE.Mesh(seaGeo, seaMat);
    seaMesh.position.set(0, -0.65, 0);
    scene.add(seaMesh);

    // ── LIGHTING ───────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0x112244, 1.2);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0x88ccff, 2.8);
    sun.position.set(3, 6, 4);
    scene.add(sun);

    const rimLight = new THREE.DirectionalLight(0x00aaff, 1.4);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x00e5ff, 1.5, 8);
    fillLight.position.set(0, 2.5, 2);
    scene.add(fillLight);

    // ── ANIMATION LOOP ─────────────────────────────────────────────
    let animId;
    let t = 0;
    const posAttr = wavGeo.attributes.position;

    function animate() {
      animId = requestAnimationFrame(animate);
      t += 0.012;

      // Animate wave vertices: phase-travel + swell breathing
      for (let iz = 0; iz <= NZ; iz++) {
        const v = iz / NZ;
        for (let ix = 0; ix <= NX; ix++) {
          const u = ix / NX;
          const vidx = iz * (NX + 1) + ix;
          const b3 = vidx * 3;

          const bx = basePos[b3];
          const by = basePos[b3 + 1];
          const bz = basePos[b3 + 2];

          // Travel phase along x (wave moves forward), swell along z
          const phase = t - bx * 0.35;
          const dy = Math.sin(phase * 1.1) * 0.08
                   + Math.sin(phase * 2.3 + bz * 0.9) * 0.04
                   + Math.sin(phase * 0.5 + bz * 1.5) * 0.06;

          // Crest amplification: more motion near the top
          const crAmp = u > 0.55 ? 1.0 + (u - 0.55) * 2.5 : 1.0;

          posAttr.setXYZ(vidx, bx, by + dy * crAmp, bz);
        }
      }
      posAttr.needsUpdate = true;
      wavGeo.computeVertexNormals();

      // Animate foam ribbon
      const fPos = foamGeo.attributes.position;
      for (let i = 0; i < foamCount; i++) {
        const u = 0.60 + (i / foamCount) * 0.26;
        const { x, y } = waveProfile(u);
        const phase = t - x * 0.35;
        const dy = Math.sin(phase * 1.1) * 0.08 + Math.sin(phase * 0.5) * 0.06;
        fPos.setY(i, y + dy * 1.6 + (Math.random() - 0.5) * 0.03);
      }
      fPos.needsUpdate = true;

      // Update spray particles
      const sPos = sprayGeo.attributes.position;
      for (let i = 0; i < sprayCount; i++) {
        sprayPos[i * 3]     += sprayVel[i * 3];
        sprayPos[i * 3 + 1] += sprayVel[i * 3 + 1];
        sprayPos[i * 3 + 2] += sprayVel[i * 3 + 2];
        sprayVel[i * 3 + 1] -= 0.0004; // gravity
        // Reset if fallen below crest
        if (sprayPos[i * 3 + 1] < -0.3) resetSpray(i);
      }
      sPos.array.set(sprayPos);
      sPos.needsUpdate = true;

      // Slow camera sway for life
      camera.position.x = Math.sin(t * 0.07) * 0.3;
      camera.position.y = 1.6 + Math.sin(t * 0.11) * 0.08;
      camera.lookAt(0, 0.6, 0);

      renderer.render(scene, camera);
    }
    animate();

    // Resize handler
    const onResize = () => {
      const nW = container.clientWidth || 480;
      camera.aspect = nW / H;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, H);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* 3D Wave canvas */}
      <div
        ref={mountRef}
        className="w-full rounded-xl overflow-hidden border border-cyan-500/20"
        style={{ height: 320, background: 'linear-gradient(180deg,#020c1f 0%,#041628 100%)' }}
      />

      {/* Live code terminal */}
      <div className="rounded-xl border border-cyan-500/20 overflow-hidden"
           style={{ background: 'rgba(2,12,31,0.95)' }}>
        {/* Tab bar */}
        <div className="flex border-b border-cyan-500/20">
          {[
            { id: 'resilience', label: 'Mesh.ts' },
            { id: 'ai',         label: 'AI_Core.py' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-mono transition-colors ${
                activeTab === tab.id
                  ? 'text-cyan-300 border-b-2 border-cyan-400 bg-cyan-900/20'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1 px-3">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
        </div>
        {/* Code area */}
        <pre className="p-4 text-xs font-mono text-cyan-300/90 leading-relaxed overflow-auto"
             style={{ minHeight: 110, maxHeight: 140, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
          {codeText}
          <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
        </pre>
      </div>
    </div>
  );
};

/* ─────────────── HERO ─────────────── */
export const Hero = () => {
  const typed = useTypewriter([
    'DevOps & Cloud Systems Engineer',
    'Network & Infrastructure Specialist',
    'AI & Automation Architect',
    'DevOps & Infrastructure Lead',
    'Full-Stack Developer (Django, React)'
  ]);
  
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* ── Light Artistic Background ── */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--neon-blue),transparent_50%)]" />
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 relative z-10">
        {/* ── 3-Column Clean Responsive Grid: [Photo] [Text] [3D Wave] ── */}
        <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 xl:gap-12 items-center justify-between w-full">
          
          {/* ── 1. Profile Photo Card (Left) ── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="relative group flex-shrink-0 mx-auto lg:mx-0"
          >
            {/* ── Floating "Hi!" Sticker (Autocollant Devant la Photo) ── */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: -8 }}
              whileHover={{ scale: 1.15, rotate: 2 }}
              transition={{ type: "spring", stiffness: 280, damping: 16 }}
              className="absolute -top-4 -left-3 z-30 cursor-pointer select-none"
            >
              <div className="relative px-3 py-1 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-cyan-400 shadow-[0_10px_25px_rgba(6,182,212,0.35)] flex items-center gap-1.5 hover:shadow-[0_14px_32px_rgba(6,182,212,0.55)] transition-all">
                <span className="text-lg animate-wave-hand inline-block">👋</span>
                <span className="font-heading font-black text-xs sm:text-sm tracking-tight text-slate-900 flex items-center">
                  Hi<span className="text-cyan-500">!</span>
                </span>
                {/* Micro glowing ping dot */}
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
              </div>
            </motion.div>

            <div className="w-40 h-52 xl:w-44 xl:h-60 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl relative z-10 bg-slate-900/5 group-hover:shadow-2xl transition-all duration-500">
              <img src="/profile_v6.webp" alt="Kenza Mahleb" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-2 -right-2 w-7 h-7 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-xl" />
            <div className="absolute -bottom-2 -left-2 w-7 h-7 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-xl" />
            <div className="absolute -bottom-3 right-4 px-2.5 py-0.5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold shadow-md z-20 flex items-center gap-1.5 border border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available
            </div>
          </motion.div>

          {/* ── 2. Content Area (Center / Main) ── */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 min-w-0">
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 animate-pulse flex-shrink-0" />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-600 bg-sky-50 border border-cyan-200/80 px-3 py-1 rounded-full truncate">
                Kenza Mahleb · Cisco CCNA (94%) · ESGI Paris
              </span>
            </motion.div>

            {/* ── Heading: Refined font-weight and clear line spacing ── */}
            <motion.h1 
              variants={fadeUp} 
              className="font-heading font-bold tracking-tight mb-3 text-slate-900" 
              style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', lineHeight: 1.15 }}
            >
              KENZA MAHLEB<br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-600 to-cyan-400">
                DRIVING DIGITAL RESILIENCE.
              </span>
            </motion.h1>

            {/* ── Typewriter Subtitle ── */}
            <motion.div variants={fadeUp} className="h-8 flex items-center mb-4">
              <span className="text-base sm:text-lg font-medium text-slate-600 flex items-center">
                I am a&nbsp;
                <span translate="no" className="notranslate font-semibold text-cyan-600 underline decoration-cyan-200 underline-offset-4 flex items-center">
                  {typed}
                  <span className="inline-block w-[2px] h-4 ml-1 bg-cyan-600 animate-pulse" />
                </span>
              </span>
            </motion.div>

            {/* ── Bio Paragraph ── */}
            <motion.p variants={fadeUp} className="leading-relaxed mb-6 text-sm sm:text-base text-slate-600 max-w-xl">
              Hi, I'm <strong className="text-slate-900 font-semibold">Kenza Mahleb</strong> — Bachelor in Computer Engineering graduate from <strong className="text-slate-900 font-semibold">ESGI Paris</strong> and <strong className="text-cyan-600 font-semibold">Cisco CCNA Certified (Score 94%)</strong>. I specialize in architecting resilient cloud infrastructures, automating zero-downtime CI/CD pipelines, and integrating intelligent AI agent systems.
            </motion.p>

            {/* ── Action Buttons ── */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 items-center">
              <a href="#projects" className="bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl hover:scale-[1.02] flex items-center gap-1.5">
                Explore Projects <ArrowRight size={15} />
              </a>
              <a href="/cv-kenza-mahleb.pdf" download="CV_Kenza_Mahleb.pdf" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-black text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl flex items-center gap-1.5">
                <Download size={15} className="text-sky-400" /> Download CV
              </a>
              <a href="#contact" className="border border-slate-300 hover:border-cyan-600 text-slate-700 hover:text-cyan-600 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all bg-white shadow-sm">
                Contact Me
              </a>
              <div className="flex gap-2 ml-1">
                {[{ Icon: Github, href: 'https://github.com/kenza-oss' }, { Icon: Linkedin, href: 'https://www.linkedin.com/in/kenza-mahleb-9860b5279' }, { Icon: Mail, href: 'mailto:mahlebkenza1@gmail.com' }].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl border flex items-center justify-center transition-all border-slate-200 text-slate-500 hover:text-cyan-600 hover:bg-sky-50 shadow-sm">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── 3. 3D Hydrodynamic Ocean Wave Simulation (Right Column — Completely Separate) ── */}
          <div className="w-full max-w-sm sm:max-w-md lg:w-[390px] xl:w-[450px] 2xl:w-[490px] flex-shrink-0 ml-auto justify-self-end mt-8 lg:mt-0 z-10 lg:translate-x-3 xl:translate-x-6">
            <OceanWave3D />
          </div>

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
    { 
      id: 'SYS.01',
      cat: 'Systems & Administration', 
      tagline: 'Linux Kernel & Enterprise AD',
      icon: Terminal,
      status: 'ONLINE',
      metric: 'Reliability: 99.98% · RBAC Ready',
      items: ['Linux (Debian, Kali, Ubuntu)', 'Windows Server & Active Directory', 'Docker Containerization', 'IAM & Access Control (RBAC)'] 
    },
    { 
      id: 'NET.02',
      cat: 'Networks & Infrastructure', 
      tagline: 'Cisco Routing & Dynamic Switching',
      icon: Network,
      status: 'CCNA 94%',
      metric: 'Protocols: OSPF · BGP · VLAN 802.1Q',
      items: ['Routing & Switching (OSPF, BGP)', 'VLAN, STP & Network Segmentation', 'Wireshark & Deep Packet Capture', 'Cisco Packet Tracer Architecture'] 
    },
    { 
      id: 'CLD.03',
      cat: 'Cloud Computing & DevOps', 
      tagline: 'Zero-Downtime CI/CD & Cloud Orchestration',
      icon: Cloud,
      status: 'OPTIMIZED',
      metric: 'Deployments: GitHub Actions · Supabase',
      items: ['CI/CD Pipelines (GitHub Actions)', 'Render, Supabase & Cloud Hosting', 'Cloudinary CDN Optimization', 'DNS Management & High-Availability'] 
    },
    { 
      id: 'SEC.04',
      cat: 'Cybersecurity & Audit', 
      tagline: 'Zero-Trust Defense & Vulnerability Mitigation',
      icon: ShieldCheck,
      status: 'HARDENED',
      metric: 'Standards: OWASP Top 10 · JWT · OAuth2',
      items: ['OWASP Top 10 Mitigation', 'JWT, OAuth2 & API Hardening', 'Nmap, Metasploit & Pentesting', 'Vulnerability & Surface Assessments'] 
    },
    { 
      id: 'DEV.05',
      cat: 'Development & Scripting', 
      tagline: 'Full-Stack Architecture & AI Integration',
      icon: Code2,
      status: 'PRODUCTION',
      metric: 'Engines: Django REST · React 18 · Python',
      items: ['Python & Automated Shell Scripting', 'RESTful API Engineering', 'Django & PostgreSQL Backend', 'React & Modern Reactive Interfaces'] 
    },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden border-t border-slate-100 bg-slate-900/[0.02]">
      
      {/* ── High-Degree AI Neural Matrix & Cybernetic Lattice Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Deep Ambient AI Red Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-900/20 via-cyan-500/10 to-transparent blur-[140px] rounded-full" />
        
        {/* Subtle Tech Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Concentric AI Radar Rings & Crosshairs behind Orbit */}
        <div className="absolute top-[380px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-cyan-500/20 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full border border-dashed border-cyan-500/25 animate-[spin_120s_linear_infinite]" />
          <div className="w-[450px] h-[450px] rounded-full border border-cyan-500/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
          </div>
          {/* Radar Telemetry Labels */}
          <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-cyan-600/50 tracking-[0.3em] font-bold">RADAR // 000° TENSOR_SPACE</span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-cyan-600/50 tracking-[0.3em] font-bold">DIM: 1536 · METRIC: COSINE</span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[9px] text-cyan-600/50 tracking-[0.3em] -rotate-90 font-bold">WEIGHTS: SYNC</span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[9px] text-cyan-600/50 tracking-[0.3em] rotate-90 font-bold">NEURAL_BUS: ONLINE</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        
        {/* ── Section Header ── */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-cyan-200/80 mb-5">
            <Sparkles size={12} className="text-cyan-600 animate-pulse" />
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-cyan-800">High-Performance Ecosystem</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-heading font-black text-slate-900 tracking-[-0.04em]" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)' }}>
            TECHNICAL ARCHITECTURE
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 text-sm max-w-lg mx-auto mt-4 font-normal leading-relaxed">
            A battle-tested synergy of cloud infrastructure, network protocols, cybersecurity frameworks, and intelligent autonomous workflows.
          </motion.p>
        </motion.div>

        {/* ── 3D Multi-Ring Orbit with Central Cyber Core ── */}
        <div className="relative w-full h-[440px] sm:h-[540px] md:h-[620px] flex items-center justify-center mb-24 overflow-hidden">
          
          {/* Orbital Depth Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none" />

          <div className="scale-[0.55] sm:scale-75 md:scale-100 transition-transform origin-center flex items-center justify-center relative w-[560px] h-[560px]">
            {/* Geometric Ring Guides with High-Tech Dash Marks */}
            <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', border: '1.5px dashed rgba(6,182,212,0.3)' }} />
            <div style={{ position: 'absolute', width: 540, height: 540, borderRadius: '50%', border: '1px solid rgba(2,132,199,0.2)' }} />
            
            {/* Pulse Ring */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-500/20 animate-ping [animation-duration:6s]" />

            {/* Spinning Orbit Ring 1 (Inner Stack) */}
            <div className="orbit-ring-1" style={{ position: 'absolute', width: 300, height: 300 }}>
              {tools1.map((t, i) => <OrbitTool key={t.name} tool={t} index={i} total={tools1.length} r={150} counterClass="counter-rotate-1" />)}
            </div>

            {/* Spinning Orbit Ring 2 (Outer Stack) */}
            <div className="orbit-ring-2" style={{ position: 'absolute', width: 540, height: 540 }}>
              {tools2.map((t, i) => <OrbitTool key={t.name} tool={t} index={i} total={tools2.length} r={270} counterClass="counter-rotate-2" />)}
            </div>

            {/* Central KM Quantum Cyber Core */}
            <div className="relative z-20 group cursor-default">
              {/* Core Glow Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500" />
              
              <div style={{
                position: 'relative',
                width: 128, height: 128, borderRadius: '50%',
                background: 'linear-gradient(145deg, #FFFFFF, #FFF5F5)',
                border: '2px solid rgba(6,182,212,0.35)',
                boxShadow: '0 12px 36px rgba(2,132,199,0.25), inset 0 0 15px rgba(6,182,212,0.08)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                {/* Tech Orbit Center Marker */}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-ping absolute top-3" />
                <span style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 900, fontSize: 32, color: '#0F172A', letterSpacing: '-0.05em', lineHeight: 1 }}>
                  KM<span className="text-cyan-600">.</span>
                </span>
                <span className="text-cyan-600 font-mono text-[9px] font-bold tracking-[0.25em] uppercase mt-1 flex items-center gap-1">
                  CORE <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── High-Tech Futuristic Capability Modules (Redesigned Command Console) ── */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-cyan-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">Specialized Infrastructure Domains</span>
            </div>
            <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
              5 OF 5 ENGINES OPERATIONAL
            </span>
          </div>

          {/* Grid Layout: Balanced & Innovative */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="relative group bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Red Gradient Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />
                  
                  <div>
                    {/* Header: ID + Status + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-cyan-600 bg-sky-50 border border-cyan-200/60 px-2 py-0.5 rounded">
                          {item.id}
                        </span>
                        <span className="font-mono text-[9px] font-bold text-slate-600">
                          {item.status}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-cyan-200/60 text-cyan-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Title & Architecture Subtitle */}
                    <h3 className="font-heading font-black text-slate-900 text-lg mb-1 group-hover:text-cyan-600 transition-colors">
                      {item.cat}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mb-6">
                      {item.tagline}
                    </p>

                    {/* Skill Tech Chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.items.map((it, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-medium group-hover:bg-sky-50/30 group-hover:border-cyan-100 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry Metric Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] text-slate-600">
                    <span className="truncate">{item.metric}</span>
                    <span className="text-cyan-500 font-bold ml-2">●</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 2 Wider Balanced Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cats.slice(3, 5).map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="relative group bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-cyan-600 bg-sky-50 border border-cyan-200/60 px-2 py-0.5 rounded">
                          {item.id}
                        </span>
                        <span className="font-mono text-[9px] font-bold text-slate-600">
                          {item.status}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-cyan-200/60 text-cyan-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="font-heading font-black text-slate-900 text-lg mb-1 group-hover:text-cyan-600 transition-colors">
                      {item.cat}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mb-6">
                      {item.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.items.map((it, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-medium group-hover:bg-sky-50/30 group-hover:border-cyan-100 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] text-slate-600">
                    <span className="truncate">{item.metric}</span>
                    <span className="text-cyan-500 font-bold ml-2">●</span>
                  </div>
                </div>
              );
            })}
          </div>

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

