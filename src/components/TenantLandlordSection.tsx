"use client";

import { useState } from "react";
import Image from "next/image";
import { Home, ChevronRight, Youtube } from "lucide-react";

export default function TenantLandlordSection() {
  const [tab, setTab] = useState<"tenants" | "landlords">("tenants");

  const copy =
    tab === "tenants"
      ? "Whether it’s selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you’ll save a bunch of money and time with our services."
      : "List your properties, screen tenants, and manage payments from one place with less hassle and better outcomes.";

  return (
    <section className="relative z-0 py-16 lg:py-24 bg-[#feffff]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* IZQUIERDA: imagen + tarjetas flotantes */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/casa-marron-2.png"
              alt="Home exterior"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* Badge: Virtual home tour */}
          <div className="absolute -left-4 top-6">
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/95 px-4 py-3 shadow-card backdrop-blur">
              <span className="grid h-10 w-10 place-content-center rounded-full bg-primary/10">
                <Youtube className="h-5 w-5 text-primary" />
              </span>
              <div>
                <div className="font-semibold">Virtual home tour</div>
                <div className="text-sm text-secondary">
                  We provide you with virtual tour
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta: Find the best deal */}
          <div className="absolute -bottom-6 left-10">
            <div className="relative flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-card">
              {/* Icono flotante */}
              <span className="absolute -top-5 -right-1 grid h-12 w-12 place-content-center rounded-full bg-primary shadow-lg border-4 border-white">
                <Home className="h-6 w-6 text-white" />
              </span>
              <div className="pl-10 pr-2 py-1">
                <div className="font-semibold">Find the best deal</div>
                <div className="text-sm text-secondary">
                  Browse thousands of properties
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DERECHA: tabs + copy + CTA */}
        <div>
          <div className="mb-6 inline-flex rounded-2xl border border-gray-200 bg-white p-1 shadow-card">
            <button
              onClick={() => setTab("tenants")}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${tab === "tenants"
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              For tenants
            </button>
            <button
              onClick={() => setTab("landlords")}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${tab === "landlords"
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              For landlords
            </button>
          </div>

          <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            We make it easy for tenants and landlords.
          </h2>

          <p className="mb-8 max-w-xl text-secondary">{copy}</p>

          <a
            href="#more"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-white shadow-lg"
          >
            See more <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
