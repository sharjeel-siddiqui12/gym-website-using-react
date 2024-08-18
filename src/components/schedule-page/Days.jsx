const openDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function Days({ selectedDay, setSelectedDay }) {
  return (
    <div className="mb-14 flex flex-wrap gap-2 xl:gap-5">
      {openDays.map((day, i) => (
        <button
          key={i}
          className={`rounded-full border px-4 py-2 font-semibold transition-all duration-300 hover:border-red hover:bg-red hover:text-white hover:shadow-xl xl:px-6 ${
            selectedDay === i
              ? "border-red bg-red text-white" 
              : "border-gray-150"
          }`}
          onClick={() => setSelectedDay(i)}
        >
          
          {day}
        </button>
      ))}
    </div>
  );
}

export default Days;
