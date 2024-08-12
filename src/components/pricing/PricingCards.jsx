import Title from "./Title";
import Cards from "./Cards";

function PricingCards() {
  return (
    <section className="relative overflow-clip bg-[url('./images/pricing/bg.webp')] bg-cover bg-no-repeat px-6 py-32 text-center before:absolute before:left-0 before:top-0 before:z-10 before:h-96 before:w-96 before:animate-float1 before:bg-[url('./images/pricing/shape1.png')] before:bg-contain before:bg-no-repeat after:absolute after:bottom-0 after:right-0 after:h-96 after:w-96 after:animate-float2 after:bg-[url('./images/pricing/shape2.png')] after:bg-contain after:bg-no-repeat">
      <div className="container space-y-12">
        <Title />

        <Cards />
      </div>
    </section>
  );
}

export default PricingCards;
