import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

function Share() {
  return (
    <div className="hidden rotate-[270deg] items-center justify-center gap-4 xl:flex">
      <div className="flex gap-4 text-white">
        <a
          href="https://www.linkedin.com/in/sharjeel-siddiqui-599870248/" 
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-red"
        >
          <FaLinkedin className="h-auto w-7 rotate-90" />
        </a>
        <a
          href="https://github.com/sharjeel-siddiqui12" 
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-red"
        >
          <FaSquareGithub className="h-auto w-7 rotate-90" />
        </a>
        <a
          href="https://www.instagram.com/sharjeel_.siddiqui._/" 
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-red"
        >
          <FaSquareInstagram className="h-auto w-7 rotate-90" />
        </a>
      </div>
      <div className="h-0.5 w-12 bg-red"></div>
      <p className="inline-block text-lg font-bold uppercase text-white">
        Share
      </p>
    </div>
  );
}

export default Share;
