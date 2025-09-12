import { Hero } from "@/componets";
import Navbar from "@/componets/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Navbar />
     
      </main>
  );
}
