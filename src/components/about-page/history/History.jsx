import TertiaryHeading from "../../headings/TertiaryHeading";

import mountain from "../../../images/about-page/mountain.png";
import target from "../../../images/about-page/target.png";
import img1 from "../../../images/about-page/img1.webp";
import img2 from "../../../images/about-page/img2.webp";

function History() {
  return (
    <section className="bg-[url('./images/about-page/bg.png')] bg-cover px-6 py-32 text-center">
      <div className="container grid shadow-2xl xl:grid-cols-2 ">
        <div className="flex h-full flex-col gap-4 self-center bg-white p-4">
          <img
            src={target}
            alt=""
            className="hover:rotate-y-180 mx-auto w-32 transition-all duration-700"
          />
          <TertiaryHeading>Our history</TertiaryHeading>
          <p className="font-medium text-gray-300">
            CoreFit began with a vision to inspire healthier lives. Over the years, we’ve grown into a trusted fitness community, helping members achieve their goals through dedication and support.
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src={img1}
            alt=""
            className="h-full transition-all duration-300 hover:scale-110"
          />
        </div>

        <div className="flex h-full flex-col gap-4 self-center bg-white p-4 xl:order-4">
          <img
            src={mountain}
            alt=""
            className="hover:rotate-y-180 mx-auto transition-all duration-700"
          />
          <TertiaryHeading>Our Mission</TertiaryHeading>
          <p className="font-medium text-gray-300">
            CoreFit’s mission is to empower every member to lead a healthier, stronger life through expert guidance, modern facilities, and a supportive community.
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src={img2}
            alt=""
            className="h-full transition-all duration-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default History;
