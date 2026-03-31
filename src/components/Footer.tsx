import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";
export const Footer = () => {
  return (
    <footer className="bg-[--base-color] text-[--main-text-color] pt-12 pb-6 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-(--secondary-text-color)">
            Jai Jawala Nursery & Landscaping
          </h2>
          <p className="text-(--secondary-text-color) text-sm leading-relaxed">
            Crafting beautiful outdoor experiences with passion and precision.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-(--secondary-text-color)">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {["Home", "Services", "Projects", "Contact"].map((item) => (
              <motion.li
                whileHover={{ scale: 1.2 }}
                key={item}
                className="cursor-pointer text-(--secondary-text-color)"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-(--secondary-text-color)">
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
              <IoLogoWhatsapp />
            </a>
            <a href="#" className="hover:text-[--main-text-color] transition">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[--secondary-text-color]/30 mt-10 pt-6 text-center text-sm text-[--secondary-text-color]">
        © {new Date().getFullYear()} Jai Jawala Nursery & Landscaping. All
        rights reserved.
      </div>
    </footer>
  );
};
