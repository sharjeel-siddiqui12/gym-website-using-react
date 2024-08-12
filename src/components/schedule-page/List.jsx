import { Link } from "react-router-dom";
import { schedule } from "./Data";

function List({ selectedDay }) {
  return (
    <>
      {schedule.at(selectedDay).map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-between gap-2 bg-gray-50 p-6 text-center xl:flex-row xl:text-left"
        >
          <div className="xl:basis-36">
            <h3 className=" text-sm font-medium text-gray-200">Class Name</h3>
            <p className="text-lg font-semibold">{item.class}</p>
          </div>

          <div>
            <h3 className=" text-sm font-medium text-gray-200">Time</h3>
            <p className="text-lg font-semibold">{item.time}</p>
          </div>

          <div className="xl:basis-40">
            <h3 className=" text-sm font-medium text-gray-200">Trainer</h3>
            <p className="text-lg font-semibold">{item.trainer}</p>
          </div>

          <Link
            to="/contact"
            className="self-center rounded-full bg-gray-400 p-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red"
          >
            Join Now
          </Link>
        </div>
      ))}
    </>
  );
}

export default List;
