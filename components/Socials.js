//links
import Link from "next/link";

//use state
import { useState } from "react";

//icons
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

import { MoonIcon, SunIcon } from "./Icons";

const Socials = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/durgasainathdora/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin size={22} />
      </Link>
      <Link
        href={"https://github.com/DurgaSainath189"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaGithub size={22} />
      </Link>
      <Link
        href={"https://www.facebook.com/durgasainath.dora"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaFacebook size={22} />
      </Link>
      <Link
        href={"https://twitter.com/dora_sainath"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaTwitter size={22} />
      </Link>
      <Link
        href="/contact"
        className="hover:text-accent transition-all duration-300"
      >
        <FaEnvelope size={22} />
      </Link>
      <button onClick={handleClick}>
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default Socials;
