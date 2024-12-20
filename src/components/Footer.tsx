import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="space-x-4">
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms of Use
            </Link>
            <Link
              href="/conditions"
              className="text-gray-600 hover:text-gray-900"
            >
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="https://www.instagram.com/myexpressdriver"
              className="text-gray-600 hover:text-gray-900"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://fr.linkedin.com/company/myexpressdriver"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          This is not a real website, rather a demo to go to the real website
          follow this{" "}
          <Link
            className="text-link underline"
            href={"https://myexpressdriver.com/"}
          >
            link
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
