import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';

const socialLinks = [
  { path: '', icon: <AiFillYoutube /> },
  { path: '', icon: <AiFillGithub /> },
  { path: '', icon: <AiOutlineInstagram /> },
  { path: '', icon: <RiLinkedinFill /> },
];

const quickLinks01 = [
  { path: '/home', display: 'Home' },
  { path: '/', display: 'About Us' },
  { path: '/services', display: 'Services' },
  { path: '/', display: 'Blog' },
];

const quickLinks02 = [
  { path: '/find-a-doctor', display: 'Find a Doctor' },
  { path: '/', display: 'Request an Appointment' },
  { path: '/', display: 'Find a Location' },
  { path: '/', display: 'Get a Opinion' },
];

const quickLinks03 = [
  { path: '/', display: 'Donate' },
  { path: '/contact', display: 'Contact Us' },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white text-black py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Logo" className="w-36 mb-4" />
            <p className="text-[15px] font-medium text-black leading-relaxed">
              © {year} developed by <strong>Muhibur Rahaman</strong>.<br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-black text-[22px] hover:text-blue-600 transition-colors duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[18px] font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-[15px] font-medium">
              {quickLinks01.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[18px] font-bold mb-5">Services</h3>
            <ul className="space-y-3 text-[15px] font-medium">
              {quickLinks02.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[18px] font-bold mb-5">Support</h3>
            <ul className="space-y-3 text-[15px] font-medium">
              {quickLinks03.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-[14px] text-gray-600">
          &copy; {year} <strong>Muhibur Rahaman</strong> — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
