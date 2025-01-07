import Logo from "../assets/logo.webp";
import XSocial from "../assets/social-x.svg";
import InstaSocial from "../assets/social-instagram.svg";
import YTSocial from "../assets/social-youtube.svg";
import GitHubSocial from "../assets/icon-github-social.png";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center">
            <img
              src={Logo.src}
              alt="Logo"
              className="h-6 w-6 rounded-lg border border-white/15 shadow-[0_0_20px_rgba(147,197,253,0.5)] object-cover"
            />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a href="#" className="text-white/70 hover:text-white text-xs">
              Features
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs">
              Product
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs">
              Action
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs">
              Pricing
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <a
              href="https://x.com/ifeel_garv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XSocial className="text-white/40 hover:text-white text-xs md:text-sm transition" />
            </a>
            <a
              href="https://github.com/GSingh2432002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHubSocial.src}
                alt="GitHub"
                className="h-6 w-6 md:text-sm opacity-45 transition-opacity hover:opacity-100"
              />
            </a>
            <a
              href="https://www.instagram.com/ifeel_garv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaSocial className="text-white/40 hover:text-white text-xs md:text-sm transition" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YTSocial className="text-white/40 hover:text-white text-xs md:text-sm transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
