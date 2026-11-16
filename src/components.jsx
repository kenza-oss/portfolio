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
export const OceanWave3D = () => {
  const mountRef = React.useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 440;

    // 1. Scene & Cinematic Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 100);
    // 3/4 Iconic surf vantage point: looking into the curling barrel
    camera.position.set(3.4, 2.3, 4.8);
    camera.lookAt(0.3, 0.7, 0.1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 2. Realistic Ocean Lighting
    const ambientLight = new THREE.AmbientLight(0x0c2540, 2.0);
    scene.add(ambientLight);

    // Sunlight refraction from above (crisp daylight hitting ocean crest)
    const sunLight = new THREE.DirectionalLight(0xe0f2fe, 3.4);
    sunLight.position.set(5, 9, 4);
    scene.add(sunLight);

    // Backlight glowing through the wave barrel (translucent turquoise water)
    const barrelBacklight = new THREE.DirectionalLight(0x06b6d4, 4.5);
    barrelBacklight.position.set(-6, 3.5, -4);
    scene.add(barrelBacklight);

    // Subsurface scatter point light
    const seaDepthLight = new THREE.PointLight(0x0284c7, 3.8, 14);
    seaDepthLight.position.set(0.5, 0.6, 0.2);
    scene.add(seaDepthLight);

    // Master Wave Group
    const waveGroup = new THREE.Group();
    waveGroup.rotation.y = -0.22;
    scene.add(waveGroup);

    // 3. Realistic Breaking Barrel Wave Geometry
    const segU = 72; // along cross section (from front trough, up face, to curling barrel lip)
    const segV = 64; // along wave lateral width

    const numVertices = (segU + 1) * (segV + 1);
    const positions = new Float32Array(numVertices * 3);
    const colors = new Float32Array(numVertices * 3);
    const indices = [];
    const baseCoords = [];

    let ptr = 0;
    for (let j = 0; j <= segV; j++) {
      const v = (j / segV) * 2 - 1; // -1 to 1
      const z0 = v * 2.8;

      for (let i = 0; i <= segU; i++) {
        const u = i / segU; // 0 to 1
        baseCoords.push({ u, v, z0 });

        positions[ptr] = 0;
        positions[ptr + 1] = 0;
        positions[ptr + 2] = 0;

        colors[ptr] = 0.05;
        colors[ptr + 1] = 0.25;
        colors[ptr + 2] = 0.55;

        ptr += 3;
      }
    }

    for (let j = 0; j < segV; j++) {
      for (let i = 0; i < segU; i++) {
        const a = j * (segU + 1) + i;
        const b = a + 1;
        const c = a + (segU + 1);
        const d = c + 1;

        indices.push(a, c, b);
        indices.push(b, c, d);
      }
    }

    const waveGeo = new THREE.BufferGeometry();
    waveGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    waveGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    waveGeo.setIndex(indices);

    // Realistic Water Shader Material with specular reflections
    const waveMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.12,
      metalness: 0.18,
      side: THREE.DoubleSide,
      flatShading: false
    });

    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveGroup.add(waveMesh);

    // 4. Frothing Crest Foam Ribbon (Concentrated White Foam at Lip)
    const crestCount = 140;
    const crestPos = new Float32Array(crestCount * 3);
    for (let c = 0; c < crestCount * 3; c++) crestPos[c] = 0;
    const crestGeo = new THREE.BufferGeometry();
    crestGeo.setAttribute('position', new THREE.BufferAttribute(crestPos, 3));
    const crestMat = new THREE.PointsMaterial({
      size: 0.16,
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });
    const crestMesh = new THREE.Points(crestGeo, crestMat);
    waveGroup.add(crestMesh);

    // 5. Volumetric Sea Spray & Spindrift (Wind blowing mist off wave crest)
    const sprayCount = 480;
    const sprayPos = new Float32Array(sprayCount * 3);
    const sprayColors = new Float32Array(sprayCount * 3);
    const sprayData = [];

    for (let k = 0; k < sprayCount; k++) {
      const p = {
        baseV: (Math.random() * 2 - 1) * 2.7,
        life: Math.random(),
        speedX: -0.9 - Math.random() * 1.6, // blown backward by ocean wind
        speedY: 0.7 + Math.random() * 1.3,  // rising into the air
        speedZ: (Math.random() - 0.5) * 0.7,
        curX: 0,
        curY: 0,
        curZ: 0
      };
      sprayData.push(p);

      sprayPos[k * 3] = 0;
      sprayPos[k * 3 + 1] = 0;
      sprayPos[k * 3 + 2] = 0;

      sprayColors[k * 3] = 0.92;
      sprayColors[k * 3 + 1] = 0.98;
      sprayColors[k * 3 + 2] = 1.0;
    }

    const sprayGeo = new THREE.BufferGeometry();
    sprayGeo.setAttribute('position', new THREE.BufferAttribute(sprayPos, 3));
    sprayGeo.setAttribute('color', new THREE.BufferAttribute(sprayColors, 3));

    const sprayMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const sprayMesh = new THREE.Points(sprayGeo, sprayMat);
    waveGroup.add(sprayMesh);

    // 6. Interactive Mouse Control (tilt & parallax into the barrel)
    let targetRotY = -0.22;
    let targetRotX = 0;
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = -0.22 + x * 0.45;
      targetRotX = y * 0.3;

      if (isDragging) {
        const deltaX = e.clientX - prevX;
        const deltaY = e.clientY - prevY;
        waveGroup.rotation.y += deltaX * 0.008;
        waveGroup.rotation.x += deltaY * 0.008;
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

    // 7. Animation Loop with Real Hydrodynamic Wave Mechanics
    let reqId;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const waveSpeed = time * 1.85;

      const posArr = waveGeo.attributes.position.array;
      const colArr = waveGeo.attributes.color.array;

      let idx = 0;
      for (let k = 0; k < baseCoords.length; k++) {
        const { u, v, z0 } = baseCoords[k];

        // Diagonal peeling crest across the lateral line (like a real pointbreak)
        const peel = v * 0.45;
        const uAdj = u + Math.sin(v * 2.4 + waveSpeed * 0.5) * 0.035;

        // Capillary surface chop
        const chop1 = Math.sin(u * 14.0 + v * 9.0 + waveSpeed * 2.6) * 0.035;
        const chop2 = Math.cos(u * 20.0 - v * 15.0 + waveSpeed * 3.2) * 0.02;
        const chop = chop1 + chop2;

        let x, y, z;
        z = z0 + Math.sin(u * 5.5 + waveSpeed) * 0.07;

        // True Curving Barrel Wave Cross Section:
        if (uAdj < 0.46) {
          // 1. Trough & open ocean before the swell
          const p = uAdj / 0.46;
          x = (p - 0.5) * 3.4;
          y = -0.4 + Math.sin(p * Math.PI) * 0.12 + chop;
        } else if (uAdj < 0.77) {
          // 2. Steep rising wave face (the wall of water)
          const p = (uAdj - 0.46) / (0.77 - 0.46);
          const smoothP = p * p * (3 - 2 * p); // smooth sigmoid acceleration
          x = 0.55 + p * 0.65;
          y = -0.4 + smoothP * 1.95 + chop * (1 - p * 0.5);
        } else {
          // 3. The crashing curl, tube, and falling barrel lip!
          const q = (uAdj - 0.77) / (1.0 - 0.77);
          const curlPulse = 1.0 + Math.sin(waveSpeed * 1.2 + peel) * 0.08;
          const angle = q * Math.PI * 1.38 * curlPulse;
          const radius = (0.62 + Math.cos(v * 1.6) * 0.06) * curlPulse;

          const peakX = 1.2;
          const peakY = 1.55;

          // Tube / barrel curl forward and down into the trough
          x = peakX - (1 - Math.cos(angle)) * radius;
          y = peakY + Math.sin(angle) * (radius * 0.85) - (q * 0.45) + chop * 0.4;
        }

        // Swell surge
        const surge = Math.sin(waveSpeed * 0.75 + v * 1.2) * 0.08;
        y += surge;

        posArr[idx] = x;
        posArr[idx + 1] = y;
        posArr[idx + 2] = z;

        // Realistic Vertex Shading: Deep Navy -> Turquoise Face -> Foam White Crest
        if (uAdj >= 0.74) {
          // Frothing white foam mantle at crest & lip
          const foamFactor = Math.min(1.0, (uAdj - 0.74) / 0.12);
          colArr[idx] = 0.25 + foamFactor * 0.75;
          colArr[idx + 1] = 0.7 + foamFactor * 0.3;
          colArr[idx + 2] = 0.88 + foamFactor * 0.12;
        } else if (uAdj >= 0.46) {
          // Translucent glowing turquoise & cyan wave wall
          const faceP = (uAdj - 0.46) / 0.28;
          colArr[idx] = 0.02 + faceP * 0.18;
          colArr[idx + 1] = 0.26 + faceP * 0.48;
          colArr[idx + 2] = 0.58 + faceP * 0.32;
        } else {
          // Deep Atlantic navy ocean bed
          colArr[idx] = 0.02;
          colArr[idx + 1] = 0.12;
          colArr[idx + 2] = 0.32;
        }

        idx += 3;
      }

      waveGeo.attributes.position.needsUpdate = true;
      waveGeo.attributes.color.needsUpdate = true;
      waveGeo.computeVertexNormals();

      // Update White Foam Crest Ribbon
      const cArr = crestGeo.attributes.position.array;
      for (let c = 0; c < crestCount; c++) {
        const vC = ((c / crestCount) * 2 - 1) * 2.6;
        const waveT = time * 1.85;
        const peakX = 1.15 - Math.sin(vC * 1.1 + waveT) * 0.08;
        const peakY = 1.54 + Math.cos(vC * 1.4 + waveT) * 0.08;
        cArr[c * 3] = peakX;
        cArr[c * 3 + 1] = peakY + (Math.random() - 0.5) * 0.07;
        cArr[c * 3 + 2] = vC;
      }
      crestGeo.attributes.position.needsUpdate = true;

      // Update Sea Spray Spindrift blown off wave crest
      const sArr = sprayGeo.attributes.position.array;
      for (let k = 0; k < sprayCount; k++) {
        const sp = sprayData[k];
        sp.life += 0.016;
        if (sp.life > 1.0) {
          sp.life = 0;
          // Respawn along curling lip
          sp.curX = 1.15 + (Math.random() - 0.5) * 0.25;
          sp.curY = 1.52 + (Math.random() - 0.5) * 0.18;
          sp.curZ = sp.baseV + (Math.random() - 0.5) * 0.35;
        } else {
          sp.curX += sp.speedX * 0.018;
          sp.curY += sp.speedY * 0.017 - 0.006; // upward arc then drift
          sp.curZ += sp.speedZ * 0.018;
        }
        sArr[k * 3] = sp.curX;
        sArr[k * 3 + 1] = sp.curY;
        sArr[k * 3 + 2] = sp.curZ;
      }
      sprayGeo.attributes.position.needsUpdate = true;

      // Smooth camera parallax
      if (!isDragging) {
        waveGroup.rotation.y += (targetRotY - waveGroup.rotation.y) * 0.05;
        waveGroup.rotation.x += (targetRotX - waveGroup.rotation.x) * 0.05;
      }

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

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);

      waveGeo.dispose();
      waveMat.dispose();
      crestGeo.dispose();
      crestMat.dispose();
      sprayGeo.dispose();
      sprayMat.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[440px] xl:w-[490px] select-none">
      {/* Bioluminescent Deep Ocean Glow Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/25 via-cyan-500/20 to-transparent blur-[90px] rounded-full pointer-events-none" />

      {/* Real 3D Crashing Ocean Wave Canvas */}
      <div 
        ref={mountRef} 
        className="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] cursor-grab active:cursor-grabbing flex items-center justify-center rounded-3xl touch-none"
        title="Interactive 3D Crashing Ocean Wave: Drag or hover to look into the wave barrel"
      />

      {/* Elegant, Minimalist Pill Badge (Clean and unobtrusive) */}
      <div className="absolute bottom-2 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-800/50 backdrop-blur-md text-[10px] font-mono text-cyan-300 pointer-events-none shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>3D Real Ocean Wave · Drag to Explore</span>
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

