import { Mail, Linkedin, Globe, Target, Briefcase, Brain, Rocket } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A192F]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-tight">EB.</div>

          <nav className="hidden gap-8 text-sm text-white/80 md:flex">
            <a href="#hakkimda" className="hover:text-white transition">
              Hakkımda
            </a>
            <a href="#vizyon" className="hover:text-white transition">
              Vizyon
            </a>
            <a href="#iletisim" className="hover:text-white transition">
              İletişim
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm tracking-[0.2em] text-white/70">
          12. SINIF ÖĞRENCİSİ • AI • SPOR • GİRİŞİMCİLİK
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Efehan Büyükbayrak
        </h1>

        <p className="mt-6 max-w-3xl text-2xl text-[#CCD6F6] md:text-3xl">
          Spor, yapay zeka ve dijital üretim alanlarında kendini geliştiren genç bir girişimci adayı.
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
          Hedefim, spor ve teknolojiyi bir araya getiren güçlü projeler geliştirmek;
          yalnızca bir öğrenci olarak değil, gelecekte kendi vizyonunu gerçeğe dönüştüren biri olarak öne çıkmak.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#vizyon"
            className="rounded-xl bg-[#64FFDA] px-6 py-4 font-semibold text-black transition hover:opacity-90"
          >
            Vizyonumu Gör
          </a>

          <a
            href="#iletisim"
            className="rounded-xl border border-white/20 px-6 py-4 font-semibold transition hover:bg-white/5"
          >
            İletişime Geç
          </a>
        </div>
      </section>

      <section id="hakkimda" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Hakkımda</p>
        <h2 className="text-4xl font-bold">Büyük Resmi Görmeyi Seven Bir Yaklaşım</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg leading-8 text-white/75">
              Kendimi yalnızca okul hayatı içinde sınırlamıyorum. Yapay zeka, spor, dijital içerik,
              marka oluşturma ve girişimcilik gibi alanlarda düşünmeyi seviyorum.
            </p>

            <p className="mt-4 text-lg leading-8 text-white/75">
              Özellikle gelecekte spor ve teknoloji kesişiminde değer üreten projeler geliştirmek istiyorum.
              Bu yüzden hem teknik tarafı hem de stratejik tarafı öğrenmeye odaklanıyorum.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl bg-[#172A45] p-6">
              <div className="mb-3 flex items-center gap-3">
                <Brain className="h-5 w-5 text-[#64FFDA]" />
                <h3 className="text-xl font-semibold">Analitik Düşünce</h3>
              </div>
              <p className="text-white/75">
                Problemleri küçük parçalara ayırıp çözüm üretmeye çalışırım.
              </p>
            </div>

            <div className="rounded-2xl bg-[#172A45] p-6">
              <div className="mb-3 flex items-center gap-3">
                <Target className="h-5 w-5 text-[#64FFDA]" />
                <h3 className="text-xl font-semibold">Hedef Odaklılık</h3>
              </div>
              <p className="text-white/75">
                Yalnızca öğrenmek değil, öğrendiklerimi gerçek bir hedefe dönüştürmek isterim.
              </p>
            </div>

            <div className="rounded-2xl bg-[#172A45] p-6">
              <div className="mb-3 flex items-center gap-3">
                <Rocket className="h-5 w-5 text-[#64FFDA]" />
                <h3 className="text-xl font-semibold">Girişimci Zihniyet</h3>
              </div>
              <p className="text-white/75">
                Uzun vadede kendi işini ve kendi sistemini kurabilecek bir yapı geliştirmeyi hedefliyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vizyon" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Proje Vizyonu</p>
        <h2 className="text-4xl font-bold">Geliştirmek İstediğim Konsept</h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#172A45] p-8">
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-[#64FFDA]" />
            <h3 className="text-2xl font-semibold">AI Futbol Performans Analiz Sistemi</h3>
          </div>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Hedefim, futbolcu performansını yapay zeka desteğiyle daha detaylı inceleyebilen bir sistem geliştirmek.
            Bu sistemin; fiziksel performans, pas tercihleri, pozisyon alma, oyun içi kararlar ve teknik aksiyonlar gibi
            başlıklarda antrenörlere destek sunmasını amaçlıyorum.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold">Amaç</h4>
              <p className="mt-3 text-white/75">
                Oyuncunun güçlü ve gelişmesi gereken yönlerini daha net ortaya koymak.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold">Hedef Kitle</h4>
              <p className="mt-3 text-white/75">
                Antrenörler, altyapı ekipleri ve performans değerlendirme süreçleriyle ilgilenen kulüpler.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold">Beklenen Çıktılar</h4>
              <p className="mt-3 text-white/75">
                Fiziksel efor analizi, oyun içi karar kalitesi, teknik aksiyon değerlendirmesi ve gelişim önerileri.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold">Durum</h4>
              <p className="mt-3 text-white/75">
                Bu proje şu anda konsept ve geliştirme vizyonu aşamasındadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/50">Odak Alanlarım</p>
        <h2 className="text-4xl font-bold">Geliştirdiğim Alanlar</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Yapay Zeka</h3>
            <p className="mt-3 text-white/75">
              AI araçlarını öğrenmek, üretim süreçlerinde kullanmak ve gerçek alanlara uyarlamak.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Spor Teknolojileri</h3>
            <p className="mt-3 text-white/75">
              Spor performansını teknolojiyle analiz etme fikrine özel ilgi duyuyorum.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Dijital Üretim</h3>
            <p className="mt-3 text-white/75">
              Portfolyo, marka dili, içerik ve dijital görünürlük tarafını önemserim.
            </p>
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-[#172A45] p-8">
          <h2 className="text-4xl font-bold">İletişim</h2>

          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Yeni fikirler, iş birlikleri ve gelişim odaklı fırsatlar için benimle iletişime geçebilirsiniz.
          </p>

          <div className="mt-8 flex flex-col gap-5 text-white/85">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#64FFDA]" />
              <span>efehanbuyukbayrak@gmail.com</span>
            </div>

            <a
              href="www.linkedin.com/in/efehan-büyükbayrak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-[#64FFDA]"
            >
              <Linkedin className="h-5 w-5 text-[#64FFDA]" />
              <span>LinkedIn</span>
            </a>

            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-[#64FFDA]" />
              <span>İstanbul</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/50">
        © 2026 Efehan Büyükbayrak
      </footer>
    </main>
  );
}