import SocialLinks from "../footer/SocialLinks";

const headingStyles = `relative mb-4 mt-6 pb-2 text-xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red`;

function Info() {
  return (
    <div>
      <h3 className="mb-4 text-3xl font-bold">
        We are here for help you To Shape Your Body
      </h3>
      <p className="font-medium text-gray-300">
       At CoreFit, your journey matters. We’re committed to guiding, motivating, and supporting you every step of the way. Let’s unlock your potential and achieve your best together!
      </p>
      <div className="grid 2xl:grid-cols-2 2xl:gap-y-8">
        <div>
          <h4 className={headingStyles}>Chinhut, Lucknow</h4>
          <address className="font-medium not-italic text-gray-300">
            Faizabad Road, Chinhut, <br />
            Lucknow, Uttar Pradesh, 226028
            
          </address>
        </div>
        <div>
          <h4 className={headingStyles}>Opening Hours</h4>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Mon to Fri: 9:00 am — 10:00 pm
          </p>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Sat: 10:30 pm — 12:00 am
          </p>
        </div>
        <div>
          <h4 className={headingStyles}>Information</h4>
          <a
            href="tel:+98-21-225-429-71"
            className="block font-medium text-gray-300"
          >
            +91 8303584456
          </a>
          <a
            href="sharjeelsiddiqui00@gmail.com"
            className="block font-medium text-gray-300"
          >
            sankalpjaiswal264@gmail.com
          </a>
        </div>
        <div>
          <h4 className={headingStyles}>Follow Us On</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Info;
