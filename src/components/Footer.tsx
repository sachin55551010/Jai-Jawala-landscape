import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[--base-color] text-[--main-text-color] pt-12 pb-6 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Landscape</h2>
          <p className="text-(--main-text-color) text-sm leading-relaxed">
            Crafting beautiful outdoor experiences with passion and precision.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-(--main-text-color)">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-[--secondary-text-color]">
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:scale-105 transition cursor-pointer text-(--main-text-color)"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-(--main-text-color)">
            Contact
          </h3>
          <ul className="text-(--secondary-text-color) text-md flex flex-col gap-2">
            <li>Email: contact@landscape.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Shimla, Himachal Pradesh, India</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-(--main-text-color)">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl text-[--secondary-text-color]">
            <a href="#" className="hover:text-[--main-text-color] transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[--main-text-color] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[--main-text-color] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[--main-text-color] transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[--secondary-text-color]/30 mt-10 pt-6 text-center text-sm text-[--secondary-text-color]">
        © {new Date().getFullYear()} Landscape. All rights reserved.
      </div>
    </footer>
  );
};
