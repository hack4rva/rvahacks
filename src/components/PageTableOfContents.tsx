import { LucideIcon } from "lucide-react";

export interface TOCItem {
  id: string;
  label: string;
  icon?: LucideIcon;
}

interface PageTableOfContentsProps {
  items: TOCItem[];
  title?: string;
}

export const PageTableOfContents = ({ items, title = "On this page" }: PageTableOfContentsProps) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav 
      className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 md:p-6 mb-12 md:mb-16"
      aria-label="Page navigation"
    >
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2 md:gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-accent/50 hover:bg-accent/5 text-sm font-medium text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              {item.icon && <item.icon className="w-4 h-4 text-accent" />}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

