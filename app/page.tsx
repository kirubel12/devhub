import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { auth, } from "@clerk/nextjs";

export default function Home() {
  
  
  return (
  <main className="">
   <Hero />
   <Section />
   <Footer />
  </main>
  );
}
