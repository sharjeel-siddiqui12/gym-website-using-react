import FeatureCards from "./FeatureCards";
import Title from "./Title";
import Facilities from "./Facilities";
import SecondaryButton from "../buttons/SecondaryButton";
import RunningGirl from "./RunningBoy";

function WhoWeAre() {
  return (
    <section className="overflow-x-clip bg-[url('./images/who-we-are/background.webp')] px-6 pb-32">
      <div className="container space-y-32">
        <FeatureCards />

        <div className="relative z-[1] grid items-center gap-5 text-center 2xl:grid-cols-[1fr,1fr] 2xl:text-left">
          <div>
            <Title />

            <Facilities />

            <SecondaryButton to="/classes">Take a tour</SecondaryButton>
          </div>

          <RunningGirl />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
