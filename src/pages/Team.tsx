import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Us } from "@/components/Us";
import { OrganizationalRoles } from "@/components/OrganizationalRoles";
import { EmailSignup } from "@/components/EmailSignup";
import { Users, Building2 } from "lucide-react";

const sectionIds = ["team", "roles"];

const Team = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("team");

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  // Track active section for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = window.innerWidth >= 768 ? 80 : 64;
      const subNavHeight = 56;
      const totalOffset = navHeight + subNavHeight;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "instant"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      {/* Spacer for fixed nav */}
      <div className="pt-20 md:pt-24" />

      {/* Sticky Section Navigation */}
      <nav className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-2 scrollbar-hide justify-center">
            {[
              { id: "team", label: "People", icon: Users },
              { id: "roles", label: "Roles", icon: Building2 },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-smooth ${
                  activeSection === section.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Team Section */}
      <section id="team" className="min-h-[calc(100vh-136px)]">
        <Us />
      </section>

      {/* Roles Section */}
      <section id="roles" className="min-h-[calc(100vh-136px)]">
        <OrganizationalRoles />
      </section>

      <Footer />
      <BackToTop />
      <EmailSignup
        open={isEmailSignupOpen}
        onOpenChange={setIsEmailSignupOpen}
      />
    </div>
  );
};

export default Team;
