import {
  HiOutlineBriefcase,
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { FiPhone, FiMail, FiUser, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import type { IconType } from "react-icons";


export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Cases", href: "#cases" },
  { label: "Blog", href: "#blog" },
];

export type SocialLink = {
  icon: IconType;
  href: string;
  label: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
];

export type Service = {
  title: string;
  description: string;
  icon: IconType;
};

export const SERVICES: Service[] = [
  { 
    title: "Business Law", 
    description: "Expert consultation for corporate structures and legal compliance advice.", 
    icon: HiOutlineBriefcase 
  },
  { 
    title: "Employment Law", 
    description: "Specialized review for employee contracts and workplace dispute resolution.", 
    icon: HiOutlineDocumentText 
  },
  { 
    title: "Medical Law", 
    description: "Mediation and arbitration services for healthcare-related legal matters.", 
    icon: HiOutlineShieldCheck 
  },
  { 
    title: "Real Estate Law", 
    description: "Comprehensive preparation and review of property deeds and sale documents.", 
    icon: HiOutlineHome 
  },
];


export const HERO_STATS = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1200, suffix: "+", label: "Cases Won" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 40, suffix: "+", label: "Expert Attorneys" },
];

export const CONTACT_INFO = [
  { icon: FiPhone, text: "+1 (23 45) 678 90 12", label: "Call Us" },
  { icon: FiMail, text: "contact@legalease.com", label: "Email" },
  { icon: FiUser, text: "9674 N. Newcastle Ave. Wasilla, AK 99654", label: "Visit" },
];


export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

export const ARTICLES = [
  { 
    title: "Difference between a law firm and a law office", 
    category: "Business", 
    date: "28 Jan, 2026" 
  },
  { 
    title: "Understanding medical liability in 2026", 
    category: "Medical", 
    date: "25 Jan, 2026" 
  },
  { 
    title: "Steps to securing your first commercial property", 
    category: "Real Estate", 
    date: "23 Jan, 2026" 
  },
];