import Banna from "../assets/Image/Banana.png";
import Strawberry from "../assets/Image/Strawberry.png";
import Kiwi from "../assets/Image/Kiwi.png";
import Bluberry from "../assets/Image/Bluberry.png";

// =========== icon image import
import bannaIcon from "../assets/Image/bananaIcon.png";
import StrawberryIcon from "../assets/Image/StrawberryIcon.png";
import KiwiIcon from "../assets/Image/KiwiIcon.png";
import bluberryIcon from "../assets/Image/BluberryIcon.png";
import { useState } from "react";

const Banner = () => {
  const [Rounded, setRounded] = useState("rotate-[-31deg]");
  const [Color, setColor] = useState({
    divbg: "bg-[#F5DE6E]",
    bgcolor: "bg-[#FFF7CF]",
  });

  return (
    <>
      <section
        className={`${Color.bgcolor} transition-all duration-[1s] relative h-screen pt-[180px]  overflow-hidden`}
      >
        <div className="container">
          <div className="banner_row flex  ">
            <div className="banner_text">
              <h1 className="text-[80px]  font-BricolageGrotesque font-medium w-[605px]  ">
                Sip Your Way to Bliss Taste
              </h1>
              <p className="font-ABeeZee font-normal text-[26px] w-[608px] pt-[31px] ">
                We're dedicated to bringing you deliciously fresh smoothies,
                made with love, care, and the finest ingredients.
              </p>
              <div className="flex mt-[20px] mb-5">
                <img
                  onClick={() => {
                    setRounded("rotate-[-31deg]");
                    setColor((prev) => ({
                      ...prev,
                      bgcolor: "bg-[#FFF7CF]",
                      divbg: "bg-[#F5DE6E]",
                    }));
                  }}
                  src={bannaIcon}
                  alt="bannaIcon"
                />
                <img
                  onClick={() => {
                    setRounded("rotate-[60deg]");
                    setColor((prev) => ({
                      ...prev,
                      bgcolor: "bg-[#FFE1E2]",
                      divbg: "bg-[#FCB1B4]",
                    }));
                  }}
                  src={StrawberryIcon}
                  alt="StrawberryIcon"
                />
                <img
                  onClick={() => {
                    setRounded("rotate-[150deg]");
                    setColor((prev) => ({
                      ...prev,
                      bgcolor: "bg-[#ECFFCC]",
                      divbg: "bg-[#8FB351]",
                    }));
                  }}
                  src={KiwiIcon}
                  alt="KiwiIcon"
                />
                <img
                  onClick={() => {
                    setRounded("rotate-[250deg]");
                    setColor((prev) => ({
                      ...prev,
                      bgcolor: "bg-[#FFCBEA]",
                      divbg: "bg-[#C976A7]",
                    }));
                  }}
                  src={bluberryIcon}
                  alt="bluberryIcon"
                />
              </div>
            </div>

            {/* ====================== Image Rotede part =====================*/}

            <div
              className={`banner_foods ${Rounded} ${Color.divbg} transition-all duration-[1s] right-[-300px] bottom-[-550px]  absolute w-[1000px] h-[1000px]  rounded-full `}
            >
              <div className="banna absolute w-[600px] top-[-290px] left-[198px] ">
                <img src={Banna} alt="banana" />
              </div>

              <div className="Strawberry absolute w-[600px] top-[280px] left-[-320px] ">
                <img src={Strawberry} alt="Strawberry" />
              </div>

              <div className="Kiwi absolute w-[550px] bottom-[-220px] left-[260px] ">
                <img src={Kiwi} alt="Kiwi" />
              </div>

              <div className="Bluberry absolute w-[400px] top-[190px] right-[-220px] ">
                <img src={Bluberry} alt="Bluberry" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
