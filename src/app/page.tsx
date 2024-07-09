"use client";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/moving-border";
import LandingWords from "@/components/LandingWords";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PopupButton } from "@typeform/embed-react";

export default function Home() {
  const [learnerCoutner, setLearnerCounter] = useState();

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/elizerr.com/buildUp/")
      .then((res) => res.json())
      .then((data) => setLearnerCounter(data.count));
  }, []);

  function handleCounter() {
    fetch("https://api.counterapi.dev/v1/elizerr.com/buildUp/up")
      .then((res) => res.json())
      .then((data) => setLearnerCounter(data.count));
  }

  return (
    <main className=" bg-slate-950  h-screen w-screen flex flex-col  items-center justify-center overflow-hidden">
      <LampContainer>
        <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-4xl">
          <LandingWords />
        </h1>
        <h1 className=" mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl">
          We got you covered !
        </h1>
        <div className="  mt-12">
          <Button
            borderRadius="1.75rem"
            className="bg-slate-900 text-white border-slate-800  "
            onClick={handleCounter}
          >
            <PopupButton id="GT9ptfOl">Count Me Excieted !</PopupButton>
          </Button>
        </div>
        {learnerCoutner && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-10 flex justify-center items-center gap-2">
              <div className="text-neutral-100 text-xl">
                Total <span className=" text-green-300"> Excitment </span> Aura
                :
              </div>

              <div className="text-yellow-600 text-3xl">
                {learnerCoutner * 100}
              </div>
            </div>
          </motion.div>
        )}
      </LampContainer>
      <div className=" text-sm font-mono -mt-11  tracking-tighter">
        <span className="text-yellow-500">Elizerr.com </span> | See You On The
        Other Side
      </div>
    </main>
  );
}
