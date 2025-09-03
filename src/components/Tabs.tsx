"use client";

import { useState } from "react";

type TabsProps = {
  tabs: string[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 shadow-card">
      <div className="grid grid-cols-3 gap-1">
        {tabs.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={[
                "rounded-xl px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-50",
              ].join(" ")}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
