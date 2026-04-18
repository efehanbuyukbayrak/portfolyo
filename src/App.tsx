import { Mail, Linkedin, Globe } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A192F]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold">Efehan</div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-5xl font-bold">Efehan Büyükbayrak</h1>
        <p className="mt-4 text-xl text-[#CCD6F6]">
          AI & Spor Teknolojileri
        </p>

        <p className="mt-6 max-w-2xl text-white/75">
          Yapay zeka ile spor performansı analiz eden projeler geliştirmeyi hedefliyorum.
        </p>
      </section>

      {/* YETENEKLER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Yetenekler</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-[#172A45] p-6">
            Analitik Düşünce
          </div>
          <div className="rounded-xl bg-[#172A45] p-6">
            Strateji Geliştirme
          </div>
        </div>
      </section>

      {/* 🔥 AI ANALİZ DEMO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">AI Futbol Analizi</h2>

        <textarea
          id="inputText"
          placeholder="Oyuncu hakkında yaz..."
          className="mt-6 w-full rounded-xl bg-[#172A45] p-4 text-white"
        />

        <button
          onClick={() => {
            const text = (document.getElementById("inputText") as HTMLTextAreaElement).value.toLowerCase();
            let result = "";
            let puan = 5;

            if (text.includes("koş")) {
              result += "⚡ Fiziksel performans iyi\n";
              puan++;
            }

            if (text.includes("pas")) {
              result += "🎯 Pas kalitesi zayıf\n";
              puan--;
            }

            if (text.includes("şut")) {
              result += "🥅 Şut denemeleri mevcut\n";
              puan++;
            }

            if (text.includes("savunma")) {
              result += "🛡️ Savunma katkısı iyi\n";
              puan++;
            }

            if (!result) {
              result = "Genel performans dengeli.";
            }

            puan = Math.max(1, Math.min(10, puan));

            (document.getElementById("output") as HTMLDivElement).innerText =
              result + "\n\nPerformans: " + puan + "/10";
          }}
          className="mt-4 rounded-xl bg-[#64FFDA] px-6 py-3 text-black font-bold"
        >
          Analiz Et
        </button>

        <div
          id="output"
          className="mt-4 rounded-xl bg-[#172A45] p-4"
        >
          Sonuç burada çıkacak...
        </div>
      </section>

      {/* İLETİŞİM */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">İletişim</h2>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Mail size={18} />
            efehanbuyukbayrak@gmail.com
          </div>

         
          <a
            href="www.linkedin.com/in/efehan-büyükbayrak"
            target="_blank"
            className="flex items-center gap-2 hover:text-[#64FFDA]"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <div className="flex items-center gap-2">
            <Globe size={18} />
            İstanbul
          </div>
        </div>
      </section>

    </main>
  );
}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/50">
        © 2026 Efehan Büyükbayrak — Profesyonel Portfolyo V1.0
      </footer>
    </main>
  );
}