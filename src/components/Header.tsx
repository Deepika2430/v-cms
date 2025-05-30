import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Menu,
  X,
  Phone,
  Clock,
  ChevronDown,
  Instagram,
  Facebook,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header = ({ onNavigate, currentPage }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b sticky">
      {/* Top Info Bar */}
      <div className="hidden md:flex items-center pt-12 pb-6 mx-[101.500px] space-x-14">
        <div className="flex items-center space-x-8">
          {/* First Logo */}
          <img
            src="https://vismayee.com/wp-content/uploads/2023/11/Edutek-Logo.png"
            alt="Edutek Logo"
            className="w-370px h-103px"
          />
          {/* Second Logo */}
          <img
            src="https://vismayee.com/wp-content/uploads/2023/11/Asset-14.svg"
            alt="Second Logo"
            className="h-48px w-[163px] object-contain"
          />
        </div>

        <div className="flex space-x-12 text-sm pl-16">
          <div className="flex flex-col">
            <div className="flex items-center ">
              <Phone size={16} className="text-orange-500 mr-1" />
              <span className="font-semibold">Call / WhatsApp</span>
            </div>
            <span className=" ml-5">+91 63030 20761</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Clock size={16} className="text-orange-500 mr-1" />
              <span className="font-semibold">Working Hours</span>
            </div>
            <span className=" ml-5">Mon - Sun: 9 AM - 9 PM</span>
          </div>
        </div>
      </div>

      {/* Orange Line */}
      <div className=" mx-[101.500px] h-0.5 bg-orange-500" />

      {/* Main Navigation */}
      <div className="container mx-[101.500px] w-[90%] pt-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4 ">
          <NavItem
            label="Home"
            active={currentPage === "home"}
            onClick={() => handleNavigate("home")}
          />
          <NavItem
            label="About"
            active={currentPage === "about"}
            onClick={() => handleNavigate("about")}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "px-3 py-2 rounded-md text-[21px] font-medium font-questrial flex items-center transition-colors focus:outline-none focus:ring-0",
                  currentPage === "offerings"
                    ? "text-orange-500 underline font-bold"
                    : "text-[#761587] hover:text-orange-500 hover:underline"
                )}
              >
                Offerings <ChevronDown size={16} className="ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleNavigate("offerings")}>
                All Offerings
              </DropdownMenuItem>
              <DropdownMenuItem>Robotics</DropdownMenuItem>
              <DropdownMenuItem>Coding</DropdownMenuItem>
              <DropdownMenuItem>Science Experiments</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavItem
            label="Gallery"
            active={currentPage === "gallery"}
            onClick={() => handleNavigate("gallery")}
          />
          <NavItem
            label="Contact"
            active={currentPage === "contact"}
            onClick={() => handleNavigate("contact")}
          />
          <NavItem
            label="Embedded Systems Development"
            active={currentPage === "embedded"}
            onClick={() => handleNavigate("embedded")}
          />

          <div className="ml-4 flex items-center space-x-5 pl-20">
            <a
              href="https://www.instagram.com/sreevismayeeedutek/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-purple-600"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/SreeVismayeeEdutek/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-blue-600"
            >
              <Facebook size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6 px-4">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 text-green-600" />
                    <div className="ml-2 font-bold text-lg text-green-600">
                      EDUTEK
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4 px-4">
                  <MobileNavItem
                    label="Home"
                    onClick={() => handleNavigate("home")}
                  />
                  <MobileNavItem
                    label="About"
                    onClick={() => handleNavigate("about")}
                  />
                  <MobileNavItem
                    label="Offerings"
                    onClick={() => handleNavigate("offerings")}
                  />
                  <MobileNavItem
                    label="Gallery"
                    onClick={() => handleNavigate("gallery")}
                  />
                  <MobileNavItem
                    label="Contact"
                    onClick={() => handleNavigate("contact")}
                  />
                  <MobileNavItem
                    label="Embedded Systems"
                    onClick={() => handleNavigate("embedded")}
                  />
                </nav>
                <div className="mt-auto pb-4 px-4">
                  <div className="text-sm space-y-2">
                    <div className="flex items-center">
                      <Phone size={16} className="text-orange-500 mr-2" />
                      <span>+91 63030 20761</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="text-orange-500 mr-2" />
                      <span>Mon - Sun: 9 AM - 9 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-4 bg-blue-500 ">
                    <a
                      href="https://www.instagram.com/sreevismayeeedutek/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-purple-600 border-2 border-blue-500 rounded-full p-2"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/SreeVismayeeEdutek/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-blue-600"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem = ({ label, active, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-2 rounded-md text-[21px] font-medium font-questrial focus:outline-none focus:ring-0",
        active
          ? "text-orange-500 underline font-bold"
          : "text-[#761587] hover:text-orange-500 hover:underline"
      )}
    >
      {label}
    </button>
  );
};

const MobileNavItem = ({ label, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className="py-2 text-left text-lg font-medium border-b border-border"
    >
      {label}
    </button>
  );
};

export default Header;
