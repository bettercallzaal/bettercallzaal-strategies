import Link from "next/link";

export default function Hub() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0]">
      <nav className="flex items-center justify-between px-6 py-6 max-w-5xl mx-auto">
        <div className="text-sm font-mono uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-white transition">BCZ Strategies</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-2 text-white">The Hub</h1>
        <p className="text-lg text-white/50 font-mono mb-12">Code primitives & open source tools</p>

        <div className="grid gap-8">
          
          {/* ZOUNZ */}
          <a href="https://github.com/bettercallzaal/ZOUNZ" target="_blank" className="block bg-white/5 border border-white/10 p-8 rounded-lg hover:border-blue-500/30 transition">
            <h3 className="text-xl font-bold text-white mb-2">ZOUNZ</h3>
            <p className="text-white/50 mb-4">Farcaster-native music NFT Mini App. AI music generation, Audius discovery, Zora NFT minting.</p>
            <div className="flex gap-2 text-xs font-mono text-white/30">
              <span className="border border-white/10 px-2 py-1 rounded">Farcaster</span>
              <span className="border border-white/10 px-2 py-1 rounded">Solana</span>
              <span className="border border-white/10 px-2 py-1 rounded">AI</span>
            </div>
          </a>

          {/* Fractal Bot */}
          <a href="https://github.com/bettercallzaal/fractalbotfeb2026" target="_blank" className="block bg-white/5 border border-white/10 p-8 rounded-lg hover:border-blue-500/30 transition">
            <h3 className="text-xl font-bold text-white mb-2">Fractal Bot</h3>
            <p className="text-white/50 mb-4">Automated governance & consensus for DAOs. Weekly voting, respect distribution, community coordination.</p>
            <div className="flex gap-2 text-xs font-mono text-white/30">
              <span className="border border-white/10 px-2 py-1 rounded">Governance</span>
              <span className="border border-white/10 px-2 py-1 rounded">Discord</span>
              <span className="border border-white/10 px-2 py-1 rounded">Hats Protocol</span>
            </div>
          </a>

          {/* BetterCallZaal Strategies */}
          <a href="https://github.com/bettercallzaal/bettercallzaal-strategies" target="_blank" className="block bg-white/5 border border-white/10 p-8 rounded-lg hover:border-blue-500/30 transition">
            <h3 className="text-xl font-bold text-white mb-2">BetterCallZaal Strategies</h3>
            <p className="text-white/50 mb-4">This website. Built with Next.js, Tailwind, deployed on Vercel.</p>
            <div className="flex gap-2 text-xs font-mono text-white/30">
              <span className="border border-white/10 px-2 py-1 rounded">Next.js</span>
              <span className="border border-white/10 px-2 py-1 rounded">Vercel</span>
              <span className="border border-white/10 px-2 py-1 rounded">Miniapp</span>
            </div>
          </a>

        </div>
      </main>
    </div>
  );
}
