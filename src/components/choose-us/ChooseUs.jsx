import Image from "./Image";
import Features from "./Features";
import Title from "./Title";
import SecondaryButton from "../buttons/SecondaryButton";

function ChooseUs() {
  return (
    <section className="relative z-[1] overflow-x-clip bg-[url('./images/choose-us/bg.webp')] bg-cover bg-no-repeat px-6 py-32">
      <div className="container grid gap-20 2xl:grid-cols-2">
        <Image />

        <div className="text-center 2xl:text-left">
          <Title />
          <Features />
          <SecondaryButton to="/classes">Our classes</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
