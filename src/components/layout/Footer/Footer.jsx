import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">FoodieX</h2>
            <p className="text-background/70 text-sm">
              Order food from your favorite restaurants and get it delivered
              fast to your doorstep.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/" className="hover:text-background">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-background">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-background">
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-background">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/about" className="hover:text-background">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-background">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-background">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-background">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bangalore, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@foodiex.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© {new Date().getFullYear()} FoodieX. All rights reserved.</p>
          <p>Made with ❤️ for food lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
