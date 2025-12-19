/**
 * Pillar Dependency Diagram
 * Visual representation of interconnections between pillars
 */

import { Card, CardContent } from "@/components/ui/card";

interface PillarDependencyDiagramProps {
  onPillarClick: (pillarId: string) => void;
}

const pillars = [
  { num: 1, name: "City Hall", color: "bg-blue-500", x: 50, y: 20 },
  { num: 2, name: "Safety", color: "bg-red-500", x: 20, y: 50 },
  { num: 3, name: "Opportunity", color: "bg-purple-500", x: 80, y: 50 },
  { num: 4, name: "Economy", color: "bg-emerald-500", x: 35, y: 80 },
  { num: 5, name: "Environment", color: "bg-green-500", x: 65, y: 80 },
  { num: 6, name: "Reconciliation", color: "bg-amber-500", x: 10, y: 80 },
  { num: 7, name: "Regional", color: "bg-cyan-500", x: 90, y: 80 },
];

export const PillarDependencyDiagram = ({ onPillarClick }: PillarDependencyDiagramProps) => {
  return (
    <Card className="bg-muted/30 mt-4">
      <CardContent className="p-6">
        <h4 className="text-sm font-semibold text-muted-foreground mb-4 text-center">
          Pillar Interconnections
        </h4>
        
        {/* Simple visual representation */}
        <div className="relative h-48 md:h-64">
          {/* Central Pillar 1 */}
          <button
            onClick={() => onPillarClick("pillar-1")}
            className="absolute left-1/2 top-4 -translate-x-1/2 flex flex-col items-center group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              1
            </div>
            <span className="text-xs mt-1 text-muted-foreground group-hover:text-foreground transition-colors">City Hall</span>
          </button>

          {/* Connection lines from Pillar 1 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Lines from center to other pillars */}
            <line x1="50%" y1="25%" x2="25%" y2="55%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4" />
            <line x1="50%" y1="25%" x2="75%" y2="55%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4" />
            <line x1="50%" y1="25%" x2="35%" y2="85%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4" />
            <line x1="50%" y1="25%" x2="65%" y2="85%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4" />
            
            {/* Cross connections */}
            <line x1="25%" y1="55%" x2="35%" y2="85%" stroke="currentColor" strokeWidth="1" className="text-border/50" strokeDasharray="2" />
            <line x1="75%" y1="55%" x2="65%" y2="85%" stroke="currentColor" strokeWidth="1" className="text-border/50" strokeDasharray="2" />
          </svg>

          {/* Second row - Pillars 2 & 3 */}
          <button
            onClick={() => onPillarClick("pillar-2")}
            className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
              2
            </div>
            <span className="text-xs mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Safety</span>
          </button>

          <button
            onClick={() => onPillarClick("pillar-3")}
            className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
              3
            </div>
            <span className="text-xs mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Opportunity</span>
          </button>

          {/* Bottom row - Pillars 4, 5, 6, 7 */}
          <button
            onClick={() => onPillarClick("pillar-6")}
            className="absolute left-[10%] bottom-4 flex flex-col items-center group"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
              6
            </div>
            <span className="text-[10px] md:text-xs mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Reconciliation</span>
          </button>

          <button
            onClick={() => onPillarClick("pillar-4")}
            className="absolute left-[35%] bottom-4 -translate-x-1/2 flex flex-col items-center group"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
              4
            </div>
            <span className="text-[10px] md:text-xs mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Economy</span>
          </button>

          <button
            onClick={() => onPillarClick("pillar-5")}
            className="absolute right-[35%] bottom-4 translate-x-1/2 flex flex-col items-center group"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
              5
            </div>
            <span className="text-[10px] md:text-xs mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Environment</span>
          </button>

          <button
            onClick={() => onPillarClick("pillar-7")}
            className="absolute right-[10%] bottom-4 flex flex-col items-center group"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
              7
            </div>
            <span className="text-[10px] md:text-xs mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Regional</span>
          </button>
        </div>
        
        <p className="text-xs text-center text-muted-foreground mt-4">
          Click any pillar to explore its details. Dashed lines indicate key dependencies.
        </p>
      </CardContent>
    </Card>
  );
};
