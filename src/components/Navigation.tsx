import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Shield, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Mission", href: "/#what" },
  { label: "Prizes", href: "/#prizes" },
  { label: "Schedule", href: "/#format" },
];

const otherItems = [
  { label: "Register", href: "/registration" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Resources", href: "/resources" },
  { label: "Action Plan", href: "/action-plan" },
  { label: "Logistics", href: "/logistics" },
  { label: "Preparation", href: "/preparation" },
  { label: "Code of Conduct", href: "/code-of-conduct" },
  { label: "FAQ", href: "/#faq" },
];

interface NavigationProps {
  onCTAClick: () => void;
}

export const Navigation = ({ onCTAClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { isAdmin } = useIsAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-smooth font-medium focus:outline-2 focus:outline-accent"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground/80 hover:text-primary transition-smooth font-medium focus:outline-2 focus:outline-accent flex items-center gap-1">
                Other <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border z-50">
                {otherItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a
                      href={item.href}
                      className="cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              onClick={onCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elegant"
              aria-label="Sign up to stay updated"
            >
              Stay Updated
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-2 focus:outline-accent">
                  <Avatar className="h-9 w-9 cursor-pointer hover:opacity-80 transition-opacity">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      {user.email?.[0]?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card border-border z-50">
                  <div className="px-2 py-1.5 text-sm text-muted-foreground">
                    {user.email}
                  </div>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem onClick={() => navigate("/admin")} className="cursor-pointer">
                        <Shield className="w-4 h-4 mr-2" />
                        Admin Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem 
                    onClick={async () => {
                      await supabase.auth.signOut();
                      navigate("/");
                    }}
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                variant="outline"
                aria-label="Login"
              >
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border" role="navigation" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground/80 hover:text-primary transition-smooth font-medium py-2 focus:outline-2 focus:outline-accent"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-border pt-4 space-y-2">
              <div className="text-sm font-semibold text-muted-foreground px-2 mb-2">Other</div>
              {otherItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground/80 hover:text-primary transition-smooth font-medium py-2 pl-4 focus:outline-2 focus:outline-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button
              onClick={() => {
                onCTAClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              aria-label="Sign up to stay updated"
            >
              Stay Updated
            </Button>

            {user ? (
              <div className="border-t border-border pt-4 space-y-2">
                <div className="text-sm text-muted-foreground px-2 mb-2">
                  {user.email}
                </div>
                {isAdmin && (
                  <a
                    href="/admin"
                    className="block text-foreground/80 hover:text-primary transition-smooth font-medium py-2 pl-4 focus:outline-2 focus:outline-accent flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Shield className="w-4 h-4" />
                    Admin Dashboard
                  </a>
                )}
                <button
                  onClick={async () => {
                    await supabase.auth.signOut();
                    navigate("/");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left text-destructive hover:text-destructive/80 transition-smooth font-medium py-2 pl-4 flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  navigate("/login");
                  setIsMobileMenuOpen(false);
                }}
                variant="outline"
                className="w-full"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
