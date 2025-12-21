import { useState, useEffect } from "react";
import { Menu, X, Shield, LogOut } from "lucide-react";
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
import { useNavigate, Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Participate", href: "/participate" },
  { label: "Partner", href: "/partners" },
];

interface NavigationProps {
  onCTAClick: () => void;
}

export const Navigation = ({ onCTAClick }: NavigationProps) => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-smooth bg-primary/95 backdrop-blur-md shadow-elegant"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <Link to="/" className="font-bold text-lg transition-smooth text-white hover:text-white/80">
            Hack for RVA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={scrollToTop}
                className="font-medium transition-smooth focus:outline-2 focus:outline-accent text-white/90 hover:text-white"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Primary CTA */}
            <Button
              onClick={onCTAClick}
              className="border-white/30 bg-white/10 hover:bg-white/20 text-white"
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
              <button
                onClick={() => navigate("/login")}
                className="p-1.5 transition-colors text-white/40 hover:text-white/70"
                aria-label="Admin login"
              >
                <Shield className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
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
              <Link
                key={item.label}
                to={item.href}
                className="block text-foreground/80 hover:text-primary transition-smooth font-medium py-2 focus:outline-2 focus:outline-accent"
                onClick={() => {
                  scrollToTop();
                  setIsMobileMenuOpen(false);
                }}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-border space-y-3">
              <Button
                onClick={() => {
                  onCTAClick();
                  setIsMobileMenuOpen(false);
                }}
                variant="outline"
                className="w-full"
                aria-label="Sign up to stay updated"
              >
                Stay Updated
              </Button>
            </div>

            {user ? (
              <div className="border-t border-border pt-4 space-y-2">
                <div className="text-sm text-muted-foreground px-2 mb-2">
                  {user.email}
                </div>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="block text-foreground/80 hover:text-primary transition-smooth font-medium py-2 pl-4 focus:outline-2 focus:outline-accent flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Shield className="w-4 h-4" />
                    Admin Dashboard
                  </Link>
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
              <button
                onClick={() => {
                  navigate("/login");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors py-2"
                aria-label="Admin login"
              >
                <Shield className="w-4 h-4" />
                <span className="text-sm">Admin</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
