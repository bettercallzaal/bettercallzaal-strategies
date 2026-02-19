import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] selection:bg-blue-600/30">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-5xl mx-auto">
        <div className="text-sm font-mono uppercase tracking-widest text-white/50">
          BCZ Strategies
        </div>
        <Link
          href="mailto:zaal@bettercallzaal.com"
          className="text-xs font-mono uppercase tracking-wider text-white/40 hover:text-white transition"
        >
          Contact
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-28">
        <p className="text-sm font-mono text-white/30 mb-6 uppercase tracking-wider">
          BetterCallZaal Strategies LLC
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white">
          We design the systems that
          make creator economies work.
        </h1>
        <p className="mt-8 text-base text-white/45 max-w-xl leading-relaxed">
          Token architecture. Governance design. Incentive mechanics.
          For teams building on-chain infrastructure where participation
          needs to mean something.
        </p>
        <div className="mt-12">
          <Link
            href="mailto:zaal@bettercallzaal.com"
            className="text-sm font-mono border-b border-blue-500 text-blue-400 hover:text-blue-300 pb-0.5 transition"
          >
            zaal@bettercallzaal.com →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-white/[0.06]" />
      </div>

      {/* Services */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-mono text-white/25 uppercase tracking-wider mb-16">
          Engagements
        </p>
        <div className="space-y-16">
          {[
            {
              title: "Token Design & Economics",
              desc: "Supply structures, distribution mechanics, and incentive alignment that survive past launch. Not tokenomics decks — working economic systems.",
            },
            {
              title: "Governance Architecture",
              desc: "Contributor frameworks, decision protocols, and coordination tooling. Informed by 70+ weeks of running live decentralized governance.",
            },
            {
              title: "Incentive & Signal Systems",
              desc: "Participation engines that surface real signal from community noise. Leaderboards, reward mechanics, and coordination layers that compound.",
            },
            {
              title: "On-Chain Music Infrastructure",
              desc: "Royalty systems, competitive formats, artist revenue models. Programmable entertainment economics built for independents.",
            },
            {
              title: "Community & Event Strategy",
              desc: "IRL activations, cultural bridging, multi-stakeholder coordination. Two side events produced (NFT NYC, Art Basel Miami). Not vibes — systems.",
            },
          ].map((service) => (
            <div key={service.title} className="grid md:grid-cols-[200px_1fr] gap-4">
              <h3 className="text-sm font-mono text-white/60">{service.title}</h3>
              <p className="text-white/35 text-sm leading-relaxed max-w-lg">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-white/[0.06]" />
      </div>

      {/* About / Credibility */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-xs font-mono text-white/25 uppercase tracking-wider mb-10">
          Background
        </p>
        <p className="text-white/40 text-sm leading-relaxed max-w-lg">
          Built by Zaal Panthaki. Engineer. Founder of The ZAO.
          Cofounder of WaveWarZ. Architect of ZABAL. Years spent
          at the intersection of music, governance, token design,
          and community coordination — building infrastructure
          that independents actually own.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
          {[
            { val: "70+", label: "weeks live governance" },
            { val: "100+", label: "artist collaborations" },
            { val: "50+", label: "communities coordinated" },
            { val: "2", label: "IRL events produced" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-semibold text-white/80">{s.val}</div>
              <div className="text-xs text-white/25 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 mt-8">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xs text-white/20 font-mono">
            © 2026 BetterCallZaal Strategies LLC
          </div>
          <Link
            href="https://twitter.com/BetterCallZaal"
            target="_blank"
            className="text-xs text-white/20 hover:text-white/40 transition font-mono"
          >
            @BetterCallZaal
          </Link>
        </div>
      </footer>
    </div>
  );
}
