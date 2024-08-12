import Title from "./Title";
import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";
import Classes from "./Classes";
import Hours from "./Hours";

function Footer() {
  return (
    <footer className="px-6 py-32 shadow-2xl">
      <div className="container grid gap-12 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="space-y-10">
          <Title />

          <SocialLinks />

          <Copyright />
        </div>

        <Classes />

        <Hours />
      </div>
    </footer>
  );
}

export default Footer;
