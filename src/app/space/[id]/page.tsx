import React from "react";
import { MOCK_SPACES } from "@/lib/mock-data";
import { SpaceDetailClient } from "@/components/SpaceDetailClient";

export function generateStaticParams() {
  return MOCK_SPACES.map((space) => ({
    id: space.id,
  }));
}

export default async function SpaceDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  const space = MOCK_SPACES.find((s) => s.id === id);

  if (!space) return <div className="p-12 text-center text-2xl font-bold">Space not found!</div>;

  return <SpaceDetailClient space={space} />;
}
