import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const footerColumns = [
  {
    heading: "Firm",
    links: ["Home", "Features", "Services", "Team", "Contact"],
  },
  {
    heading: "Services",
    links: ["Business Law", "Employment Law", "Medical Law", "Real Estate"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4 md:px-10">
        <div>
          <span className="font-serif text-3xl font-bold tracking-widest text-white">LAW</span>
          <p className="mt-4 text-sm text-white/70">
            The primary service is to advise clients about their legal rights and responsibilities.
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              {col.heading}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/85 hover:text-gold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4 md:justify-end">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
            Follow Us
          </h4>
          <div className="flex gap-3">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-ink">
              <FiFacebook size={16} />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-ink">
              <FiTwitter size={16} />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-ink">
              <FiInstagram size={16} />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-ink">
              <FiLinkedin size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 pt-6 text-xs text-white/50 md:flex-row md:px-10">
        <p>Copyright © {new Date().getFullYear()} Law Firm. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold">Terms of Use</a>
          <a href="#" className="hover:text-gold">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
