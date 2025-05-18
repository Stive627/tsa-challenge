"use client"
import Welcome from "@/Components/Welcome/Welcome";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Welcome/>
    </Suspense>
  );
}
