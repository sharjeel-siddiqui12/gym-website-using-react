import training from "../../images/choose-us/training.png";
import equipments from "../../images/choose-us/equipments.png";
import bag from "../../images/choose-us/bag.png";
import water from "../../images/choose-us/water.png";

function Features() {
  return (
    <div className="mb-20 grid items-center gap-10 px-10 text-center md:grid-cols-2 md:gap-6">
      <div className="flex items-center justify-center gap-4">
        <img
          src={training}
          alt=""
          className="w-16 rounded-full bg-gray-550 p-2 transition-all duration-700 hover:shadow-2xl hover:shadow-red"
        />
        <h4 className="basis-32 text-lg font-bold capitalize text-white">
          Free fitness training
        </h4>
      </div>
      <div className="flex items-center justify-center gap-4">
        <img
          src={equipments}
          alt=""
          className="w-16 rounded-full bg-gray-550 p-2 transition-all duration-700 hover:shadow-2xl hover:shadow-red"
        />
        <h4 className="basis-32 text-lg font-bold capitalize text-white">
          Modern gym equipments
        </h4>
      </div>
      <div className="flex items-center justify-center gap-4">
        <img
          src={bag}
          alt=""
          className="w-16 rounded-full bg-gray-550 p-2 transition-all duration-700 hover:shadow-2xl hover:shadow-red"
        />
        <h4 className="basis-32 text-lg font-bold capitalize text-white">
          Gym bag equipments
        </h4>
      </div>
      <div className="flex items-center justify-center gap-4">
        <img
          src={water}
          alt=""
          className="w-16 rounded-full bg-gray-550 p-2 transition-all duration-700 hover:shadow-2xl hover:shadow-red"
        />
        <h4 className="basis-32 text-lg font-bold capitalize text-white">
          Fresh bottle of water
        </h4>
      </div>
    </div>
  );
}

export default Features;
