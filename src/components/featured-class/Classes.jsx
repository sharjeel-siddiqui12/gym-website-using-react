const cardStyles = `relative h-72 w-full cursor-pointer overflow-hidden after:absolute after:left-[-25px] after:top-20 after:z-10 after:h-16 after:w-28 after:rotate-[30deg] after:rounded-r-full after:bg-white/30 after:bg-[length:40px] after:bg-[70%] after:bg-no-repeat after:transition-all hover:after:bg-white group`;

const bgStyles = `h-full w-full 
bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-150 group-hover:grayscale-0`;

function Classes() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-5 text-left 3xl:grid-cols-4">
      {/* Cycling */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/cycling-white.png')] hover:after:bg-[url('./images/featured-class/cycling-red.png')] 3xl:col-span-2`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/cycling.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl font-bold">Cycling</h4>
          <p className="bg-red px-3 py-0.5">Wednesday: 9:00am-10:00am</p>
        </div>
      </div>

      {/* Karate */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/karate-white.png')] hover:after:bg-[url('./images/featured-class/karate-red.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/karate.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl font-bold">Karate</h4>
          <p className="whitespace-nowrap bg-red px-3 py-0.5">
            Friday: 10:00am-11:00am
          </p>
        </div>
      </div>

      {/* Power */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/power-white.png')] hover:after:bg-[url('./images/featured-class/power-red.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/power.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl font-bold">Power</h4>
          <p className="whitespace-nowrap bg-red px-3 py-0.5">
            Saturday: 9:00am-10:00am
          </p>
        </div>
      </div>

      {/* Meditation */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/meditation-white.png')] hover:after:bg-[url('./images/featured-class/meditation-red.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/meditation.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl font-bold">Meditation</h4>
          <p className="whitespace-nowrap bg-red px-3 py-0.5">
            Friday: 1:00pm-2:00pm
          </p>
        </div>
      </div>

      {/* Martial Arts */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/martial-arts-white.png')] hover:after:bg-[url('./images/featured-class/martial-arts-red.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/martial-arts.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl font-bold">Martial Arts</h4>
          <p className="whitespace-nowrap bg-red px-3 py-0.5">
            Sunday: 6:00pm-7:00pm
          </p>
        </div>
      </div>

      {/* Workout */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/workout-white.png')] hover:after:bg-[url('./images/featured-class/workout-red.png')] 3xl:col-span-2`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/workout.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl font-bold">Workout</h4>
          <p className="bg-red px-3 py-0.5">Monday: 4:00pm-5:00pm</p>
        </div>
      </div>
    </div>
  );
}

export default Classes;
