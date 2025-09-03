"use client";

import Image from "next/image";
import { Calendar, MapPin, Bath, BedDouble, Scan, Mail } from "lucide-react";
import Tabs from "@/src/components/Tabs";
import PropertyCard from "@/src/components/PropertyCard";
import SearchBar from "@/src/components/SearchBar";
import Metric from "@/src/components/Metric";
import TenantLandlordSection from "../components/TenantLandlordSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative pb-10 lg:pb-20 ">
        {/* Background grid / map area */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
          <div className="absolute inset-0 -z-10 bg-[url('/map.png')] bg-cover bg-center opacity-30" />
          {/* floating card 1 */}
          <div className="absolute left-8 top-16 w-[324px] h-[416px] rounded-2xl bg-white shadow-card ring-1 ring-gray-200/60">
            <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl">
              <Image
                src="/casa-techo-azul.png"
                alt="Featured house"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="space-y-3 p-6">
              <div className="text-primary font-semibold text-2xl leading-none">
                $2,700<span className="text-sm font-normal text-gray-500"> /month</span>
              </div>
              <div className="text-lg font-semibold tracking-tight">Beverly Springfield</div>
              <div className="text-sm text-secondary">2821 Lake Sevilla, Palm Harbor, TX</div>
              <div className="mt-2 flex items-center gap-6 text-sm text-gray-700">
                <span className="inline-flex items-center gap-2">
                  <BedDouble className="h-4 w-4" /> 4
                </span>
                <span className="inline-flex items-center gap-2">
                  <Bath className="h-4 w-4" /> 2
                </span>
                <span className="inline-flex items-center gap-2">
                  <Scan className="h-4 w-4" /> 6×7.5 m²
                </span>
              </div>
            </div>
          </div>

          {/* floating mail badge + pin path (decorative) */}
          <div className="absolute right-16 top-28 flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg">
            <Mail className="h-6 w-6" />
          </div>

          {/* floating card 2 */}
          <div className="absolute bottom-12 right-16 w-[320px] rounded-2xl border border-primary/30 bg-white p-3 shadow-card">
            <div className="relative h-[140px] w-full overflow-hidden rounded-xl">
              <Image src="/casa-marron.png" alt="Tarpon Bay" fill className="object-cover" />
            </div>
            <div className="space-y-2 p-2">
              <div className="text-primary font-semibold">$1,600<span className="text-xs text-gray-500"> /month</span></div>
              <div className="text-base font-semibold">Tarpon Bay</div>
              <div className="text-xs text-secondary">Palm Harbor, TX</div>
              <div className="mt-1 flex items-center gap-4 text-xs text-gray-700">
                <span className="inline-flex items-center gap-1">
                  <BedDouble className="h-3.5 w-3.5" /> 4
                </span>
                <span className="inline-flex items-center gap-1">
                  <Bath className="h-3.5 w-3.5" /> 2
                </span>
                <span className="inline-flex items-center gap-1">
                  <Scan className="h-3.5 w-3.5" /> 6×8 m²
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Left content */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-20 pt-12 lg:grid-cols-[1fr,1fr] lg:gap-20 lg:pb-24 lg:pt-16">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl font-extrabold leading-[1.05] text-heading sm:text-6xl">
              Buy, rent, or sell
              <br />
              your property
              <br />
              easily
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              A great platform to buy, sell, or even rent your properties without any
              commisions.
            </p>

            {/* Metrics */}
            <div className="text-primary mt-10 grid max-w-xl grid-cols-2 gap-8">
              <Metric value="50k+" label="renters" />
              <Metric value="10k+" label="properties" />
            </div>

            {/* Tabs + Search */}
            <div className="mt-12">
              <Tabs tabs={["Rent", "Buy", "Sell"]} />
              <div className="mt-6">
                <SearchBar
                  location={{
                    label: "Location",
                    value: "Barcelona, Spain",
                    icon: <MapPin className="h-4 w-4" />,
                  }}
                  date={{
                    label: "When",
                    value: "Select Move-in Date",
                    icon: <Calendar className="h-4 w-4" />,
                  }}
                  ctaLabel="Browse Properties"
                />
              </div>
            </div>
          </div>

          {/* Right column placeholder for mobile / tablet (image below) */}
          <div className="lg:hidden">
            <div className="relative mx-auto mt-8 max-w-xl overflow-hidden rounded-2xl ring-1 ring-gray-200">
              <Image
                src="/hero-house.jpg"
                alt="Featured house"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="mt-8">
              <PropertyCard
                imageSrc="/house-1.jpg"
                price="$1,600"
                title="Tarpon Bay"
                address="Palm Harbor, TX"
                beds={4}
                baths={2}
                area="6×8 m²"
              />
            </div>
          </div>
        </div>
      </section>

      <TenantLandlordSection />
    </main>
  );
}
