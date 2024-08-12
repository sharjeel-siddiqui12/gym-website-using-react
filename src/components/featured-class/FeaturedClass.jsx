import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";
import Classes from "./Classes";

function FeaturedClass() {
  return (
    <section className="overflow-x-clip px-6 py-32 text-center">
      <div className="container">
        <SecondaryHeading>Our featured class</SecondaryHeading>

        <TertiaryHeading>We are offering best flexible classes</TertiaryHeading>

        <Classes />
      </div>
    </section>
  );
}

export default FeaturedClass;
