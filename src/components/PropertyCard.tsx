import { Bath, BedDouble, Scan } from "lucide-react";
import Image from "next/image";

type Props = {
  imageSrc: string;
  price: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  area: string;
};

export default function PropertyCard({
  imageSrc,
  price,
  title,
  address,
  beds,
  baths,
  area,
}: Props) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-gray-200 flex flex-col">
      <div className="relative h-56 w-full">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 p-6 flex-1">
        <div className="text-primary font-semibold text-xl">
          {price}
          <span className="text-sm font-normal text-gray-500"> /month</span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight leading-tight">{title}</h3>
        <p className="text-sm text-secondary">{address}</p>
        <div className="mt-3 flex items-center gap-8 text-sm text-gray-700">
          <span className="inline-flex items-center gap-2">
            <BedDouble className="h-4 w-4" /> {beds}
          </span>
          <span className="inline-flex items-center gap-2">
            <Bath className="h-4 w-4" /> {baths}
          </span>
          <span className="inline-flex items-center gap-2">
            <Scan className="h-4 w-4" /> {area}
          </span>
        </div>
      </div>
    </article>
  );
}
