import { useState } from "react";

// framer-motion
import { motion } from "framer-motion";

//icons
import { HiArrowDownCircle } from "react-icons/hi2";

//variants
import { fadeIn } from "../variants";

// ... (imports and useState)

const ResumeDownloadButton = () => {
  const [isDownloading, setDownloading] = useState(false);

  const handleDownloadClick = () => {
    setDownloading(true);

    setTimeout(() => {
      const resumeUrl = "/path-to-your-resume.pdf";
      const downloadLink = document.createElement("a");
      downloadLink.href = resumeUrl;
      downloadLink.download = "Durga_Sainath_Resume.pdf";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setDownloading(false);
    }, 500);
  };

  return (
    <div className="ml-4 xl:ml-8">
      <motion.button
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        onClick={handleDownloadClick}
        disabled={isDownloading}
        className="btn rounded-full border border-white/50 max-w-[170px] px-4 md:px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
      >
        <span
          className={`group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300 ${
            isDownloading ? "opacity-0" : ""
          }`}
        >
          {isDownloading ? "Downloading..." : "Resume"}
        </span>
        <HiArrowDownCircle
          className={`-translate-y-[120%] ${
            isDownloading ? "opacity-0" : "opacity-100"
          } group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[25px]`}
        />
      </motion.button>
    </div>
  );
};

export default ResumeDownloadButton;
