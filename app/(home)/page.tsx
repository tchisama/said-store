import CategoryPreview from "@/components/CategoryPreview";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProductsListInline from "@/components/ProductsListInline";
import StarsSimple from "@/components/StarsSimple";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryPreview />
      <ProductsListInline />
      <Features />
      <StarsSimple />
    </div>
  );
}
