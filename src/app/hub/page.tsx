import Link from "next/link";

export default function Hub() {
  const projects = [
    {
      name: "ZOUNZ",
      desc: "Farcaster-native music NFT Mini App. AI music generation, Audius discovery, Zora NFT minting on Base, Attention Markets on Solana.",
      tags: ["Farcaster", "Miniapp", "Solana", "AI", "Music"],
      url: "https://github.com/bettercallzaal/ZOUNZ"
    },
    {
      name: "Fractal Bot",
      desc: "Automated governance & consensus for DAOs. Weekly voting, respect distribution, community coordination.",
      tags: ["Governance", "Discord", "Hats Protocol"],
      url: "https://github.com/bettercallzaal/fractalbotfeb2026"
    },
    {
      name: "BetterCallZaal Strategies",
      desc: "This website. Built with Next.js, Tailwind, deployed on Vercel.",
      tags: ["Next.js", "Vercel", "Miniapp"],
      url: "https://github.com/bettercallzaal/bettercallzaal-strategies"
    },
    {
      name: "Resume",
      desc: "My professional journey and background.",
      tags: ["Personal", "Career"],
      url: "https://github.com/bettercallzaal/RESUMEV1"
    },
    {
      name: "Testing Framework",
      desc: "Testing framework for AI agents.",
      tags: ["AI", "Testing"],
      url: "https://github.com/bettercallzaal/Testing-framework-for-ai-agent-2"
    },
    {
      name: "Newsletter Bot",
      desc: "Bot for managing newsletters.",
      tags: ["Bot", "Newsletter"],
      url: "https://github.com/bettercallzaal/newsletter-bot-1"
    },
    {
      name: "ZAO Fractal Bot V2",
      desc: "Older version of the governance bot.",
      tags: ["Governance", "Legacy"],
      url: "https://github.com/bettercallzaal/ZAO-FRACTAL-BOTV2"
    },
    {
      name: "Zalora V1",
      desc: "Project related to Zora protocol.",
      tags: ["NFT", "Zora"],
      url: "https://github.com/bettercallzaal/zaloraV1"
    },
    {
      name: "Eliza (Fork)",
      desc: "Fork of elizaOS - AI agent framework.",
      tags: ["AI", "Agent"],
      url: "https://github.com/bettercallzaal/eliza"
    },
    {
      name: "Astro Starter",
      desc: "Astro platform starter template.",
      tags: ["Astro", "Template"],
      url: "https://github.com/bettercallzaal/astro-platform-starter"
    }
  ];

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

        <div className="grid gap-6">
          {projects.map((project) => (
            <a 
              key={project.name}
              href={project.url}
              target="_blank"
              className="block bg-white/[0.02] border border-white/10 p-6 rounded-lg hover:border-blue-500/30 transition"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <span className="text-xs text-white/30">→ GitHub</span>
              </div>
              <p className="text-white/50 text-sm mb-4">{project.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-white/30 border border-white/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
