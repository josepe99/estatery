"use client";

import { ReactNode } from "react";

type Field = {
  label: string;
  value: string;
  icon: ReactNode;
};

export default function SearchBar({
  location,
  date,
  ctaLabel,
}: {
  location: Field;
  date: Field;
  ctaLabel: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-card">
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
        {/* Location */}
        <div className="flex-1">
          <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
            {location.label}
          </div>
          <div className="mt-1 flex items-center gap-2 text-gray-900">
            <span className="text-gray-400">{location.icon}</span>
            <span className="text-sm sm:text-base">{location.value}</span>
          </div>
        </div>

        <div className="hidden h-10 w-px shrink-0 bg-gray-200 sm:block" />

        {/* Date */}
        <div className="flex-1">
          <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
            {date.label}
          </div>
          <div className="mt-1 flex items-center gap-2 text-gray-900">
            <span className="text-gray-400">{date.icon}</span>
            <span className="text-sm sm:text-base">{date.value}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="sm:ml-auto">
          <button className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-primary hover:bg-primary/90 sm:w-auto">
            {ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
