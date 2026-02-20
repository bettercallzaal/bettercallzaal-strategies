import Link from "next/link";

export default function Yapz() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] selection:bg-blue-600/30">
      <nav className="flex items-center justify-between px-6 py-6 max-w-5xl mx-auto">
        <div className="text-sm font-mono uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-white transition">BCZ Strategies</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">BCZ Yapz</h1>
            <p className="text-lg text-white/50 font-mono">The Daily 10. Unfiltered Signal.</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-xs font-mono text-blue-400 mb-1">EARN $ZABAL</p>
            <button className="border border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-2 rounded text-xs font-mono hover:bg-blue-500/20 transition">
              Connect Wallet
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Placeholder Video Card */}
          <div className="group">
            <div className="aspect-video bg-white/5 border border-white/10 rounded flex items-center justify-center mb-4 group-hover:border-blue-500/30 transition">
              <span className="text-white/20 font-mono text-sm">Latest Stream Embed</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition">
              Ep. 001: Infrastructure vs. Hype
            </h3>
            <p className="text-sm text-white/40 font-mono">Feb 20, 2026 • 10:00 min</p>
          </div>

          {/* Placeholder Video Card */}
          <div className="group">
            <div className="aspect-video bg-white/5 border border-white/10 rounded flex items-center justify-center mb-4 group-hover:border-blue-500/30 transition">
              <span className="text-white/20 font-mono text-sm">Stream Embed</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition">
              Ep. 000: The Pivot to Signal
            </h3>
            <p className="text-sm text-white/40 font-mono">Feb 19, 2026 • 12:45 min</p>
          </div>
        </div>

      </main>
    </div>
  );
}
