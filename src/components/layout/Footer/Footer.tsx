import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold">FoodieX</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Experience the best food delivery service. carefully curated menus,
              premium ingredients, and lightning-fast delivery to your doorstep.
            </p>

            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3 text-white">Subscribe to our newsletter</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-neutral-800 border-none rounded-lg px-4 py-2.5 text-sm w-full focus:ring-2 focus:ring-orange-500 text-white placeholder:text-neutral-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Discovery</h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li>
                <Link to="/search" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                  Offers & Deals
                </Link>
              </li>
              <li>
                <Link to="/trending" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                  Trending Now
                </Link>
              </li>
              <li>
                <Link to="/cuisines" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                  Cuisines
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-orange-500 transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="hover:text-orange-500 transition-colors">Partner with us</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-6 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>123 Foodie Street, Koramangala<br />Bangalore, India 560034</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>+91 80000 90000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>support@foodiex.com</span>
              </li>

              <div className="flex items-center gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {new Date().getFullYear()} FoodieX. All rights reserved.</p>
            <p className="text-xs">Developed by <span className="text-white">Adarsh Raj</span></p>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              System Operational
            </span>
            <p>Made with ❤️ in Bangalore</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
