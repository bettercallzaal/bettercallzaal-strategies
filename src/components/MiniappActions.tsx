"use client";

import { useState, useEffect } from "react";

export default function MiniappActions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShare = async () => {
    // @ts-ignore
    if (window.forge?.actions?.composeCast) {
      try {
        // @ts-ignore
        await window.forge.actions.composeCast({
          text: "Check out BetterCallZaal Strategies - Ecosystem Architect building infrastructure for the creator economy. Token design. Governance. Signal.",
          embeds: ["https://bettercallzaal-strategies.vercel.app"]
        });
      } catch (e) {
        console.log("Cast cancelled or failed");
      }
    } else {
      // Fallback for web
      window.open("https://farcaster.xyz/~/compose?text=Check%20out%20BetterCallZaal%20Strategies%20-%20Ecosystem%20Architect%20building%20infrastructure%20for%20the%20creator%20economy.%20https://bettercallzaal-strategies.vercel.app", "_blank");
    }
  };

  const handleBook = () => {
    window.location.href = "mailto:zaal@thezao.com?subject=Booking%20Consultation";
  };

  const handleTip = () => {
    window.open("https://clanker.world/bundler/0xbB48f19B0494Ff7C1fE5Dc2032aeEE14312f0b07", "_blank");
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Share Button */}
      <button 
        onClick={handleShare}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-mono transition"
      >
        <span>📢</span>
        <span className="hidden md:inline">Share</span>
      </button>

      {/* Book Button */}
      <button 
        onClick={handleBook}
        className="bg-white text-black hover:bg-gray-200 px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-mono transition"
      >
        <span>📅</span>
        <span className="hidden md:inline">Book Call</span>
      </button>

      {/* Tip Button */}
      <button 
        onClick={handleTip}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-mono transition"
      >
        <span>💎</span>
        <span className="hidden md:inline">Tip ZABAL</span>
      </button>
    </div>
  );
}
