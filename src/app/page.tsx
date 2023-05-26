import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Promotions from "@/components/Promotions";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <Products />
    </>
  );
}
