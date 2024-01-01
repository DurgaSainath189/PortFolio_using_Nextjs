//links
import Link from "next/link";

//icons
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

import {HiEnvelope} from 'react-icons/hi2'

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
        <HiEnvelope size={22} />
      </Link>
    </div>
  );
};

export default Socials;
