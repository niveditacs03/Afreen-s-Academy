import React from "react";
import Footer from "../assets/images/footer.png";
import Logo from "../assets/images/logo.png";
import Phone from "../assets/icons/phone.png";
import Mail from "../assets/icons/mail.png";
import BlueMail from "../assets/icons/blueMail.png";
import smallArrowIcon from "../assets/icons/smallArrow.png";
import forwardArrowIcon from "../assets/icons/forwardArrow.png";
import InstagramLogo from "../assets/icons/insta.png";
import FacebookLogo from "../assets/icons/facebook.png";
import WhatsAppLogo from "../assets/icons/whatsApp.png";

const FooterBar = () => {
  return (
    <div className="mt-50 relative">
      {/* The image container */}
      <div className="relative">
        <img src={Footer} alt="footer" className="w-full" />

        {/* Text overlay positioned absolutely within the relative container */}
        <div className="absolute inset-0 flex items-center justify-center w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-row justify-between text-white">
              {/* Column 1 */}
              <div className="w-2/5 px-4 mt-10">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[200px] h-[90px] ml-20"
                />
                <ul className="space-y-2 ml-20">
                  <li>Dr. Afreen's Prometric LLC Licensed And Registered</li>
                  <li>Company In USA, License No. 2431166.01</li>
                  <li>
                    <div className="flex flex-row">
                      <img
                        src={Phone}
                        alt="phone"
                        className="w-[55px] h-[55px] mr-2"
                      />
                      <p className="mt-4"> Call Now +971545578680 (UAE)</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-[#202c34] p-2 flex items-center justify-center ml-1">
                        <img
                          src={Mail}
                          alt="mail"
                          className="w-[30px] h-[30px]"
                        />
                      </div>
                      <span>enquiries@drafreensacademy.com</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="w-1/5 px-4">
                <h3 className="text-xl font-bold mb-4 mt-20">About us</h3>
                <div className="h-0.5 bg-gray-400 w-[80px] mt-2 rounded-full"></div> 
                <ul className="space-y-2 mt-4">
                  <li>
                    <div className="flex flex-row items-center">
                        <img src={smallArrowIcon} alt="arrow" className="w-[10px] h-[10px] mr-2" />
                        <p>Home</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center">
                        <img src={smallArrowIcon} alt="arrow" className="w-[10px] h-[10px] mr-2" />
                        <p>Courses</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center">
                        <img src={smallArrowIcon} alt="arrow" className="w-[10px] h-[10px] mr-2" />
                        <p>Contact Us</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center">
                        <img src={smallArrowIcon} alt="arrow" className="w-[10px] h-[10px] mr-2" />
                        <p>Demo</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="w-1/5 px-4">
                <h3 className="text-xl font-bold mb-4 mt-20">Support</h3>
                <div className="h-0.5 bg-gray-400 w-[80px] mt-2 rounded-full"></div> 
                <ul className="space-y-2 mt-4">
                <li>
                    <div className="flex flex-row items-center">
                        <img src={smallArrowIcon} alt="arrow" className="w-[10px] h-[10px] mr-2" />
                        <p>Privacy Policy</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center">
                        <img src={smallArrowIcon} alt="arrow" className="w-[10px] h-[10px] mr-2" />
                        <p>Pricing</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center">
                        <img src={smallArrowIcon} alt="arrow" className="w-[10px] h-[10px] mr-2" />
                        <p>Terms & Conditions</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center">
                        <img src={smallArrowIcon} alt="arrow" className="w-[10px] h-[10px] mr-2" />
                        <p>Contact Us</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center">
                        <img src={smallArrowIcon} alt="arrow" className="w-[10px] h-[10px] mr-2" />
                        <p>FAQs</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
      
              <div className="w-1/5 px-4">
                <h3 className="text-xl font-bold mb-4 mt-20">Get in touch</h3>
                <div className="h-0.5 bg-gray-400 w-[80px] mt-2 rounded-full"></div> 
                <ul className="space-y-2 mt-4 w-auto">
                  <li>
                    <div className="bg-transparent flex flex-row items-center border-[#AEF0FF] rounded-full border-2 px-2 py-1 text-blue-200 hover:text-white h-10 mt-10 w-auto">
                      <img src={BlueMail} alt="mail" className="w-[25px] h-[20px] mr-3" />
                      <p className="text-[#AEF0FF] w-auto">Your Email</p>
                      <button className="bg-[#AEF0FF] w-[31px] h-[31px] rounded-full ml-26 cursor-pointer">
                        <img src={forwardArrowIcon} alt="arrow" className="w-[20px] h-[15px] pl-3" />
                      </button>
                    </div>
                    <div className="flex flex-row items-center mt-6">
                        <img src={InstagramLogo} alt="mail" className="w-[45px] h-[45px] mr-3 cursor-pointer" />
                        <img src={FacebookLogo} alt="mail" className="w-[45px] h-[45px] mr-3 cursor-pointer" />
                        <img src={WhatsAppLogo} alt="whatAppLogo" className="w-[50px] h-[50px] cursor-pointer" />
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
            <p className="text-gray-400 bg-[#08141c] flex justify-center items-center">
              <br />
              © Dr. Afreen's Academy. All Rights Reserved | Developed by Baldaniya Technologies.
              </p>
      </div>
    </div>
  );
};

export default FooterBar;
