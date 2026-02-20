"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    forge?: {
      ready: Promise<void>;
      identity: any;
    };
  }
}

export default function MiniappProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.forge) {
      window.forge.ready.then(() => {
        setReady(true);
      }).catch(() => {
        setReady(true);
      });
    } else {
      setReady(true);
    }
  }, []);

  return <>{children}</>;
}
