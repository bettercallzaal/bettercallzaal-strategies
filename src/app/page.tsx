import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="text-lg font-bold tracking-tight">
          BetterCallZaal<span className="text-blue-500"> Strategies</span>
        </div>
        <Link
          href="mailto:zaal@bettercallzaal.com"
          className="text-sm border border-white/20 px-4 py-2 rounded hover:bg-white/10 transition"
        >
          Get in Touch
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Infrastructure for the
          <br />
          <span className="text-blue-500">creator economy.</span>
        </h1>
        <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
          Token design. Governance architecture. Incentive systems.
          We help teams build durable on-chain infrastructure that aligns
          communities and generates real value.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="mailto:zaal@bettercallzaal.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition"
          >
            Book a Strategy Call
          </Link>
          <Link
            href="#services"
            className="border border-white/20 px-6 py-3 rounded font-medium hover:bg-white/10 transition"
          >
            See Services
          </Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">What We Build</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Token Design",
              desc: "Economic models that drive participation, align incentives, and sustain ecosystems beyond launch.",
            },
            {
              title: "Governance Architecture",
              desc: "Decision-making frameworks, contributor structures, and DAO tooling — tested across 70+ weeks of live governance.",
            },
            {
              title: "Incentive Systems",
              desc: "Reward mechanics, signal coordination, and participation engines that convert community activity into measurable value.",
            },
            {
              title: "On-Chain Music Strategy",
              desc: "Infrastructure for artists: royalty systems, competitive formats, and programmable entertainment economics.",
            },
            {
              title: "Community Activation",
              desc: "IRL + URL event strategy, cultural bridging, and engagement systems that compound over time.",
            },
            {
              title: "Ecosystem Coordination",
              desc: "Multi-stakeholder alignment across protocols, platforms, and communities. Systems, not noise.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="border border-white/10 rounded-lg p-6 hover:border-blue-500/40 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Track Record</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "70+", label: "Weeks of live governance" },
            { stat: "100+", label: "Artists collaborated with" },
            { stat: "50+", label: "Communities coordinated" },
            { stat: "2", label: "IRL side events produced" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-4xl font-bold text-blue-500">
                {item.stat}
              </div>
              <div className="text-sm text-white/50 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build infrastructure that lasts?</h2>
        <p className="text-white/50 mb-8">
          We work with a small number of high-impact clients. Let&apos;s talk about what you&apos;re building.
        </p>
        <Link
          href="mailto:zaal@bettercallzaal.com"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition inline-block"
        >
          Start a Conversation
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm text-white/40">
          <div>© 2026 BetterCallZaal Strategies LLC</div>
          <div className="flex gap-6">
            <Link href="https://twitter.com/BetterCallZaal" target="_blank" className="hover:text-white/70 transition">
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
