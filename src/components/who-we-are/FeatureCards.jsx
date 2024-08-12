import progression from "../../images/who-we-are/progression.png";
import workout from "../../images/who-we-are/workout.png";
import nutritions from "../../images/who-we-are/nutritions.png";

const cardStyles =
  "relative z-10 flex flex-col items-center gap-4 overflow-hidden rounded-br-3xl rounded-tl-3xl bg-white bg-[url('./images/who-we-are/card-bg.webp')] bg-cover bg-center bg-no-repeat px-5 py-10 text-center shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:z-[-1] before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:bg-opacity-0";

function FeatureCards() {
  return (
    <div className="mt-[-50px] grid gap-14 2xl:grid-cols-3 2xl:gap-6">
      <div className={cardStyles}>
        <img src={progression} alt="progression" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase">Progression</h5>
        <p className="font-medium">
          Our team of experts will work with you to create a customized plan
          that helps you achieve success one step at a time.
        </p>
      </div>
      <div className={cardStyles}>
        <img src={workout} alt="workout" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase">Workout</h5>
        <p className="font-medium">
          With a variety of workouts to choose from, you&apos;ll have everything
          you need to get into the best shape of your life.
        </p>
      </div>
      <div className={cardStyles}>
        <img src={nutritions} alt="nutritions" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase">Nutritions</h5>
        <p className="font-medium">
          Our team will work with you to create a personalized meal plan that
          helps you reach your specific health goals.
        </p>
      </div>
    </div>
  );
}

export default FeatureCards;
