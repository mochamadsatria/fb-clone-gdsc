import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BannerDemo() {
  return (
    <div className="flex justify-between bg-white py-4 px-20">
      <div className="flex gap-3">
        <Link href={"/home"}>Home</Link>
        <Link href={"/"}>Login or Register</Link>
      </div>
      <div>
        <a
          href="https://github.com/mochamadsatria/fb-clone-gdsc"
          className="flex gap-3 items-center"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>Source code on Github</span>
        </a>
      </div>
    </div>
  );
}
