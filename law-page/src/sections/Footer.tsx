//import {Footer } from "../sections/Footer";

import { FiFacebook } from "react-icons/fi";

const footer=[
  {
    heading: 'firm',
    Link: ['Home', 'Features', 'Services', 'Team', 'Contact'],
  }
]
export function Footer() {
  return (
    <footer className="bg-ink py-16 text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4 md:px-10">
        <div>
          <span className="font-serif text-3xl font-bold tracking-widest">LAW</span>
        </div>
        {footer.map((col) => (
  <div key={col.heading}>
    <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-cream/60">
      {col.heading}
    </h4>

    <ul className="space-y-3">
      {col.Link.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-sm text-cream/85 hover:text-gold"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
))}
        <div className="flex items-start gap-3 md:justify-end">
          {footer.map((Icon, i) => (
            <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-ink">
              <FiFacebook size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-cream/10 px-6 pt-6 text-xs text-cream/50 md:flex-row md:px-10">
        <p>Copyright © {new Date().getFullYear()} Lawyip. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold">Terms of Use</a>
          <a href="#" className="hover:text-gold">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
