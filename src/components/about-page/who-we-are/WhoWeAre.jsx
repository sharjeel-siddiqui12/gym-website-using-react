import Image from "./Image";
import Title from "./Title";
import List from "./List";
import TertiaryButton from "../../buttons/TertiaryButton";

function WhoWeAre() {
  return (
    <section className="relative bg-no-repeat px-6 py-32 before:absolute before:bottom-0 before:right-0 before:z-[-1] before:h-96 before:w-64 before:animate-bounce before:bg-[url('./images/about-page/shape.png')] before:bg-right-bottom before:bg-no-repeat">
      <div className="container grid gap-14 2xl:grid-cols-2">
        <Image />

        <div className="space-y-8">
          <Title />

          <List />

          <TertiaryButton to="/contact">Contact with us</TertiaryButton>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
