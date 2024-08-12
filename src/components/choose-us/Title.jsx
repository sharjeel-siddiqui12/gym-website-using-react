import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <div className="mb-10">
      <SecondaryHeading>Why choose us</SecondaryHeading>
      <TertiaryHeading color="white">
        W can give a shape of your body here!
      </TertiaryHeading>
      <p className="font-medium text-gray-200">
        At <b>Gymate</b>, we are dedicated to helping you achieve the body of
        your dreams. Our expert trainers and nutritionists will work with you to
        create a personalized fitness and nutrition plan that helps you reach
        your specific goals.
      </p>
    </div>
  );
}

export default Title;
