"use client";

import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("@/components/ContactMap"), { ssr: false });

export function ContactMapWrapper({
  lat,
  lng,
  map2gisUrl,
  compact,
}: {
  lat: number;
  lng: number;
  map2gisUrl: string;
  compact?: boolean;
}) {
  return <ContactMap lat={lat} lng={lng} map2gisUrl={map2gisUrl} compact={compact} />;
}
