import React from "react";
import LogoFlat from "./assets/logo-flat-red.png";
import HeroLogo from "./assets/logo-wing-shiny.png";
import Wordmark from "./assets/wordmark-est2019.png";
import { IconButton, YouTubeIcon, XIcon, TikTokIcon, InstagramIcon, TwitchIcon, SnapchatIcon } from "./icons.jsx";

export default function App(){
  return (
    <div dir="rtl" className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Creators />
      <Contact />
      <Footer />
    </div>
  );
}

function Header(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={LogoFlat} className="w-9 h-9 rounded" alt="TU"/>
          <span className="font-bold">The Ultimates</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-red-400">عن النادي</a>
          <a href="#creators" className="hover:text-red-400">صُنّاع المحتوى</a>
          <a href="#contact" className="hover:text-red-400">تواصل</a>
          <a href="https://store-tu.com/" target="_blank" rel="noopener" className="px-4 py-2 rounded-2xl bg-red-600 hover:bg-red-500">المتجر</a>
        </nav>
      </div>
    </header>
  );
}

function Hero(){
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1200px_600px_at_80%_-10%,#ef4444,transparent),radial-gradient(800px_400px_at_10%_120%,#000000,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-black leading-tight"> The Ultimates<span className="block text-red-400"></span></h1>
          <p className="mt-5 text-white/80">منظمه سعودية لإطلاق المواهب وصناعة الشراكات وصناعة لحظات لا تُنسى.</p>
          <div className="mt-6 flex flex-wrap gap-3">
          </div>
        </div>
        <div className="">
          <img src={HeroLogo} alt="The Ultimates" className="max-h-72 object-contain"/>
        </div>
      </div>
    </section>
  );
}

function About(){
  return (
    <section id="about" className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black">عن النادي</h2>
        <p className="mt-4 text-white/80 max-w-3xl"> نادٍ سعودي في مجال الرياضات الإلكترونية وصناعة المحتوى الرقمي، يضم نخبة من صنّاع المحتوى والمحترفين في الألعاب الإلكترونية، ويهدف إلى بناء كيان متكامل يجمع بين التنافس، الإبداع، والاحتراف، ويعمل على تطوير مشهد الترفيه الرقمي في المملكة العربية السعودية والمنطقة. يقدم The Ultimates محتوى متنوعًا عبر المنصات الرقمية، ويشارك في بطولات محلية ودولية، إلى جانب عقد شراكات استراتيجية مع الشركات والعلامات التجارية لتعزيز حضور النادي وتأثيره في صناعة الـ Esports & Entertainment</p>
        <img src={Wordmark} alt="EST. 2019" className="h-16 mt-6 opacity-90"/>
      </div>
    </section>
  );
}

const CREATORS = [
  { key: "Topz", name: "Topz", role: "FPS / Streamer", x: "https://twitter.com/tu_topz", yt: "https://www.youtube.com/@TOPZ", ig: "https://www.instagram.com/ad.1", sc: "https://snapchat.com/add/snap.topz", tiktok: "https://www.tiktok.com/@amtopz", twitch: "https://twitch.tv/amtopz" },
  { key: "ModyAsmr", name: "ModyAsmr", role: "Content Creator", x: "https://twitter.com/bin_khaled3", yt: "https://www.youtube.com/@ModyAsmr", ig: "https://www.instagram.com/bin.khaled0", sc: "https://snapchat.com/add/bin.khaled1", tiktok: "https://www.tiktok.com/@binkhaled0", twitch: "https://twitch.tv/mody_alsmr" },
  { key: "HanodyAwsome", name: "HanodyAwsome", role: "Variety Creator", x: "https://twitter.com/Hanody", yt: "https://www.youtube.com/@HANODY", ig: "https://www.instagram.com/Hanody_awsome", sc: "https://snapchat.com/add/Hanody", tiktok: "https://www.tiktok.com/@hanody" },
  { key: "Swelyy", name: "Swelyy", role: "Variety / Streamer", x: "https://twitter.com/nowe9r", yt: "https://www.youtube.com/@Swelyy", ig: "https://www.instagram.com/i.n9", sc: "https://snapchat.com/add/i.n9", tiktok: "https://www.tiktok.com/@nowe9r", twitch: "https://twitch.tv/swelyy" },
  { key: "Skelyy", name: "Skelyy", role: "Variety / Streamer", x: "https://twitter.com/ImSkelyy", yt: "https://www.youtube.com/@skelyy", ig: "https://www.instagram.com/imskelyy", sc: "https://snapchat.com/add/Skelyy1", tiktok: "https://www.tiktok.com/@skelyy01", twitch: "https://twitch.tv/skelyy" },
  { key: "JustTurki", name: "Just Turki", role: "IRL / Shooter", x: "https://twitter.com/Justturk16", yt: "https://www.youtube.com/@justturki", ig: "https://www.instagram.com/i_toash", sc: "https://snapchat.com/add/i_toash", tiktok: "https://www.tiktok.com/@justturk1", twitch: "https://twitch.tv/abotrekk" },
  { key: "Sopfix", name: "Sopfix", role: "Content Creator", x: "https://twitter.com/iSopFix", yt: "https://www.youtube.com/@SopFix", ig: "https://www.instagram.com/sopfix", sc: "https://snapchat.com/add/Sopfix", tiktok: "https://www.tiktok.com/@Sopfix", twitch: "https://twitch.tv/sopfix" },
  { key: "MOUADH_AG", name: "MOUADH AG", role: "Shooter / Variety", x: "https://twitter.com/MouathAG", yt: "https://www.youtube.com/@Mouathag", ig: "https://www.instagram.com/mouath_ag", sc: "https://snapchat.com/add/mm.ag", tiktok: "https://www.tiktok.com/@Mouathag" },
  { key: "Fawaz", name: "Fawaz (Fwaz)", role: "Variety / Streamer", x: "https://twitter.com/fwaz", yt: "https://www.youtube.com/@Fawaz", ig: "https://www.instagram.com/fawaz", sc: "https://snapchat.com/add/Fwaz", tiktok: "https://www.tiktok.com/@fwaz", twitch: "https://twitch.tv/fwaz" },
  { key: "Lion", name: "Lion (z7lion)", role: "Variety / Streamer", x: "https://twitter.com/z7lion", yt: "https://www.youtube.com/@z7lion", ig: "https://www.instagram.com/z7lion", sc: "https://snapchat.com/add/z7lion", tiktok: "https://www.tiktok.com/@z7lion" },
];

function Creators(){
  return (
    <section id="creators" className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black">صُنّاع المحتوى</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREATORS.map((c) => (
            <div key={c.key} className="rounded-3xl border border-white/10 overflow-hidden bg-white/5">
              <div className="relative aspect-[16/10] bg-zinc-900 flex items-center justify-center">
                <img src={`/creators/${c.key}.jpg`} alt={c.name} className="w-full h-full object-cover" onError={(e)=>{if(!e.target.src.endsWith('.png')){e.target.src=`/creators/${c.key}.png`;}else{e.currentTarget.style.opacity=0.3;}}} />
              </div>
              <div className="p-5">
                <div className="font-bold text-lg">{c.name}</div>
                <div className="text-white/70 text-sm">{c.role}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.yt && <IconButton href={c.yt} label="YouTube"><YouTubeIcon/></IconButton>}
                  {c.x && <IconButton href={c.x} label="X"><XIcon/></IconButton>}
                  {c.tiktok && <IconButton href={c.tiktok} label="TikTok"><TikTokIcon/></IconButton>}
                  {c.ig && <IconButton href={c.ig} label="Instagram"><InstagramIcon/></IconButton>}
                  {c.sc && <IconButton href={c.sc} label="Snapchat"><SnapchatIcon/></IconButton>}
                  {c.twitch && <IconButton href={c.twitch} label="Twitch"><TwitchIcon/></IconButton>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact(){
  return (
    <section id="contact" className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-black">تواصل معنا</h2>
          <p className="mt-4 text-white/80">للتعاونات والرعايات أو الانضمام لفريق صُنّاع المحتوى.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <IconButton href="https://www.youtube.com/@TheUltimatesgg" label="YouTube"><YouTubeIcon/></IconButton>
            <IconButton href="https://twitter.com/TheUltimatesgg" label="X"><XIcon/></IconButton>
            <IconButton href="https://www.instagram.com/TheUltimatesgg" label="Instagram"><InstagramIcon/></IconButton>
            <IconButton href="https://www.tiktok.com/@theultimatesgg" label="TikTok"><TikTokIcon/></IconButton>
            <IconButton href="https://twitch.tv/TheUltimatesgg" label="Twitch"><TwitchIcon/></IconButton>
          </div>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>البريد: <a className="hover:text-red-400" href="mailto:contact@theultimates.gg">contact@theultimates.gg</a></li>
            <li>المتجر: <a className="hover:text-red-400" href="https://store-tu.com/" target="_blank" rel="noopener">store-tu.com</a></li>
          </ul>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="الاسم" placeholder="اسمك الثلاثي" />
            <Field label="البريد" type="email" placeholder="you@email.com" />
            <Field label="الشركة" placeholder="اسم الشركة/الجهة" />
            <Field label="رقم التواصل" placeholder="05xxxxxxxx" />
          </div>
          <div className="mt-4">
            <Field label="الرسالة" textarea placeholder="اكتب لنا تفاصيل التعاون المطلوب..." />
          </div>
          <button className="w-full mt-5 py-3 rounded-2xl bg-red-600 hover:bg-red-500 font-semibold">إرسال</button>
          <p className="text-xs text-white/50 mt-3">* هذا النموذج تجريبي — سنربطه ببريدك لاحقاً.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, textarea, ...props }){
  return (
    <label className="block text-sm">
      <div className="mb-2 text-white/70">{label}</div>
      {textarea ? (
        <textarea className="w-full h-32 rounded-xl bg-black/60 border border-white/10 px-3 py-2 outline-none focus:border-red-500" {...props} />
      ) : (
        <input className="w-full rounded-xl bg-black/60 border border-white/10 px-3 py-2 outline-none focus:border-red-500" {...props} />
      )}
    </label>
  );
}

function Footer(){
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <img src={LogoFlat} alt="TU" className="w-7 h-7 rounded" />
            <span className="font-bold">The Ultimates</span>
          </div>
          <p className="mt-3 text-white/70">© {new Date().getFullYear()} The Ultimates. جميع الحقوق محفوظة.</p>
        </div>
        <div>
          <div className="font-semibold">روابط النادي</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <IconButton href="https://www.youtube.com/@TheUltimatesgg" label="YouTube"><YouTubeIcon/></IconButton>
            <IconButton href="https://twitter.com/TheUltimatesgg" label="X"><XIcon/></IconButton>
            <IconButton href="https://www.instagram.com/TheUltimatesgg" label="Instagram"><InstagramIcon/></IconButton>
            <IconButton href="https://www.tiktok.com/@theultimatesgg" label="TikTok"><TikTokIcon/></IconButton>
            <IconButton href="https://twitch.tv/TheUltimatesgg" label="Twitch"><TwitchIcon/></IconButton>
          </div>
        </div>
        <div>
          <div className="font-semibold">روابط سريعة</div>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="#about" className="hover:text-red-400">عن النادي</a></li>
            <li><a href="#creators" className="hover:text-red-400">صنّاع المحتوى</a></li>
            <li><a href="#contact" className="hover:text-red-400">تواصل معنا</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
