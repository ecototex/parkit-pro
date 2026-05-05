import React from "react";
import { MOCK_SPACES } from "@/lib/mock-data";
import SpaceDetailClient from "@/components/SpaceDetailClient";

export function generateStaticParams() {
  return MOCK_SPACES.map((space) => ({
    id: space.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>
}

export default async function SpaceDetailPage({ params }: Props) {
  const { id } = await params;
  const space = MOCK_SPACES.find((s) => s.id === id);
  
  if (!space) return <div className="p-12 text-center text-2xl font-bold">Space not found!</div>;

  return <SpaceDetailClient space={space} />;
}
