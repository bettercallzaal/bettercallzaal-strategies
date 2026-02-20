import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] selection:bg-blue-600/30">
      <nav className="flex items-center justify-between px-6 py-6 max-w-5xl mx-auto">
        <div className="text-sm font-mono uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-white transition">BCZ Strategies</Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-2 text-white">Zaal Panthaki</h1>
        <p className="text-lg text-white/50 font-mono mb-12">Manifestation Engineer. Vibe Coder. Builder.</p>

        <section className="mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-blue-500 mb-6">The Mission</h2>
          <p className="text-xl leading-relaxed text-white/80">
            I build infrastructure that brings <span className="text-white">100% of the profit margin</span>, IP, and data rights back to independent artists. 
            I don't build platforms to capture value; I build systems to distribute it.
          </p>
        </section>

        <div className="border-t border-white/[0.06] my-12" />

        <section className="mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-white/30 mb-6">The Work</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">The ZAO</h3>
              <p className="text-white/60 mb-4 font-mono text-sm">FOUNDER • 2022-PRESENT</p>
              <p className="text-white/40 leading-relaxed mb-4">
                An umbrella entity demystifying tech for musicians. We run 70+ weeks of live governance "Fractals," bridging IRL culture (ZAO-STOCK, NFT NYC) with on-chain incentives.
              </p>
              <div className="flex gap-2 text-xs font-mono text-white/30">
                <span className="border border-white/10 px-2 py-1 rounded">Governance</span>
                <span className="border border-white/10 px-2 py-1 rounded">Community</span>
                <span className="border border-white/10 px-2 py-1 rounded">Live Events</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">WaveWarZ</h3>
              <p className="text-white/60 mb-4 font-mono text-sm">CO-FOUNDER / STRATEGY • 2024-PRESENT</p>
              <p className="text-white/40 leading-relaxed mb-4">
                On-chain competitive music infrastructure. I strategized the "Prediction Market for Culture" model—gamifying volatility so fans engage deeply while artists earn 1% of volume.
              </p>
              <div className="flex gap-2 text-xs font-mono text-white/30">
                <span className="border border-white/10 px-2 py-1 rounded">Solana</span>
                <span className="border border-white/10 px-2 py-1 rounded">Game Theory</span>
                <span className="border border-white/10 px-2 py-1 rounded">DeFi</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">ZABAL</h3>
              <p className="text-white/60 mb-4 font-mono text-sm">ARCHITECT • JAN 2026-PRESENT</p>
              <p className="text-white/40 leading-relaxed mb-4">
                A signal coordination engine. ZABAL is the "Attention Token" for the ecosystem, rewarding signal over noise via leaderboards, clips, and IRL connectors.
              </p>
              <div className="flex gap-2 text-xs font-mono text-white/30">
                <span className="border border-white/10 px-2 py-1 rounded">Base</span>
                <span className="border border-white/10 px-2 py-1 rounded">Signal</span>
                <span className="border border-white/10 px-2 py-1 rounded">Identity</span>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-white/[0.06] my-12" />

        <section className="mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-white/30 mb-6">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Next.js / React", "Solidity", "Python (Agents)",
              "Hats Protocol", "Zora API", "Farcaster Frames",
              "AWS / Cloud", "Tailwind CSS", "Prompt Engineering"
            ].map(tech => (
              <div key={tech} className="bg-white/5 border border-white/5 rounded p-3 text-sm text-white/60 hover:bg-white/10 hover:text-white transition cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white/[0.06] my-12" />

        <section>
          <h2 className="text-sm font-mono uppercase tracking-widest text-white/30 mb-6">History</h2>
          <ul className="space-y-6 text-white/40">
            <li className="flex flex-col md:flex-row justify-between md:items-center gap-1">
              <span className="text-white/60">Senior Software Engineer (Enterprise)</span>
              <span className="font-mono text-white/20 text-sm">2022 — Present</span>
            </li>
            <li className="flex flex-col md:flex-row justify-between md:items-center gap-1">
              <span className="text-white/60">Computer Science Graduate</span>
              <span className="font-mono text-white/20 text-sm">2022</span>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
}
