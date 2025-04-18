import Link from "next/link";
import { socialImgs } from "../secondary/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <div className="flex flex-col justify-center">
          {/* <p>Terms & Conditions</p> */}
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <Link href={socialImg.link} target="_blank">
                <img src={socialImg.imgPath} alt="social icon" />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center mt-8">
          <p className="text-center md:text-end">
            Developed by{" "}
            <Link href={"https://www.carlos-ehr.com/"}>
              <span className="text-sky-500">carlos-ehr</span>
            </Link>{" "}
            © {new Date().getFullYear()} .
            <br />
            {/* All rights reserved. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
