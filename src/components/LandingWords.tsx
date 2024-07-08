import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export default function LandingWords() {
  const words = [
    "Stuck in Tutorial Hell ?",
    "Tired of studying alone ?",
    "Need structured learning path ?",
    "Seeking personalized guidance?",
  ];

  return (
    <>
      <FlipWords words={words} />
    </>
  );
}
