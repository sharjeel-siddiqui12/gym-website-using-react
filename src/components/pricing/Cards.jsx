import TertiaryButton from "../buttons/TertiaryButton";

import img1 from "../../images/pricing/img1.webp";
import img2 from "../../images/pricing/img2.webp";
import img3 from "../../images/pricing/img3.webp";

const imgStyles = `grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0`;

const headingStyles = `clip-path-left group-hover:clip-path-right absolute bottom-[-1px] right-1/2 w-3/4 translate-x-1/2 bg-white py-5 text-lg font-bold text-red transition-all duration-500 group-hover:bg-red group-hover:text-white`;

function Cards() {
  return (
    <div className="relative z-10 grid gap-8 xl:grid-cols-2 2xl:grid-cols-3">
      {/* 01 */}
      <div className="flex flex-col shadow-2xl">
        <div className="group relative overflow-hidden">
          <img src={img1} alt="" className={imgStyles} />
          <h4 className={headingStyles}>Beginners</h4>
        </div>
        <div className="relative z-[1] space-y-8 bg-white py-10">
          <h5 className="text-2xl text-gray-300">
            Rs. <span className="text-6xl font-bold text-gray-600">5,000</span> p/m
          </h5>
          <ul className="space-y-3 font-medium text-gray-300">
            <li>Free Hand</li>
            <li>Gym Fitness</li>
            <li>Weight Loss</li>
            <li>Personal Trainer</li>
            <li>Cycling</li>
          </ul>
          <TertiaryButton>Purchase now</TertiaryButton>
        </div>
      </div>

      {/* 02 */}
      <div className="flex flex-col shadow-2xl">
        <div className="group relative overflow-hidden">
          <img src={img2} alt="" className={imgStyles} />
          <h4 className={headingStyles}>Basic</h4>
        </div>
        <div className="relative z-[1] space-y-8 bg-white py-10">
          <h5 className="text-2xl text-gray-300">
            Rs. <span className="text-6xl font-bold text-gray-600">6,000</span> p/m
          </h5>
          <ul className="space-y-3 font-medium text-gray-300">
            <li>Free Hand</li>
            <li>Gym Fitness</li>
            <li>Weight Loss</li>
            <li>Personal Trainer</li>
            <li>Cycling</li>
          </ul>
          <TertiaryButton>Purchase now</TertiaryButton>
        </div>
      </div>

      {/* 03 */}
      <div className="flex flex-col shadow-2xl xl:col-span-2 xl:w-1/2 xl:justify-self-center 2xl:col-span-1 2xl:w-auto">
        <div className="group relative overflow-hidden">
          <img src={img3} alt="" className={imgStyles} />
          <h4 className={headingStyles}>Advance</h4>
        </div>
        <div className="relative z-[1] space-y-8 bg-white py-10">
          <h5 className="text-2xl text-gray-300">
            Rs. <span className="text-6xl font-bold text-gray-600">10,000</span> p/m
          </h5>
          <ul className="space-y-3 font-medium text-gray-300">
            <li>Free Hand</li>
            <li>Gym Fitness</li>
            <li>Weight Loss</li>
            <li>Personal Trainer</li>
            <li>Cycling</li>
          </ul>
          <TertiaryButton>Purchase now</TertiaryButton>
        </div>
      </div>
    </div>
  );
}

export default Cards;
