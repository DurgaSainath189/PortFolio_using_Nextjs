//next image
import Image from "next/image";

const NewAvatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/developer-pic-2.png"}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default NewAvatar;
