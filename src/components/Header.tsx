import { useLocation } from "react-router-dom";
import { navLinks } from "../lib/nav-links";
import { useTheme } from "../providers/ThemeProvider";
import PillNav from "./PillNav";
import logo from "/profile.svg";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const location = useLocation();
  const { theme } = useTheme();

  const items = navLinks.map((link) => ({
    label: link.name,
    href: link.hash,
  }));

  const isDarkMode = theme === "dark";

  return (
    <div className="relative flex items-center justify-center w-full px-4 py-2">
      <PillNav
        
        logoAlt="A.K."
        items={items}
        activeHref={location.hash}
        baseColor={isDarkMode ? "#252c3a" : "#0e1a50ff"}
        pillColor={isDarkMode ? "#08091C" : "#fafafaff"}
        hoveredPillTextColor={isDarkMode ? "#eeb721ff" : "#e2bb0aff"}
        pillTextColor={isDarkMode ? "#d68221ff" : "#091050ff"}
      />
      <div className="absolute top-1/2 right-4 -translate-y-1/32 z-[1001] mgt-10">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
