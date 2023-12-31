//links
import Link from "next/link";

//icons
import { FaLinkedin, FaGithub, FaFacebook,FaTwitter,FaMailBulk } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaLinkedin size={22} />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaGithub size={22} />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaFacebook size={22} />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaTwitter size={22} />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaMailBulk size={22} />
      </Link>

    </div>
  );
};

export default Socials;
