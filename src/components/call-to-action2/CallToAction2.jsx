import TertiaryButton from "../buttons/TertiaryButton";

function CallToAction2() {
  return (
    <section className="relative z-[1] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/call-to-action2/bg.webp')] bg-cover bg-[85%] px-6 py-20">
      <div className="container space-y-10">
        <h4 className="text-4xl font-bold text-white">
          Need a Fitness Trainer?
        </h4>
        <p className="text-2xl font-bold text-white">
          <span className="text-red">Call:</span> +92 31523697586
        </p>
        <TertiaryButton>Purchase now</TertiaryButton>
      </div>
    </section>
  );
}

export default CallToAction2;
