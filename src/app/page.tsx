import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] selection:bg-blue-600/30">
      {/* Nav */}
      <nav className="flex items-center justify-between px-4 py-4 md:px-6 md:py-6 max-w-5xl mx-auto">
        <div className="text-sm font-mono uppercase tracking-widest text-white/50">
          BCZ
        </div>
        <div className="flex gap-3 md:gap-6 text-xs font-mono uppercase tracking-wider text-white/40">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/research" className="hidden md:inline hover:text-white transition">Research</Link>
          <Link href="/yapz" className="hidden md:inline hover:text-white transition">Yapz</Link>
          <Link href="mailto:zaal@thezao.com" className="hover:text-white transition">Contact</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-28">
        <p className="text-sm font-mono text-white/30 mb-4 md:mb-6 uppercase tracking-wider">
          BetterCallZaal Strategies LLC
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white">
          Signal. Structure.<br/>
          <span className="text-white/40">Support.</span>
        </h1>
        <p className="mt-8 text-base text-white/45 max-w-xl leading-relaxed">
          We help teams build durable on-chain infrastructure where participation
          actually means something. Token design. Governance architecture. 
          Incentive mechanics.
        </p>
        <div className="mt-12 flex gap-6 text-sm font-mono">
          <Link
            href="mailto:zaal@thezao.com"
            className="border-b border-blue-500 text-blue-400 hover:text-blue-300 pb-0.5 transition"
          >
            Start a Project →
          </Link>
          <Link
            href="/research"
            className="border-b border-white/20 text-white/40 hover:text-white pb-0.5 transition"
          >
            Read the Research
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-white/[0.06]" />
      </div>

      {/* The Three Pillars */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Pillar 1: Strategy */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-white/60 mb-4">01. Strategy</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Economic modeling and governance design for protocols that need to survive past launch.
            </p>
            <ul className="space-y-2 text-xs font-mono text-white/30">
              <li>• Token Design</li>
              <li>• Governance Architecture</li>
              <li>• Incentive Systems</li>
            </ul>
          </div>

          {/* Pillar 2: Ventures */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-white/60 mb-4">02. Ventures</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Incubating internal primitives to test our theories on signal and coordination.
            </p>
            <ul className="space-y-2 text-xs font-mono text-white/30">
              <li>• WaveWarZ (Prediction)</li>
              <li>• ZABAL (Signal)</li>
              <li>• The ZAO (Community)</li>
            </ul>
          </div>

          {/* Pillar 3: Research */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-white/60 mb-4">03. Research</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Open-source audits, viral loop analysis, and ecosystem deep dives.
            </p>
            <ul className="space-y-2 text-xs font-mono text-white/30">
              <li>• Ecosystem Audits</li>
              <li>• Viral Mechanics</li>
              <li>• Infrastructure Maps</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 mt-8">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xs text-white/20 font-mono">
            © 2026 BetterCallZaal Strategies LLC
          </div>
          <div className="flex gap-6">
            <Link
              href="https://twitter.com/BetterCallZaal"
              target="_blank"
              className="text-xs text-white/20 hover:text-white/40 transition font-mono"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/bettercallzaal"
              target="_blank"
              className="text-xs text-white/20 hover:text-white/40 transition font-mono"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
