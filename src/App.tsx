import { Mail, Linkedin, Globe, Target, Briefcase } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A192F]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-3xl font-bold tracking-tight">EB.</div>
          <nav className="hidden gap-8 text-sm text-white/80 md:flex">
            <a href="#hakkimda" className="hover:text-white">Hakkımda</a>
            <a href="#yetenekler" className="hover:text-white">Yetenekler</a>
            <a href="#iletisim" className="rounded-full border border-white/20 px-4 py-2 hover:border-white/40 hover:text-white">
              İletişime Geç
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm tracking-[0.2em] text-white/70">
          VİZYONER & STRATEJİST
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Efehan Büyükbayrak
        </h1>

        <p className="mt-6 text-2xl text-[#CCD6F6] md:text-3xl">
          Geleceğin Girişimcisi & Teknoloji Stratejisti
        </p>

        <p className="mt-10 max-w-3xl text-lg leading-8 text-white/75">
          Henüz bir öğrenci olmama rağmen, kendi şirketimi kurma vizyonuyla hareket ediyorum.
          Analitik zekayı tutkuyla birleştirerek, yarının teknoloji stratejilerini bugünden kurguluyorum.
        </p>

        <div className="mt-10">
          <a
            href="#hakkimda"
            className="inline-flex items-center rounded-xl border border-white/20 px-6 py-4 text-sm font-semibold tracking-wide transition hover:border-white/40 hover:bg-white/5"
          >
            Vizyonumu Keşfet
          </a>
        </div>
      </section>

      <section id="hakkimda" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Hakkımda</p>
            <h2 className="text-4xl font-bold">Büyük Resmi Gören Analitik Bir Zeka</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Sadece bir öğrenci değil, dünyayı geniş bir perspektifle anlamlandırmaya çalışan genç bir vizyonerim.
              Yeni şeyler öğrenmeye olan açlığım, beni sürekli konfor alanımdan çıkmaya zorluyor.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Girişimcilik yolculuğumda lokal düşünmektense global bir perspektif benimsiyorum.
              Teknolojinin teknik yönü kadar iş stratejisine ve insan hayatındaki yerine de odaklanıyorum.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl bg-[#172A45] p-6 shadow-lg">
              <div className="mb-3 flex items-center gap-3">
                <Globe className="h-5 w-5 text-[#64FFDA]" />
                <h3 className="text-xl font-semibold">Global Bakış Açısı</h3>
              </div>
              <p className="text-white/75">
                Geniş bilgi birikimi ve analitik gözlem yeteneği ile dünya pazarlarına entegre stratejiler.
              </p>
            </div>

            <div className="rounded-2xl bg-[#172A45] p-6 shadow-lg">
              <div className="mb-3 flex items-center gap-3">
                <Target className="h-5 w-5 text-[#64FFDA]" />
                <h3 className="text-xl font-semibold">Stratejik Planlama</h3>
              </div>
              <p className="text-white/75">
                Problemleri analitik bir çerçevede bölerken, uzun vadeli sürdürülebilir çözümler üretme yeteneği.
              </p>
            </div>

            <div className="rounded-2xl bg-[#172A45] p-6 shadow-lg">
              <div className="mb-3 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-[#64FFDA]" />
                <h3 className="text-xl font-semibold">Girişimci Ruh</h3>
              </div>
              <p className="text-white/75">
                Şimdiden kendi şirketini kurma vizyonuna sahip, risk analizi yapabilen kararlı yaklaşım.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="yetenekler" className="mx-auto max-w-6xl px-6 py-12">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Odak Alanları</p>
        <h2 className="text-4xl font-bold">Yetenekler & Tutkular</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">
          Teknik donanımımı, kişisel tutkularımla birleştirerek benzersiz bir vizyon yaratıyorum.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold">Analitik Düşünce</h3>
            <p className="mt-3 text-white/75">
              Verilere dayalı karar alma ve karmaşık sistemleri pratik iş modellerine dönüştürme pratiği.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold">Strateji Geliştirme</h3>
            <p className="mt-3 text-white/75">
              Sektör analizi ve rekabet avantajı sağlayacak uzun vadeli büyüme stratejileri oluşturma.
            </p>
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-[#172A45] p-8">
          <h2 className="text-4xl font-bold">İletişime Geç</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Parlak fikirler, doğru insanlarla bir araya geldiğinde gerçeğe dönüşür.
            Yeni fırsatlar ve tartışmalar için iletişime geçin.
          </p>

          <div className="mt-8 flex flex-col gap-4 text-white/85">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#64FFDA]" />
              <span>efehanbuyukbayrak@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-[#64FFDA]" />
              <span>LinkedIn</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-[#64FFDA]" />
              <span>İstanbul</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/50">
        © 2026 Efehan Büyükbayrak — Profesyonel Portfolyo V1.0
      </footer>
    </main>
  );
}