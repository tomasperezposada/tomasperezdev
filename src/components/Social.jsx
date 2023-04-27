import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGitSquare,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaTwitter />, link: "https://twitter.com/tppshaka77" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/tppshaka77" },
  { Social: <FaGitSquare />, link: "https://www.github.com/tomasperezposada" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;