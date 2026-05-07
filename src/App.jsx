import React, { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function Icon({ name, className = "h-5 w-5" }) {
  const paths = {
    arrow: "M5 12h14M13 5l7 7-7 7",
    play: "M8 5v14l11-7L8 5z",
    spark: "M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z",
    layers: "M12 3l9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 16l9 5 9-5",
    megaphone: "M4 13h4l10 5V6L8 11H4v2z M8 13l2 7",
    pen: "M4 20l4-1 11-11-3L5 16l-1 4z M14 6l3 3",
    monitor: "M4 5h16v11H4V5z M9 21h6 M12 16v5",
    video: "M4 6h11v12H4V6z M15 10l5-3v10l-5-3",
    cursor: "M5 3l14 10-7 1-3 6L5 3z",
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}

function VoxelLogo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 74.64 23.76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Voxel">
      <path fill="currentColor" d="M24.76,10.28h-3.51c-.32.99-.63,1.99-.95,2.98-.24.72-.5,1.45-.76,2.19-.26.72-.52,1.42-.78,2.11-.14-.41-.29-.83-.43-1.25-.25-.72-.49-1.44-.73-2.15-.47-1.29-.94-2.59-1.41-3.88h-2.43c.59,1.38,1.19,2.77,1.79,4.16.82,1.89,1.64,3.76,2.46,5.63l2.39.02,4.34-9.8Z" />
      <path fill="currentColor" d="M11.97,10.28l4.32,9.78h1.09c-.7-1.62-1.4-3.25-2.12-4.89-.71-1.64-1.43-3.27-2.14-4.89h-1.15Z" />
      <path fill="currentColor" d="M10.29,10.29l4.32,9.78h1.09c-.7-1.62-1.4-3.25-2.12-4.89-.71-1.64-1.43-3.27-2.14-4.89h-1.15Z" />
      <path fill="currentColor" d="M35.17,12.06c.92,1.21,1.01,2.63,1.01,3.12,0,1.03-.31,1.84-.47,2.18-.9,2-2.85,3.08-5.01,3.08-1.44,0-2.47-.47-2.94-.72-.18-.11-.58-.34-.99-.72-1.55-1.37-1.64-3.08-1.64-3.84,0-2.5,1.39-3.73,2.2-4.27.56-.38,1.57-.94,3.19-.97,2.61-.02,4.05,1.33,4.65,2.14ZM29.57,13c-.83.45-1.24,1.3-1.24,2.23,0,.18,0,.56.2,1.03.36.85,1.19,1.39,2.11,1.39,1.37,0,2.27-1.17,2.27-2.47s-.9-2.5-2.29-2.47c-.22.02-.58.04-1.06.29Z" />
      <path fill="currentColor" d="M41.19,11.79c-.34-.49-.67-.99-1.03-1.51h-3.8l3.75,4.79-4.09,5.01h3.8c.47-.63.97-1.28,1.39-1.91.32-.47.6-.94.9-1.41v-3.51c-.31-.48-.6-.98-.92-1.46Z" />
      <path fill="currentColor" d="M44.14,14.98l3.75-4.7h-3.84c-.29.43-.56.85-.85,1.28-.36.58-.72,1.17-1.06,1.73-.01-.02-.02-.03-.03-.05v3.51s.04-.05.05-.07c.7,1.12,1.44,2.25,2.2,3.39h3.8l-4.02-5.1Z" />
      <path fill="currentColor" d="M52.12,15.86c.07.34.13.67.31.99.38.72,1.12,1.12,1.93,1.12,1.24,0,1.82-.97,2-1.26l2.59,1.24c-.13.18-.29.47-.65.83-1.06,1.1-2.5,1.62-4,1.62-2.52,0-3.89-1.39-4.43-2.2-.31-.47-.81-1.53-.81-3.01,0-.49.02-1.42.56-2.52.22-.49.72-1.39,1.93-2.09.4-.22,1.35-.67,2.63-.67.72,0,1.26.13,1.53.2,2.34.65,3.08,2.43,3.33,3.26.18.72.2,1.51.18,2.5h-7.1ZM56.14,13.99c-.04-.27-.27-1.24-1.1-1.66-.16-.09-.49-.22-.94-.22-.4,0-1.24.13-1.73,1.1-.07.18-.13.38-.25.79h4.02Z" />
      <path fill="currentColor" d="M64.35,3.32v16.77h-3.21V3.32h3.21Z" />
    </svg>
  );
}

const cases = [
  {
    brand: "MOHER",
    category: "Commercial Film",
    description: "Moher için çekilen reklam filmi",
    tags: ["Video Production", "Creative Campaign", "Fashion"],
    src: "https://res.cloudinary.com/dymkjy9fd/video/upload/moher_reklam_çekimi_rvebzc.mp4",
  },
  {
    brand: "PATSOLINA",
    category: "Social Media",
    description: "Patsolina reels çalışması",
    tags: ["Video Production", "Food & Beverage", "Social Content"],
    src: "https://res.cloudinary.com/dymkjy9fd/video/upload/patsolina_reels1_ctrxmf.mp4",
  },
  {
    brand: "ELLABELLA",
    category: "Fashion Film",
    description: "EllaBella moda filmi",
    tags: ["Fashion", "Campaign Film", "Creative Production"],
    src: "https://res.cloudinary.com/dymkjy9fd/video/upload/ella_bella_reklam_çekimi_qkzt8q.mp4",
  },
];

const showreelVideos = [
  {
    title: "Voxel Reel 01",
    src: "https://res.cloudinary.com/dymkjy9fd/video/upload/voxel_-_showreel_-_02_yvzbs3.mp4",
  },
  {
    title: "Voxel Reel 02",
    src: "https://res.cloudinary.com/dymkjy9fd/video/upload/voxel_-_showreel_-_03_xs3n4n.mp4",
  },
  {
    title: "Voxel Reel 03",
    src: "https://res.cloudinary.com/dymkjy9fd/video/upload/voxel_-_showreel_-_04_hgk3b7.mp4",
  },
  {
    title: "Voxel Reel 04",
    src: "https://res.cloudinary.com/dymkjy9fd/video/upload/voxel_-_showreel_-_01_lwxbpi.mp4",
  },
];

export default function VoxelPremiumHomepage() {
  const [showIntro, setShowIntro] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  useEffect(() => {
  const introSeen = sessionStorage.getItem("voxelIntroSeen");

  if (introSeen) {
    setShowIntro(false);
  }
}, []);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 22 });
  const rotateX = useTransform(smoothY, [0, 900], [7, -7]);
  const rotateY = useTransform(smoothX, [0, 1400], [-8, 8]);
  const [activeService, setActiveService] = useState("branding");
  const [showSystem, setShowSystem] = useState(false);
  const [heroPreview, setHeroPreview] = useState({ title: "Premium Creative & Growth Agency", text: "Kurumsal kimlik, web tasarımı, Meta reklam yönetimi ve video prodüksiyonu tek bir premium marka sistemi içinde birleştiriyoruz." });
  const [activeCard, setActiveCard] = useState(null);
  const [serviceView, setServiceView] = useState(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroCards = [
    { key: "brand", title: "Brand", subtitle: "Identity", iconName: "layers", detailTitle: "Brand Foundation", detailText: "Markanızın algısını güçlü, tutarlı ve premium bir sistemle inşa ederiz.", headline: "Markanızın algısını tasarlarız.", intro: "Logo, kurumsal kimlik, marka dili ve görsel sistemi tek bir premium kimlik altında birleştiririz.", bullets: ["Logo Tasarımı", "Kurumsal Kimlik", "Marka Dili", "Görsel Sistem"], process: ["Keşif", "Konumlandırma", "Kimlik Tasarımı", "Marka Sistemi"] },
    { key: "meta", title: "Meta", subtitle: "Performance", iconName: "megaphone", detailTitle: "Growth Engine", detailText: "Reklamlarınızı ölçülebilir ve kârlı büyüme sistemine dönüştürürüz.", headline: "Görünürlüğü talebe çeviririz.", intro: "Meta reklam yönetimi, kreatif testleri ve performans optimizasyonunu büyüme odaklı yönetiriz.", bullets: ["Meta Ads", "Kreatif Test", "Funnel Kurgusu", "Performans Takibi"], process: ["Strateji", "Kreatif Üretim", "Test", "Optimizasyon"] },
    { key: "web", title: "Web", subtitle: "Experience", iconName: "monitor", detailTitle: "Digital Experience", detailText: "Dönüşüm odaklı, premium web deneyimleri tasarlarız.", headline: "İlk izlenimi dijital deneyime dönüştürürüz.", intro: "Web sitenizi yalnızca güzel değil; hızlı, güven veren ve dönüşüm odaklı bir deneyim olarak kurgularız.", bullets: ["Web Tasarım", "UI/UX", "Landing Page", "Mobil Uyum"], process: ["Wireframe", "UI Tasarım", "Geliştirme", "Yayın"] },
    { key: "video", title: "Video", subtitle: "Production", iconName: "video", detailTitle: "Content Production", detailText: "Markanızı güçlü anlatan video içerikler üretiriz.", headline: "Markanızı sadece anlatmayız, izletiriz.", intro: "Reklam filmi, reels, kampanya videosu ve prodüksiyon süreçlerini markanızın hedef kitlesine göre tasarlarız.", bullets: ["Reklam Filmi", "Reels İçerik", "Kreatif Kurgu", "Prodüksiyon"], process: ["Konsept", "Çekim", "Kurgu", "Yayın Formatı"] },
  ];

  const services = useMemo(() => ({
    branding: { eyebrow: "BRAND FOUNDATION", title: "Markanızın algısını premium seviyede inşa ederiz.", text: "Logo, kurumsal kimlik, görsel dil ve marka karakterini tek bir güçlü sistem hâline getiririz.", items: ["Logo Tasarımı", "Kurumsal Kimlik", "Marka Dili", "Görsel Sistem"], icon: "pen" },
    reklam: { eyebrow: "GROWTH ENGINE", title: "Markanızı sadece görünür değil, tercih edilir hâle getiririz.", text: "Meta reklam yönetimi, kreatif üretim ve performans stratejisini tek merkezden yönetiriz.", items: ["Meta Ads", "Kreatif Strateji", "Funnel Kurgusu", "Performans Takibi"], icon: "megaphone" },
  }), []);

  const activeIcon = services[activeService].icon;
  const scrollToSection = (id) => {
    if (id === "top") return window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToContact = () => {
  setActiveCard(null);
  setServiceView(null);
  setShowreelOpen(false);
  setMobileMenuOpen(false);
  setTimeout(() => scrollToSection("contact"), 80);
};

const handleMobileNav = (id) => {
  setMobileMenuOpen(false);
  setTimeout(() => scrollToSection(id), 80);
};

  useEffect(() => {
    const onMove = (event) => { mouseX.set(event.clientX); mouseY.set(event.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);
  useEffect(() => {
    document.body.style.overflow = showreelOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [showreelOpen]);

   return (
  <>
    <a
  href="https://www.instagram.com/voxeldmr/"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed right-4 top-1/2 z-[90] hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-3 text-white/70 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-orange-500/40 hover:bg-orange-500 hover:text-black md:flex"
>
  <span className="text-lg font-black tracking-[-0.05em]">IG</span>
</a>

<a
  href="https://www.instagram.com/voxeldmr/"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-[90] flex rounded-full border border-white/10 bg-black/60 p-4 text-white/80 shadow-[0_0_30px_rgba(255,106,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-orange-500/40 hover:bg-orange-500 hover:text-black md:hidden"
>
 <span className="text-xl font-black tracking-[-0.05em]">IG</span>
</a>
    {showIntro && (
  <div
    className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black transition-all duration-[1400ms] ease-out ${
  introLeaving ? "opacity-0 scale-110 blur-md" : "opacity-100 scale-100 blur-0"
}`}
  >
   <video
  src="https://res.cloudinary.com/dymkjy9fd/video/upload/q_auto:low,f_auto,vc_auto/hf_20260504_211710_6056d405-13d7-4aef-9367-1e9a70c51403_iynrqa.mp4"
  autoPlay
  playsInline
  preload="auto"
  muted
  onEnded={() => {
    sessionStorage.setItem("voxelIntroSeen", "true");
    setIntroLeaving(true);
    setTimeout(() => setShowIntro(false), 1400);
  }}
  className="h-full w-full object-contain md:object-cover"
/>
  </div>
)}

    <main className="voxel-site min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-orange-500 selection:text-black">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap'); .voxel-site{font-family:'Plus Jakarta Sans',system-ui,sans-serif}.voxel-site h1,.voxel-site h2,.voxel-site h3,.voxel-site .font-black{font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-weight:800;letter-spacing:-.02em}`}</style>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-50 hidden h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-2xl md:block" style={{ x: smoothX, y: smoothY }} />

      {showreelOpen && <ShowreelModal close={() => setShowreelOpen(false)} />}

      <section className="relative min-h-screen px-4 py-6 md:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,0,0.22),transparent_34%),linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px]" />
        <motion.div className="pointer-events-none absolute inset-0 opacity-80" style={{ background: useTransform([smoothX, smoothY], ([x, y]) => `radial-gradient(420px circle at ${x}px ${y}px, rgba(255,106,0,0.18), rgba(255,106,0,0.055) 34%, transparent 68%)`) }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent,rgba(5,5,5,0.72)_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />

        <nav className="fixed left-1/2 top-4 z-50 mx-auto flex w-[calc(100%-24px)] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.35)] md:top-5 md:w-[calc(100%-40px)] md:px-5 md:py-4">
          <button onClick={() => scrollToSection("top")} className="group flex items-center gap-3"><VoxelLogo className="h-7 w-auto text-white transition group-hover:text-orange-400" /><p className="hidden text-[10px] uppercase tracking-[0.28em] text-white/40 sm:block">Digital Media Agency</p></button>
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex"><button onClick={() => scrollToSection("services")} className="transition hover:text-white">Hizmetler</button><button onClick={() => scrollToSection("work")} className="transition hover:text-white">Projeler</button><button onClick={() => scrollToSection("process")} className="transition hover:text-white">Süreç</button><button onClick={() => scrollToSection("contact")} className="transition hover:text-white">İletişim</button></div>
          <div className="flex items-center gap-2">
  <button onClick={goToContact} className="group flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-orange-500 sm:px-4 sm:text-sm">
    Projeni Konuşalım
    <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
  </button>

  <button
    type="button"
    onClick={() => setMobileMenuOpen((value) => !value)}
    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
    aria-label="Menüyü aç"
  >
    ☰
  </button>
</div>

{mobileMenuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -8, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-[1.5rem] border border-white/10 bg-black/90 p-3 shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:hidden"
  >
    {[
      ["services", "Hizmetler"],
      ["work", "Projeler"],
      ["process", "Süreç"],
      ["contact", "İletişim"],
    ].map(([id, label]) => (
      <button
        key={id}
        onClick={() => handleMobileNav(id)}
        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/70 transition hover:bg-orange-500/10 hover:text-white"
      >
        {label}
        <Icon name="arrow" className="h-4 w-4 text-orange-400" />
      </button>
    ))}
  </motion.div>
)}
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
          <div>
            <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-orange-300"><Icon name="spark" className="h-4 w-4" /> {heroPreview.title}</motion.div>
            <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} className="max-w-5xl text-[3rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-7xl md:leading-[0.98] md:tracking-[-0.055em] lg:text-8xl"><motion.span className="block bg-gradient-to-r from-white via-white to-white/45 bg-clip-text text-transparent" initial={{ opacity: 0, filter: "blur(14px)", y: 18 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}>Görünürlüğün ötesinde.</motion.span><span className="mt-3 block text-orange-500">Algıdan performansa.</span></motion.h1>
            <motion.p key={heroPreview.text} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="mt-6 max-w-2xl text-base leading-7 text-white/62 md:mt-8 md:text-xl md:leading-8">{heroPreview.text}</motion.p>
            <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} className="mt-10 flex flex-col gap-4 sm:flex-row"><motion.button type="button" onClick={goToContact} whileHover={{ scale: 1.045, x: 3, y: -2 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold text-black shadow-[0_0_70px_rgba(255,106,0,0.35)] transition hover:bg-white">Markanı Dönüştür<Icon name="arrow" className="h-5 w-5 transition group-hover:translate-x-1" /></motion.button><motion.button type="button" onClick={() => setShowreelOpen(true)} whileHover={{scale:1.035,x:2,y:-2}} whileTap={{scale:.98}} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-white/35 hover:bg-white/10"><Icon name="play" className="h-5 w-5 fill-white" /> Showreel İzle</motion.button></motion.div>
          </div>

          <div>
            <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative mx-auto h-auto min-h-[390px] w-full max-w-[560px] rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl backdrop-blur-xl sm:min-h-[430px] md:h-[460px] md:p-4"><div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-orange-500/25 blur-3xl" /><div className="relative h-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#090909] p-4 sm:p-6"><div className="mb-6 flex items-center justify-between sm:mb-12"><div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-orange-500" /><span className="h-3 w-3 rounded-full bg-white/25" /><span className="h-3 w-3 rounded-full bg-white/25" /></div><Icon name="cursor" className="h-5 w-5 text-orange-400" /></div><div className="grid grid-cols-2 gap-3">{heroCards.map((card,index)=>(<motion.button type="button" key={card.title} initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} whileHover={{y:-6,scale:1.025}} whileTap={{scale:.985}} transition={{delay:.35+index*.08,type:"spring",stiffness:260,damping:22}} onClick={()=>setActiveCard(card)} onMouseEnter={()=>setHeroPreview({title:card.detailTitle,text:card.detailText})} onMouseLeave={()=>setHeroPreview({title:"Premium Creative & Growth Agency",text:"Kurumsal kimlik, web tasarımı, Meta reklam yönetimi ve video prodüksiyonu tek bir premium marka sistemi içinde birleştiriyoruz."})} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-left transition hover:border-orange-500/55 hover:bg-orange-500/10 focus:outline-none focus:ring-2 focus:ring-orange-500/40"><div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,0,0.28),transparent_56%)]" /><Icon name={card.iconName} className="relative mb-8 h-7 w-7 text-orange-400" /><p className="relative text-xl font-black tracking-[-0.04em] sm:text-2xl">{card.title}</p><p className="relative text-sm text-white/45">{card.subtitle}</p></motion.button>))}</div></div></motion.div>
            <div className="relative mx-auto mt-6 w-full max-w-[720px] rounded-3xl border border-orange-500/20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,106,0,0.25),transparent_40%),#0b0b0b] p-5 shadow-[0_0_80px_rgba(255,106,0,0.15)] md:mt-10 md:p-6"><p className="text-xs uppercase tracking-[0.32em] text-orange-300">Voxel System</p><p className="mt-3 text-xl font-black leading-tight tracking-[-0.04em] md:text-3xl">Algı + Performans = Büyüme</p></div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.025] py-8"><div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#050505] to-transparent" /><div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#050505] to-transparent" /><motion.div className="flex w-max gap-16 whitespace-nowrap text-sm uppercase tracking-[0.42em] text-white/38" animate={{ x: [0, -920] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>{[...Array(2)].map((_,i)=><div key={i} className="flex items-center gap-16 px-8"><span>Branding</span><span className="text-orange-500/70">•</span><span>Web Tasarım</span><span className="text-orange-500/70">•</span><span>Meta Ads</span><span className="text-orange-500/70">•</span><span>Video Prodüksiyon</span><span className="text-orange-500/70">•</span><span>Creative Strategy</span><span className="text-orange-500/70">•</span></div>)}</motion.div></section>

      <section id="services" className="px-4 py-20 md:px-10 md:py-28 lg:px-14"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Ne Yapıyoruz?</p><h2 className="text-3xl font-black leading-tight tracking-[-0.04em] md:text-6xl">Tek tek hizmet vermiyoruz. Markanız için sistem kuruyoruz.</h2></div><div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.035] p-4"><div>{Object.keys(services).map(key=><button key={key} onClick={()=>{setActiveService(key);setShowSystem(false)}} className={`mb-3 flex w-full items-center justify-between rounded-[1.45rem] px-6 py-5 text-left transition ${activeService===key?"bg-orange-500 text-black":"bg-white/[0.035] text-white hover:bg-white/10"}`}><span className="text-xl font-black tracking-[-0.04em]">{key==="branding"?"Branding":"Reklam"}</span><Icon name="arrow" className="h-5 w-5" /></button>)}</div><div className="mt-8 flex h-full flex-col justify-between rounded-[1.45rem] border border-orange-500/15 bg-[radial-gradient(circle_at_30%_0%,rgba(255,106,0,0.18),transparent_55%),rgba(255,255,255,0.035)] p-6"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300">Voxel System</p><p className="mt-3 text-sm leading-6 text-white/52">{activeService==="branding"?"Önce markanın algısını ve görsel sistemini kurarız.":"Sonra görünürlüğü talebe ve ölçülebilir büyümeye çeviririz."}</p><div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div key={activeService} initial={{width:activeService==="branding"?"42%":"68%"}} animate={{width:activeService==="branding"?"42%":"86%"}} className="h-full rounded-full bg-orange-500 shadow-[0_0_24px_rgba(255,106,0,0.65)]" /></div><div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/35"><span>Algı</span><span>Performans</span></div></div><motion.button type="button" onClick={()=>setShowSystem(true)} whileHover={{scale:1.03}} whileTap={{scale:.97}} className="mt-6 w-full rounded-full bg-orange-500 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(255,106,0,0.5)] transition hover:bg-white">Sistemi Keşfet →</motion.button></div></div><motion.div key={showSystem?"system":activeService} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8 md:p-10">{showSystem?<SystemPanel goToContact={goToContact}/>:<><div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-black"><Icon name={activeIcon} className="h-8 w-8" /></div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">{services[activeService].eyebrow}</p><h3 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">{services[activeService].title}</h3><p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">{services[activeService].text}</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{services[activeService].items.map(item=><div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-white/75">{item}</div>)}</div></>}</motion.div></div></div></section>

      <WorkSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      {activeCard && <ActiveCardModal card={activeCard} close={()=>setActiveCard(null)} openService={()=>setServiceView(activeCard)} />}
      {serviceView && <ServiceView serviceView={serviceView} close={()=>setServiceView(null)} goToContact={goToContact} />}
    </main>
      </>
  );
}

function SystemPanel({ goToContact }) { return <div><div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-black"><Icon name="spark" className="h-8 w-8" /></div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Voxel System</p><h3 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">Algıdan performansa sistem kurarız.</h3><p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">Markayı sadece tasarlamayız. Algıyı kurar, deneyimi oluşturur, talebi üretir ve büyümeyi optimize ederiz.</p><div className="mt-10 grid gap-4 sm:grid-cols-2">{[{title:"Algı",desc:"Marka kimliği & positioning"},{title:"Deneyim",desc:"Web & içerik deneyimi"},{title:"Talep",desc:"Reklam & kampanya"},{title:"Büyüme",desc:"Performans & optimizasyon"}].map(item=><div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-orange-500/35 hover:bg-orange-500/10"><h4 className="text-xl font-black tracking-[-0.03em] text-white">{item.title}</h4><p className="mt-2 text-sm leading-6 text-white/48">{item.desc}</p></div>)}</div><button onClick={goToContact} className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-black text-black transition hover:bg-white">Bu sistemi markam için kuralım <Icon name="arrow" className="h-5 w-5" /></button></div> }

function WorkSection(){return <section id="work" className="px-4 py-20 md:px-10 md:py-28 lg:px-14"><div className="mx-auto max-w-7xl"><div className="mb-16 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Vizyonumuzdaki Projeler</p><h2 className="text-3xl font-black leading-tight tracking-[-0.04em] md:text-6xl">Markaları sadece görünür değil, tercih edilir hâle getiriyoruz.</h2></div><div className="grid gap-8">{cases.map((item,index)=><motion.article key={item.brand} initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.65,delay:index*.08}} className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-5 md:p-8"><div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_65%_40%,rgba(255,106,0,0.22),transparent_55%)]" /><div className="relative grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]"><div className="p-2 md:p-6"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">{item.category}</p><h3 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">{item.brand}</h3><p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">{item.description}</p><div className="mt-8 flex flex-wrap gap-3">{item.tags.map(tag=><span key={tag} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55">{tag}</span>)}</div></div><VideoFrame src={item.src}/></div></motion.article>)}</div></div></section>}
function VideoFrame({src}){return <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-black p-3 shadow-[0_0_80px_rgba(255,106,0,0.12)]"><div className="relative aspect-[9/16] overflow-hidden rounded-[1.45rem] bg-[#070707]"><video className="relative z-10 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100" src={src} autoPlay muted loop playsInline preload="metadata"/><div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-black/20" /><div className="pointer-events-none absolute left-5 top-5 z-30 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl"><span className="h-2 w-2 animate-pulse rounded-full bg-orange-500 shadow-[0_0_16px_rgba(255,106,0,0.8)]"/><span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Playing</span></div><div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 p-5"><p className="text-xs uppercase tracking-[0.26em] text-white/45">Voxel Case</p></div></div></div>}
function ProcessSection(){return <section id="process" className="px-4 pb-20 md:px-10 md:pb-28 lg:px-14"><div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 md:p-12"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Voxel Süreci</p><h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-6xl">Fikirden büyümeye tek akış.</h2></div><p className="max-w-md text-white/55">Önce markanın duruşunu netleştirir, sonra görünürlüğünü ve satış potansiyelini büyütürüz.</p></div><div className="grid gap-5 md:grid-cols-3">{["Strateji","Tasarım","Büyüme"].map((step,index)=><div key={step} className="rounded-[1.7rem] border border-white/10 bg-black/30 p-7"><p className="mb-10 text-5xl font-black text-orange-500/80">0{index+1}</p><h3 className="mb-4 text-2xl font-black tracking-[-0.04em]">{step}</h3><p className="leading-7 text-white/52">{index===0&&"Markanın hedefini, kitlesini ve pazardaki premium konumunu netleştiririz."}{index===1&&"Kimlik, web deneyimi ve kreatif üretimi bütünlüklü bir görsel dile çeviririz."}{index===2&&"Meta reklamları ve performans kreatifleriyle markanın talebini büyütürüz."}</p></div>)}</div></div></section>}
function ContactSection(){const mails=[{label:"info@voxeldmr.com",subject:"Voxel ile genel iletişim"},{label:"hello@voxeldmr.com",subject:"Voxel ile tanışma"},{label:"iletişim@voxeldmr.com",subject:"Voxel iletişim talebi"},{label:"teklif@voxeldmr.com",subject:"Proje teklifi"}];return <section id="contact" className="px-4 pb-10 pt-8 md:px-10 md:pb-12 md:pt-10 lg:px-14"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-orange-500/20 bg-[radial-gradient(circle_at_72%_18%,rgba(255,106,0,0.30),transparent_34%),radial-gradient(circle_at_16%_80%,rgba(255,255,255,0.08),transparent_28%),#070707] p-8 shadow-[0_0_120px_rgba(255,106,0,0.10)] md:p-14"><div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"><div><p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">İletişim</p><h2 className="text-3xl font-black leading-tight tracking-[-0.04em] md:text-7xl">Markanı premium seviyeye taşımaya hazırsan konuşalım.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">Projeni, hedefini ve markanın ihtiyaçlarını bize yaz. En doğru kreatif ve dijital büyüme sistemini birlikte kuralım.</p></div><div className="rounded-[2rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl md:p-6"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/35">Mail adresleri</p><div className="grid gap-3">{mails.map(mail=><a key={mail.label} href={`mailto:${mail.label}?subject=${encodeURIComponent(mail.subject)}`} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-white/70 transition hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-white"><span>{mail.label}</span><Icon name="arrow" className="h-5 w-5 text-orange-400 transition group-hover:translate-x-1" /></a>)}</div><div className="mt-6 rounded-2xl border border-orange-500/15 bg-orange-500/10 p-5"><p className="text-xs uppercase tracking-[0.26em] text-orange-300">Voxel Response</p><p className="mt-3 text-sm leading-6 text-white/55">Proje talepleri için en doğru adres: teklif@voxeldmr.com</p></div></div></div></div></section>}
function ShowreelModal({close}){return <div className="fixed inset-0 z-[100] grid place-items-center bg-black/80 px-5 backdrop-blur-xl"><motion.div initial={{opacity:0,scale:.96,y:20}} animate={{opacity:1,scale:1,y:0}} className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#080808] p-4 shadow-[0_0_120px_rgba(255,106,0,0.18)] sm:p-6"><button onClick={close} className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-orange-500 hover:text-black">×</button><div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8"><div className="p-2 md:p-6"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Voxel Showreel</p><h2 className="text-3xl font-black leading-tight tracking-[-0.04em] md:text-6xl">Voxel'in bakış açısı.<span className="block text-orange-500">Hareket hâlinde.</span></h2><p className="mt-5 max-w-xl text-base leading-7 tracking-[-0.01em] text-white/58 md:mt-6 md:text-lg md:leading-8">Voxel’in bakış açısı.<br/><span className="text-white/85">Kreatif üretim, sadece estetik değil.</span><br/><span className="text-orange-400">Etki yaratma biçimi.</span></p></div><div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,106,0,0.16),transparent_52%),rgba(255,255,255,0.035)] p-3 overscroll-contain sm:p-4"><div className="mb-4 flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/45">Voxel Showreel</p><span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-orange-300">4 Video</span></div><div className="flex touch-pan-x cursor-grab gap-4 overflow-x-auto overscroll-x-contain pb-3 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{showreelVideos.map((video,index)=><motion.div key={video.title} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:index*.08}} whileHover={{scale:1.035,y:-4}} className="group/video relative aspect-[9/16] min-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_0_45px_rgba(255,106,0,0.08)] sm:min-w-[210px] md:min-w-[250px]"><video src={video.src} autoPlay muted loop playsInline preload="metadata" className="relative z-10 h-full w-full object-cover opacity-90 transition duration-700 group-hover/video:scale-[1.04] group-hover/video:opacity-100"/><div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-black/20"/><div className="pointer-events-none absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-xl"><span className="h-2 w-2 animate-pulse rounded-full bg-orange-500 shadow-[0_0_16px_rgba(255,106,0,0.85)]"/><span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Playing</span></div><div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 p-4"><p className="text-[10px] uppercase tracking-[0.22em] text-white/45">{video.title}</p></div></motion.div>)}</div></div></div></motion.div></div>}
function ActiveCardModal({card,close,openService}){return <div className="fixed inset-0 z-[120] grid place-items-center bg-black/80 px-5 backdrop-blur-xl"><motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#080808] p-10"><button onClick={close} className="absolute right-5 top-5 text-white/60 hover:text-white">✕</button><p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">{card.detailTitle}</p><h2 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">{card.title}</h2><p className="mt-6 text-lg leading-8 text-white/60">{card.detailText}</p><button onClick={openService} className="mt-10 rounded-full bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-white">Bu Hizmeti İncele →</button></motion.div></div>}
function ServiceView({serviceView,close,goToContact}){return <div className="fixed inset-0 z-[200] overflow-y-auto bg-[#050505] px-5 py-8 text-white"><div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(255,106,0,0.22),transparent_34%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px]"/><div className="relative mx-auto max-w-7xl"><button onClick={close} className="fixed right-6 top-6 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-xl transition hover:bg-orange-500 hover:text-black">✕</button><section className="min-h-screen py-24"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">{serviceView.detailTitle}</p><h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-8xl">{serviceView.headline}</h1><p className="mt-8 max-w-3xl text-xl leading-9 text-white/60">{serviceView.intro}</p><div className="mt-14 grid gap-4 md:grid-cols-4">{serviceView.bullets.map(item=><div key={item} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-white/75">{item}</div>)}</div></section><section className="pb-24"><div className="rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 md:p-12"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Nasıl Çalışıyoruz?</p><div className="grid gap-5 md:grid-cols-4">{serviceView.process.map((step,index)=><div key={step} className="rounded-[1.7rem] border border-white/10 bg-black/30 p-7"><p className="mb-10 text-4xl font-black text-orange-500/80">0{index+1}</p><h3 className="text-2xl font-black tracking-[-0.04em]">{step}</h3></div>)}</div></div></section><section className="pb-20"><div className="overflow-hidden rounded-[2.5rem] border border-orange-500/20 bg-[radial-gradient(circle_at_70%_20%,rgba(255,106,0,0.28),transparent_32%),#0b0b0b] p-8 md:p-14"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Başlayalım</p><h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">{serviceView.title} tarafında markanı bir üst seviyeye taşıyalım.</h2><button onClick={goToContact} className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-black text-black transition hover:bg-white">Projeni Konuşalım <Icon name="arrow" className="h-5 w-5" /></button></div></section></div></div>}
function Footer() {
  return (
    <footer className="px-4 pb-8 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white/70">© 2026 voxel. Tüm hakları saklıdır.</p>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-orange-400/70">
            Digital Media Agency
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="https://www.instagram.com/voxeldmr/" target="_blank" rel="noopener noreferrer" className="transition hover:text-orange-400">
            Instagram
          </a>
          <button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })} className="transition hover:text-orange-400">
            Projeler
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="transition hover:text-orange-400">
            İletişim
          </button>
        </div>
      </div>
    </footer>
  );
}
