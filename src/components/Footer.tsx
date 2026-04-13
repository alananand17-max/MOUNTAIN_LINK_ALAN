import { Link } from "react-router-dom";
import { Truck } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Truck className="h-6 w-6 text-secondary" />
            <span className="text-lg font-bold">
              Mountain<span className="text-secondary">Link</span>
            </span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Same-day relay freight across the Calgary–Vancouver corridor. Every driver home nightly.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/for-shippers" className="hover:text-secondary transition-colors">For Shippers</Link></li>
            <li><Link to="/for-operators" className="hover:text-secondary transition-colors">For Owner-Operators</Link></li>
            <li><Link to="/demo" className="hover:text-secondary transition-colors">Live Demo</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>info@mountainlink.ca</li>
            <li>Calgary, AB, Canada</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} MountainLink Logistics. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
