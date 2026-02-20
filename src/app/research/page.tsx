import Link from "next/link";

export default function Research() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] selection:bg-blue-600/30">
      <nav className="flex items-center justify-between px-6 py-6 max-w-5xl mx-auto">
        <div className="text-sm font-mono uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-white transition">BCZ Strategies</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-2 text-white">Strategic Intelligence</h1>
        <p className="text-lg text-white/50 font-mono mb-12">Public Research & Ecosystem Audits</p>

        <div className="space-y-16">
          
          {/* ZABAL Analysis */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-500/50"></div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400">ZABAL (Token + System)</h2>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8 rounded-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Live Status: Active Build</h3>
              <ul className="space-y-3 text-white/60 mb-6 font-mono text-sm">
                <li>• Network: Base (0xbB48...)</li>
                <li>• Launch: Clanker / Uniswap v4</li>
                <li>• Context: Paired with SANG (SongJam)</li>
              </ul>
              <p className="leading-relaxed text-white/80 mb-4">
                **The Alpha:** &quot;Molt Spaces&quot; (Virtuals Protocol Skill) is the key acceleration vector. 
                It upgrades Voice SBTs based on X Spaces participation. 
                <br/><br/>
                **Strategy:** We don&apos;t need to &quot;revive&quot; ZABAL; we need to bind it to the &quot;Daily 10&quot; (Yapz).
                Share the content -&gt; Earn the signal -&gt; Molt the identity.
              </p>
            </div>
          </section>

          {/* WaveWarZ Pivot */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-500/50"></div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400">WaveWarZ (Prediction Layer)</h2>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8 rounded-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Pivot: "Label Futures"</h3>
              <p className="leading-relaxed text-white/80 mb-6">
                Moving from "Fantasy Music Game" to **"The Cultural Prediction Layer."**
                Polymarket bets on binary outcomes. WaveWarZ bets on *cultural momentum*.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-mono text-sm mb-2">The Killer Feature</h4>
                  <p className="text-white/60 text-sm">
                    **Battle Frames:** Embed the betting UI directly into Farcaster. 
                    "Click Left to Bet 0.1 SOL." No external site required.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-mono text-sm mb-2">New Revenue</h4>
                  <p className="text-white/60 text-sm">
                    **B2B Data:** Selling "Pre-Viral" sentiment data to record labels. 
                    We know who is popping before Spotify does.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Battle Map */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-500/50"></div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400">Distribution Architecture</h2>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8 rounded-sm">
              <div className="space-y-6">
                <div className="flex justify-between items-start border-b border-white/5 pb-6">
                  <div>
                    <h3 className="text-white font-bold mb-1">@BetterCallZaal</h3>
                    <p className="text-xs font-mono text-blue-400">THE MASTER NODE</p>
                  </div>
                  <p className="text-sm text-white/60 text-right max-w-xs">
                    Aggregator of everything. "Builder Lessons" + "Yapz". 
                    The only account that matters for monetization.
                  </p>
                </div>
                
                <div className="flex justify-between items-start border-b border-white/5 pb-6">
                  <div>
                    <h3 className="text-white font-bold mb-1">The ZAO</h3>
                    <p className="text-xs font-mono text-white/30">UTILITY NODE</p>
                  </div>
                  <p className="text-sm text-white/60 text-right max-w-xs">
                    Pure signal. Retweets artists. Announces Fractals. 
                    No noise. No GameStop rants.
                  </p>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-bold mb-1">WaveWarZ</h3>
                    <p className="text-xs font-mono text-white/30">PRODUCT NODE</p>
                  </div>
                  <p className="text-sm text-white/60 text-right max-w-xs">
                    High frequency action. Battle announcements. 
                    Odds. Winners. Transactional.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
