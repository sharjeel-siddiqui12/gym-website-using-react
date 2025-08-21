import SecondaryHeading from "../../headings/SecondaryHeading";
import TertiaryHeading from "../../headings/TertiaryHeading";

function Title() {
  return (
    <div>
      <SecondaryHeading>Who we are</SecondaryHeading>
      <TertiaryHeading>We will give you strength and health</TertiaryHeading>
      <p className="font-medium text-gray-300">
        CoreFit is dedicated to helping you achieve your fitness goals in a friendly, motivating environment. Join us for expert guidance, modern facilities, and a supportive community.
      </p>
    </div>
  );
}

export default Title;
