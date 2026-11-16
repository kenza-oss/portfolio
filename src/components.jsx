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
          <div className="w-10 h-10 bg-gradient-to-tr from-red-800 via-red-600 to-red-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform">K</div>
          <span className="font-heading font-black text-lg tracking-tighter text-slate-900 group-hover:text-red-600 transition-colors">KENZA MAHLEB.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {['About', 'Projects', 'Experience', 'Testimonials', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-red-600 transition-colors">
              {item}
            </a>
          ))}
          <a href="/cv-kenza-mahleb.pdf" download="CV_Kenza_Mahleb.pdf" target="_blank" rel="noopener noreferrer"
            className="border border-slate-200 text-slate-700 hover:border-red-600 hover:text-red-600 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 shadow-sm bg-white">
            <Download size={13} className="text-red-600" /> CV
          </a>
          <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-red-600/20 hover:scale-[1.02]">
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
                className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors">
                {item}
              </a>
            ))}
            <a href="/cv-kenza-mahleb.pdf" download="CV_Kenza_Mahleb.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}
              className="border border-red-200 text-red-600 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 bg-red-50/50">
              <Download size={15} /> Download CV (PDF)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ─────────────── SENIOR 3D WEBGL NEURAL TENSOR CORE ─────────────── */
export const Neural3DCore = () => {
  const mountRef = React.useRef(null);
  const [fps, setFps] = useState(60);
  const [activeNodes, setActiveNodes] = useState(64);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.4);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. High-Tech Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const redCoreLight = new THREE.PointLight(0xdc2626, 4.5, 18);
    redCoreLight.position.set(2, 3, 4);
    scene.add(redCoreLight);

    const rimLight = new THREE.PointLight(0xef4444, 3.5, 20);
    rimLight.position.set(-3, -3, 3);
    scene.add(rimLight);

    // Master 3D Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 3. Central Quantum Torus Knot (Tensor Contraction Core)
    const knotGeo = new THREE.TorusKnotGeometry(0.95, 0.26, 128, 24, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.15,
      metalness: 0.88,
      wireframe: true,
      emissive: 0x991b1b,
      emissiveIntensity: 0.55
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    masterGroup.add(knotMesh);

    // 4. Geodesic Icosahedron Outer Lattice
    const icoGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    masterGroup.add(icoMesh);

    // 5. Dynamic Synaptic Plexus System (Particles & Connecting Synaptic Lines)
    const nodeCount = 58;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeVelocities = [];
    const maxDistance = 1.15;

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.45 + Math.random() * 1.1;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.007,
        y: (Math.random() - 0.5) * 0.007,
        z: (Math.random() - 0.5) * 0.007
      });
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.065,
      transparent: true,
      opacity: 0.95
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    masterGroup.add(pointsMesh);

    // Dynamic Line Segments
    const maxLines = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    masterGroup.add(linesMesh);

    // 6. Tilted Orbital Hologram Radar Rings
    const ringGeo = new THREE.RingGeometry(2.7, 2.73, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xdc2626,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2.7;
    ring1.rotation.y = Math.PI / 6;
    masterGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = -Math.PI / 3.1;
    ring2.rotation.y = -Math.PI / 5;
    masterGroup.add(ring2);

    // 7. Interactive Mouse / Touch Parallax & Drag
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetX = y * 0.7;
      targetY = x * 0.7;

      if (isDragging) {
        const deltaX = e.clientX - prevX;
        const deltaY = e.clientY - prevY;
        masterGroup.rotation.y += deltaX * 0.01;
        masterGroup.rotation.x += deltaY * 0.01;
        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // 8. Animation Loop
    let reqId;
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const animate = (now) => {
      reqId = requestAnimationFrame(animate);

      // FPS tracking
      frameCount++;
      if (now - lastFpsUpdate >= 500) {
        setFps(Math.round((frameCount * 1000) / (now - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = now;
      }

      // Rotations
      knotMesh.rotation.x += 0.007;
      knotMesh.rotation.y += 0.011;

      icoMesh.rotation.y -= 0.0035;
      icoMesh.rotation.z += 0.0025;

      ring1.rotation.z += 0.004;
      ring2.rotation.z -= 0.0035;

      // Tensor Core Sinusoidal Pulse
      const scale = 1 + Math.sin(now * 0.002) * 0.06;
      knotMesh.scale.set(scale, scale, scale);

      // Parallax smooth interpolation
      if (!isDragging) {
        masterGroup.rotation.x += (targetX - masterGroup.rotation.x) * 0.05;
        masterGroup.rotation.y += (targetY - masterGroup.rotation.y) * 0.05;
      }

      // Update Synaptic Nodes & Lines
      const pos = pointsGeo.attributes.position.array;
      let lineIdx = 0;

      for (let i = 0; i < nodeCount; i++) {
        pos[i * 3] += nodeVelocities[i].x;
        pos[i * 3 + 1] += nodeVelocities[i].y;
        pos[i * 3 + 2] += nodeVelocities[i].z;

        const d = Math.sqrt(pos[i * 3] ** 2 + pos[i * 3 + 1] ** 2 + pos[i * 3 + 2] ** 2);
        if (d > 2.5 || d < 1.3) {
          nodeVelocities[i].x *= -1;
          nodeVelocities[i].y *= -1;
          nodeVelocities[i].z *= -1;
        }

        for (let j = i + 1; j < nodeCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            linePositions[lineIdx++] = pos[i * 3];
            linePositions[lineIdx++] = pos[i * 3 + 1];
            linePositions[lineIdx++] = pos[i * 3 + 2];
            linePositions[lineIdx++] = pos[j * 3];
            linePositions[lineIdx++] = pos[j * 3 + 1];
            linePositions[lineIdx++] = pos[j * 3 + 2];
          }
        }
      }

      pointsGeo.attributes.position.needsUpdate = true;
      linesGeo.setDrawRange(0, lineIdx / 3);
      linesGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    reqId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);

      knotGeo.dispose();
      knotMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[410px] select-none">
      {/* 3D Energy Glow Aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/15 via-rose-500/10 to-transparent blur-[80px] rounded-full pointer-events-none" />

      {/* Real Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="relative w-full h-[360px] sm:h-[390px] cursor-grab active:cursor-grabbing flex items-center justify-center rounded-2xl touch-none"
        title="Interactive 3D Neural Tensor: Click and drag to inspect 3D geometry"
      />

      {/* ── High-End Senior Developer HUD Overlays ── */}
      {/* Top Telemetry Bar */}
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/85 border border-slate-800/80 backdrop-blur-md text-[10px] font-mono text-slate-300 pointer-events-none shadow-lg">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-bold text-white tracking-wider">3D_TENSOR.GL</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span>NODES: <strong className="text-red-400">58</strong></span>
          <span>SYNAPSES: <strong className="text-emerald-400">ACTIVE</strong></span>
          <span className="text-emerald-400 font-bold bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/30">
            {fps} FPS
          </span>
        </div>
      </div>

      {/* Floating Mathematical Formula Pills */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-14 -left-2 px-3 py-1 rounded-full bg-slate-950/90 border border-red-500/40 text-[10px] font-mono text-red-300 font-bold shadow-xl backdrop-blur-md pointer-events-none flex items-center gap-1.5"
      >
        <span className="text-red-500">λ</span> Softmax(QKᵀ / √d_k)
      </motion.div>

      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-24 -right-2 px-3 py-1 rounded-full bg-slate-950/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-bold shadow-xl backdrop-blur-md pointer-events-none flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        ∇L_θ · AdamW (lr=3e-4)
      </motion.div>

      {/* Interactive Micro-Terminal Card */}
      <div className="absolute -bottom-4 left-3 right-3 bg-slate-950/90 border border-slate-800 rounded-xl p-3 shadow-2xl backdrop-blur-md font-mono text-[10px] text-slate-300 pointer-events-none">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800/80 text-[9px] text-slate-400">
          <span className="flex items-center gap-1.5 text-red-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            AI_CORE // WEBGL_ACCELERATED
          </span>
          <span className="text-slate-400">Interactive 3D Parallax</span>
        </div>
        <div className="text-red-400 font-semibold truncate">// Multi-Head Synaptic Contraction</div>
        <div className="text-slate-400 truncate">const tensor = new TensorCore(&#123; dim: 1536, heads: 24 &#125;);</div>
        <div className="flex items-center justify-between mt-1 text-[9px]">
          <span className="text-emerald-400 font-bold">✓ Zero-Trust Hardware Isolation</span>
          <span className="text-slate-400 italic">Drag to rotate 3D</span>
        </div>
      </div>
    </div>
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
          
          {/* ── Rectangular Profile Card ── */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative group mt-4">
            <div className="w-40 h-52 xl:w-48 xl:h-64 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl relative z-10 bg-slate-900/5 group-hover:shadow-2xl transition-all duration-500">
              <img src="/profile_v6.webp" alt="Kenza Mahleb" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-2 -right-2 w-7 h-7 border-t-2 border-r-2 border-red-600/50 rounded-tr-xl" />
            <div className="absolute -bottom-2 -left-2 w-7 h-7 border-b-2 border-l-2 border-red-600/50 rounded-bl-xl" />
            <div className="absolute -bottom-3 right-4 px-2.5 py-0.5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold shadow-md z-20 flex items-center gap-1.5 border border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available
            </div>
          </motion.div>

          {/* ── Content area ── */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="pt-4 relative">
            
            {/* ── Senior 3D WebGL Neural Tensor Hologram Engine ── */}
            <div className="lg:absolute lg:-right-10 xl:-right-16 lg:top-12 xl:top-14 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:w-[410px] mt-12 lg:mt-0 z-20">
              <Neural3DCore />
            </div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-red-600 bg-red-50 border border-red-200/80 px-3.5 py-1 rounded-full">
                Kenza Mahleb · Cisco CCNA (94%) · ESGI Paris
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading font-black tracking-[-0.04em] mb-5 leading-[1.05] text-slate-900" style={{ fontSize: 'clamp(2.5rem,5.2vw,4.5rem)' }}>
              KENZA MAHLEB<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-600 to-rose-500">
                DRIVING DIGITAL RESILIENCE.
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="h-10 flex items-center mb-7">
              <span className="text-xl font-medium text-slate-600 flex items-center">
                I am a&nbsp;
                <span translate="no" className="notranslate font-bold text-red-600 underline decoration-red-200 underline-offset-4 flex items-center">
                  {typed}
                  <span className="inline-block w-[2px] h-5 ml-1 bg-red-600 animate-pulse" />
                </span>
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="max-w-xl leading-relaxed mb-10 text-lg text-slate-600">
              Hi, I'm <strong className="text-slate-900 font-bold">Kenza Mahleb</strong> — Bachelor in Computer Engineering graduate from <strong className="text-slate-900 font-bold">ESGI Paris</strong> and <strong className="text-red-600 font-bold">Cisco CCNA Certified (Score 94%)</strong>. I specialize in architecting resilient cloud infrastructures, automating zero-downtime CI/CD pipelines, and integrating intelligent AI agent systems.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-xl hover:scale-[1.02] flex items-center gap-2">
                Explore Projects <ArrowRight size={16} />
              </a>
              <a href="/cv-kenza-mahleb.pdf" download="CV_Kenza_Mahleb.pdf" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-black text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-xl flex items-center gap-2">
                <Download size={16} className="text-sky-400" /> Download CV
              </a>
              <a href="#contact" className="border border-slate-300 hover:border-red-600 text-slate-700 hover:text-red-600 px-6 py-3.5 rounded-xl font-bold text-sm transition-all bg-white shadow-sm">
                Contact Me
              </a>
              <div className="flex gap-2.5 ml-2">
                {[{ Icon: Github, href: 'https://github.com/kenza-oss' }, { Icon: Linkedin, href: 'https://www.linkedin.com/in/kenza-mahleb-9860b5279' }, { Icon: Mail, href: 'mailto:mahlebkenza1@gmail.com' }].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all border-slate-200 text-slate-500 hover:text-red-600 hover:bg-red-50 shadow-sm">
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-red-600/10 via-rose-500/5 to-transparent blur-[140px] rounded-full" />
        
        {/* Subtle Tech Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Concentric AI Radar Rings & Crosshairs behind Orbit */}
        <div className="absolute top-[380px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-red-500/10 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full border border-dashed border-red-500/15 animate-[spin_120s_linear_infinite]" />
          <div className="w-[450px] h-[450px] rounded-full border border-red-500/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />
          </div>
          {/* Radar Telemetry Labels */}
          <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-red-600/50 tracking-[0.3em] font-bold">RADAR // 000° TENSOR_SPACE</span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-red-600/50 tracking-[0.3em] font-bold">DIM: 1536 · METRIC: COSINE</span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[9px] text-red-600/50 tracking-[0.3em] -rotate-90 font-bold">WEIGHTS: SYNC</span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[9px] text-red-600/50 tracking-[0.3em] rotate-90 font-bold">NEURAL_BUS: ONLINE</span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        
        {/* ── Section Header ── */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 mb-5">
            <Sparkles size={12} className="text-red-600 animate-pulse" />
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-red-700">High-Performance Ecosystem</span>
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
          <div className="absolute w-[400px] h-[400px] rounded-full bg-red-600/5 blur-[90px] pointer-events-none" />

          <div className="scale-[0.55] sm:scale-75 md:scale-100 transition-transform origin-center flex items-center justify-center relative w-[560px] h-[560px]">
            {/* Geometric Ring Guides with High-Tech Dash Marks */}
            <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', border: '1.5px dashed rgba(220,38,38,0.22)' }} />
            <div style={{ position: 'absolute', width: 540, height: 540, borderRadius: '50%', border: '1px solid rgba(220,38,38,0.12)' }} />
            
            {/* Pulse Ring */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-red-500/10 animate-ping [animation-duration:6s]" />

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
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-red-600 to-rose-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500" />
              
              <div style={{
                position: 'relative',
                width: 128, height: 128, borderRadius: '50%',
                background: 'linear-gradient(145deg, #FFFFFF, #FFF5F5)',
                border: '2px solid rgba(220,38,38,0.25)',
                boxShadow: '0 12px 36px rgba(220,38,38,0.15), inset 0 0 15px rgba(220,38,38,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                {/* Tech Orbit Center Marker */}
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping absolute top-3" />
                <span style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 900, fontSize: 32, color: '#0F172A', letterSpacing: '-0.05em', lineHeight: 1 }}>
                  KM<span className="text-red-600">.</span>
                </span>
                <span className="text-red-600 font-mono text-[9px] font-bold tracking-[0.25em] uppercase mt-1 flex items-center gap-1">
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
              <Activity size={16} className="text-red-600" />
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
                  className="relative group bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Red Gradient Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/10 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />
                  
                  <div>
                    {/* Header: ID + Status + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-red-600 bg-red-50 border border-red-200/60 px-2 py-0.5 rounded">
                          {item.id}
                        </span>
                        <span className="font-mono text-[9px] font-bold text-slate-600">
                          {item.status}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200/60 text-red-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Title & Architecture Subtitle */}
                    <h3 className="font-heading font-black text-slate-900 text-lg mb-1 group-hover:text-red-600 transition-colors">
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
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-medium group-hover:bg-red-50/30 group-hover:border-red-100 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry Metric Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] text-slate-600">
                    <span className="truncate">{item.metric}</span>
                    <span className="text-red-500 font-bold ml-2">●</span>
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
                  className="relative group bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-red-500/10 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-red-600 bg-red-50 border border-red-200/60 px-2 py-0.5 rounded">
                          {item.id}
                        </span>
                        <span className="font-mono text-[9px] font-bold text-slate-600">
                          {item.status}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200/60 text-red-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="font-heading font-black text-slate-900 text-lg mb-1 group-hover:text-red-600 transition-colors">
                      {item.cat}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mb-6">
                      {item.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.items.map((it, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-medium group-hover:bg-red-50/30 group-hover:border-red-100 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] text-slate-600">
                    <span className="truncate">{item.metric}</span>
                    <span className="text-red-500 font-bold ml-2">●</span>
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

