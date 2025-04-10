import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Manishahir11" },
  { icon: <FaLinkedinIn />, path: "https://github.com/Manishahir11" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/mk_ambaliya_" },
  { icon: <FaTwitter />, path: "https://github.com/Manishahir11" },
];

const Social = ({containerStyle, iconStyle}) => {
  return (
    <div className={containerStyle}>
      {socials.map((items, index) => {
        return (
          <Link key={index} href={items.path} className={iconStyle}>
            {items.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
