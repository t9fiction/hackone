import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/Products";
import Promotions from "@/components/Promotions";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <Products />
      <Testimonials />
      <Newsletter />
    </>
  );
}
