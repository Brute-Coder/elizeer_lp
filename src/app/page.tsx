import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className=" bg-slate-950  h-screen w-screen flex flex-col  items-center justify-center">
      <LampContainer>
        <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl">
          Stuck in Tutorial Hell? We've Got You Covered!
        </h1>
        <div className="  mt-12">
          <Button
            borderRadius="1.75rem"
            className="bg-slate-900 text-white border-slate-800  "
          >
            Count Me Excieted !
          </Button>
        </div>
      </LampContainer>
    </main>
  );
}
