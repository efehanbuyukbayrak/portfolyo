import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Target, 
  BrainCircuit, 
  Trophy, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  BriefcaseBusiness,
  MapPin,
  ExternalLink
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'left' | 'right' }) => {
  const directions = {
    up: { y: 30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white font-sans selection:bg-charcoal selection:text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10 pb-5 pt-5">
        <div className="max-w-7xl mx-auto px-6 flex items-end justify-between">
          <span className="font-serif text-2xl font-bold text-white tracking-[1px]">EB.</span>
          <nav className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[2px] text-muted">
            <a href="#hakkimda" className="hover:text-white transition-colors">Hakkımda</a>
            <a href="#yetenekler" className="hover:text-white transition-colors">Yetenekler</a>
            <a href="#iletisim" className="border border-muted text-muted px-3 py-1 rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] transition-all duration-300">
              İletişime Geç
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="uppercase tracking-[2px] text-[12px] text-muted border border-muted px-3 py-1 rounded-[20px]">VİZYONER & STRATEJİST</span>
              </div>
              <h1 className="text-5xl md:text-[64px] font-sans font-bold leading-[1.1] mb-[15px] text-white">
                Efehan Büyükbayrak
              </h1>
              <h2 className="text-lg md:text-[18px] text-muted mb-[40px] font-sans leading-[1.5] max-w-[500px]">
                Geleceğin Girişimcisi & Teknoloji Stratejisti
              </h2>
              <p className="text-[15px] text-light-gray leading-[1.6] max-w-2xl mb-12 font-sans">
                Henüz bir öğrenci olmama rağmen, kendi şirketimi kurma vizyonuyla hareket ediyorum. 
                Analitik zekayı tutkuyla birleştirerek, yarının teknoloji stratejilerini bugünden kurguluyorum.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#hakkimda" className="group px-6 py-3 border border-muted text-white text-[13px] uppercase tracking-[1px] rounded-[4px] hover:bg-charcoal hover:-translate-y-[2px] transition-all duration-500 flex items-center gap-2">
                  Vizyonumu Keşfet <ChevronRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimda" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <div className="bg-charcoal p-[30px] rounded-[4px] border-l-[4px] border-l-white">
                <h3 className="text-[14px] uppercase tracking-[2px] text-muted mb-[12px]">Hakkımda</h3>
                <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
                  Büyük Resmi Gören <br />
                  Analitik Bir Zeka
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.6] text-light-gray font-sans">
                  <p>
                    Sadece bir öğrenci değil, dünyayı geniş bir perspektifle anlamlandırmaya çalışan genç bir vizyonerim. 
                    Yeni şeyler öğrenmeye olan açlığım, beni sürekli konfor alanımdan çıkmaya zorluyor.
                  </p>
                  <p>
                    Girişimcilik yolculuğumda lokal düşünmektense global bir perspektif benimsiyorum. 
                    Teknolojinin teknik yönü kadar iş stratejisine ve insan hayatındaki yerine de odaklanıyorum.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="flex flex-col gap-5">
                <ul className="grid grid-cols-1 gap-[15px]">
                  <li className="group flex items-center gap-4 bg-charcoal p-6 rounded-[4px] hover:-translate-y-[3px] hover:bg-[#1a3152] transition-all duration-500">
                    <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-500">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-white mb-1 tracking-wide">Global Bakış Açısı</h4>
                      <p className="text-light-gray text-[13px] leading-[1.6]">Geniş bilgi birikimi ve analitik gözlem yeteneği ile dünya pazarlarına entegre stratejiler.</p>
                    </div>
                  </li>
                  <li className="group flex items-center gap-4 bg-charcoal p-6 rounded-[4px] hover:-translate-y-[3px] hover:bg-[#1a3152] transition-all duration-500">
                    <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-500">
                      <Target size={20} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-white mb-1 tracking-wide">Stratejik Planlama</h4>
                      <p className="text-light-gray text-[13px] leading-[1.6]">Problemleri analitik bir çerçevede bölerken, uzun vadeli sürdürülebilir çözümler üretme yeteneği.</p>
                    </div>
                  </li>
                  <li className="group flex items-center gap-4 bg-charcoal p-6 rounded-[4px] hover:-translate-y-[3px] hover:bg-[#1a3152] transition-all duration-500">
                    <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-500">
                      <BriefcaseBusiness size={20} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-white mb-1 tracking-wide">Girişimci Ruh</h4>
                      <p className="text-light-gray text-[13px] leading-[1.6]">Şimdiden kendi şirketini kurma vizyonuna sahip, risk analizi yapabilen kararlı yaklaşım.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills & Interests  */}
      <section id="yetenekler" className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-[30px]">
            <FadeIn>
              <h3 className="text-[14px] uppercase tracking-[2px] text-muted mb-[12px]">Odak Alanları</h3>
              <h2 className="text-2xl font-bold text-white mb-[15px]">Yetenekler & Tutkular</h2>
              <p className="text-[15px] text-light-gray max-w-2xl">Teknik donanımımı, kişisel tutkularımla birleştirerek benzersiz bir vizyon yaratıyorum.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
            <FadeIn delay={0.1}>
              <div className="group bg-charcoal p-[30px] rounded-[4px] h-full flex flex-col justify-center hover:-translate-y-[4px] hover:bg-[#1a3152] transition-all duration-500">
                <div className="flex items-center gap-[8px] mb-[10px]">
                  <span className="text-white transition-transform duration-300 group-hover:translate-x-1">▹</span>
                  <h4 className="text-[14px] uppercase tracking-[1px] text-white">Analitik Düşünce</h4>
                </div>
                <p className="text-[13px] text-light-gray leading-[1.6] pl-[18px]">Verilere dayalı karar alma ve karmaşık sistemleri pratik iş modellerine dönüştürme pratiği.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group bg-charcoal p-[30px] rounded-[4px] h-full flex flex-col justify-center hover:-translate-y-[4px] hover:bg-[#1a3152] transition-all duration-500">
                <div className="flex items-center gap-[8px] mb-[10px]">
                  <span className="text-white transition-transform duration-300 group-hover:translate-x-1">▹</span>
                  <h4 className="text-[14px] uppercase tracking-[1px] text-white">Strateji Geliştirme</h4>
                </div>
                <p className="text-[13px] text-light-gray leading-[1.6] pl-[18px]">Sektör analizi ve rekabet avantajı sağlayacak uzun vadeli büyüme stratejileri oluşturma.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="iletisim" className="bg-navy text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-[40px] mb-[50px] border-b border-white/10 pb-[50px]">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">İletişime Geç</h2>
              <p className="text-light-gray text-[15px] max-w-sm mb-6 leading-relaxed">
                Parlak fikirler, doğru insanlarla bir araya geldiğinde gerçeğe dönüşür. Yeni fırsatlar ve tartışmalar için iletişime geçin.
              </p>
              <a href="mailto:efehanbuyukbayrak@gmail.com" className="inline-flex items-center gap-3 text-white border-b border-muted pb-1 text-[13px] uppercase tracking-widest hover:text-white/70 hover:-translate-y-[2px] transition-all duration-300">
                <Mail size={16} /> efehanbuyukbayrak@gmail.com
              </a>
            </div>
            <div className="md:text-right flex flex-col md:items-end justify-center">
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/efehan-büyükbayrak" target="_blank" rel="noopener noreferrer" className="p-3 border border-muted text-muted rounded hover:text-white hover:border-white hover:-translate-y-[2px] transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <span className="text-muted text-[14px] uppercase tracking-[1px]">İstanbul</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[11px] text-muted uppercase tracking-[1px]">
            <div>&copy; {new Date().getFullYear()} Efehan Büyükbayrak</div>
            <div>Profesyonel Portfolyo V1.0</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
