"use client";

import { useEffect, useState } from "react";

export default function MiniappProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (window.forge) {
      // @ts-ignore
      window.forge.ready?.then(() => {
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
