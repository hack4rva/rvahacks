import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { GraduationCap, AlertTriangle, School, Building2, CheckCircle2, Clock, ChevronDown } from "lucide-react";
import { 
  k12Districts, 
  specialtySchools, 
  universities, 
  criticalDeadlines, 
  complianceChecklist, 
  diplomaSeals, 
  academiaStats 
} from "@/data/academiaPartners";

export const AcademiaTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          K-12 & Higher Ed Partners
        </CardTitle>
        <CardDescription>
          Educational partnerships, contacts, and critical deadlines for student recruitment
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Critical Deadlines Alert */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Critical Deadlines
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {criticalDeadlines.filter(d => d.priority === 'critical' || d.priority === 'high').map((deadline) => {
              const daysUntil = Math.ceil((new Date(deadline.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
              const isUrgent = daysUntil <= 30;
              const isPast = daysUntil < 0;
              return (
                <div 
                  key={deadline.id} 
                  className={`border rounded-lg p-4 ${
                    isPast ? 'border-red-500 bg-red-50 dark:bg-red-950/20' :
                    isUrgent ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/20' :
                    'border-border bg-card'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      deadline.priority === 'critical' ? 'bg-red-100 text-red-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {deadline.priority.toUpperCase()}
                    </span>
                    <span className={`text-xs font-bold ${
                      isPast ? 'text-red-600' :
                      isUrgent ? 'text-orange-600' :
                      'text-muted-foreground'
                    }`}>
                      {isPast ? `${Math.abs(daysUntil)} days overdue` : `${daysUntil} days`}
                    </span>
                  </div>
                  <p className="font-medium text-sm text-foreground">{deadline.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Due: {new Date(deadline.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">{deadline.notes}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Owner:</span>
                    <span className={`text-xs ${deadline.owner === 'TBD' ? 'text-orange-500 italic' : 'text-accent font-medium'}`}>
                      {deadline.owner}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* K-12 Districts */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <School className="w-5 h-5" />
            K-12 School Districts
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Primary contacts for CTE departments. Mac Beaton (HCPS) support "essentially guarantees ACE center participation."
          </p>
          <div className="space-y-4">
            {k12Districts.map((district) => (
              <Collapsible key={district.abbreviation} className="border border-border rounded-lg">
                <CollapsibleTrigger className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full p-3 sm:p-4 hover:bg-muted/50 transition-colors gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-base sm:text-lg font-bold text-accent flex-shrink-0">{district.abbreviation}</span>
                    <div className="text-left min-w-0">
                      <h5 className="font-semibold text-foreground text-sm sm:text-base">{district.name}</h5>
                      <p className="text-xs text-muted-foreground truncate">{district.cteLeader.name} • {district.cteLeader.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 ml-10 sm:ml-0">
                    <span className={`text-xs px-2 py-1 rounded ${
                      district.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      district.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                      district.status === 'meeting-scheduled' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {district.status.replace('-', ' ')}
                    </span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Strategic Alignment</p>
                      <p className="text-xs text-muted-foreground">{district.strategicAlignment}</p>
                      <p className="text-sm font-medium text-foreground mt-3 mb-1">Value Prop</p>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{district.valueProp}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Key Schools</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {district.keySchools.map((school, idx) => (
                          <li key={idx}>• {school}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {district.specialists && district.specialists.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm font-medium text-foreground mb-2">CTE Specialists</p>
                      <div className="flex flex-wrap gap-2">
                        {district.specialists.map((spec, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                            {spec.name} ({spec.focus})
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Spring Break:</span>
                      <p className="font-medium">{district.springBreakStart}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Field Trip Lead Time:</span>
                      <p className="font-medium">{district.fieldTripLeadTime}</p>
                    </div>
                    {district.busDeadline && (
                      <div>
                        <span className="text-muted-foreground">Bus Deadline:</span>
                        <p className="font-medium text-red-600">{district.busDeadline}</p>
                      </div>
                    )}
                  </div>
                  {district.notes && (
                    <div className="mt-3 p-2 bg-muted/30 rounded text-xs text-muted-foreground italic">
                      {district.notes}
                    </div>
                  )}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Specialty Schools */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">🎯</span>
            Specialty Schools (Highest Priority)
          </h4>
          
          {/* Mobile Card View */}
          <div className="block sm:hidden space-y-3">
            {specialtySchools.map((school) => (
              <div key={school.name} className="border border-border rounded-lg p-3 bg-card">
                <div className="flex items-start justify-between mb-2">
                  <span className="font-medium text-sm">{school.name}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    school.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    school.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {school.status.replace('-', ' ')}
                  </span>
                </div>
                {school.highlight && (
                  <p className="text-xs text-green-600 font-medium mb-1">{school.highlight}</p>
                )}
                <p className="text-xs text-muted-foreground mb-2">{school.alignment}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs bg-muted px-2 py-1 rounded capitalize">{school.type.replace('-', ' ')}</span>
                  <span className={`text-xs px-2 py-1 rounded font-medium ${
                    school.compatibility === 'high' ? 'bg-green-100 text-green-800' :
                    school.compatibility === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {school.compatibility}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2 font-semibold">School</th>
                  <th className="text-left py-2 px-2 font-semibold">Type</th>
                  <th className="text-left py-2 px-2 font-semibold">Compatibility</th>
                  <th className="text-left py-2 px-2 font-semibold">March 27 Status</th>
                  <th className="text-left py-2 px-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {specialtySchools.map((school) => (
                  <tr key={school.name} className="border-b border-border/50">
                    <td className="py-3 px-2">
                      <div>
                        <span className="font-medium">{school.name}</span>
                        {school.highlight && (
                          <p className="text-xs text-green-600 font-medium mt-1">{school.highlight}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">{school.alignment}</p>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded capitalize">{school.type.replace('-', ' ')}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-xs px-2 py-1 rounded font-medium ${
                        school.compatibility === 'high' ? 'bg-green-100 text-green-800' :
                        school.compatibility === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {school.compatibility}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-xs ${school.march27Status.includes('HOLIDAY') ? 'text-green-600 font-medium' : 'text-muted-foreground'}`}>
                        {school.march27Status}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        school.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        school.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {school.status.replace('-', ' ')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Universities */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            University Partners
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {universities.map((uni) => (
              <div key={uni.abbreviation} className="border border-border rounded-lg p-4 bg-card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h5 className="font-bold text-foreground">{uni.abbreviation}</h5>
                    <p className="text-sm text-muted-foreground">{uni.name}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    uni.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    uni.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {uni.status.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-xs text-accent font-medium mb-3">{uni.role}</p>
                <div className="space-y-2">
                  {uni.departments.map((dept, idx) => (
                    <div key={idx} className="text-xs p-2 bg-muted/30 rounded">
                      <p className="font-medium text-foreground">{dept.name}</p>
                      <p className="text-muted-foreground">{dept.contact} • {dept.title}</p>
                      <p className="text-muted-foreground mt-1 italic">{dept.alignment}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-950/20 rounded text-xs">
                  <span className="font-medium text-blue-800 dark:text-blue-200">Transport:</span>
                  <p className="text-blue-700 dark:text-blue-300">{uni.transportationNotes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diploma Seals */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-lg">🎓</span>
            Diploma Seals (Marketing to Schools)
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Position the hackathon as a qualifying activity for these Virginia diploma seals to justify field trip approvals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diplomaSeals.map((seal, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h5 className="font-bold text-foreground">{seal.name}</h5>
                <div className="mt-2 space-y-2 text-xs">
                  <div>
                    <span className="font-medium text-muted-foreground">Requirement:</span>
                    <p className="text-foreground">{seal.requirement}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Hackathon Fit:</span>
                    <p className="text-foreground">{seal.hackathonFit}</p>
                  </div>
                  <div className="p-2 bg-accent/10 rounded">
                    <span className="font-medium text-accent">Action:</span>
                    <p className="text-foreground">{seal.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Checklist */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Compliance Checklist
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Required for mixing minors (K-12) with adults. Based on VCU "Safety and Protection of Minors" policy.
          </p>
          <div className="space-y-2">
            {complianceChecklist.map((item) => (
              <div 
                key={item.id}
                className={`flex items-start gap-3 p-3 rounded border ${
                  item.status === 'complete' ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' :
                  item.status === 'in-progress' ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800' :
                  'bg-card border-border'
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  item.status === 'complete' ? 'bg-green-500 text-white' :
                  item.status === 'in-progress' ? 'bg-blue-500 text-white' :
                  'bg-muted border-2 border-muted-foreground/30'
                }`}>
                  {item.status === 'complete' && <CheckCircle2 className="w-3 h-3" />}
                  {item.status === 'in-progress' && <Clock className="w-3 h-3" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-sm text-foreground">{item.requirement}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.details}</p>
                    </div>
                    <span className="text-xs bg-muted px-2 py-1 rounded">{item.category}</span>
                  </div>
                  {item.deadline && (
                    <p className="text-xs text-red-600 mt-1">Deadline: {item.deadline}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-3">Academia Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-foreground">{academiaStats.totalK12Districts}</p>
              <p className="text-xs text-muted-foreground">K-12 Districts</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{academiaStats.totalSpecialtySchools}</p>
              <p className="text-xs text-muted-foreground">Specialty Schools</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{academiaStats.totalUniversities}</p>
              <p className="text-xs text-muted-foreground">Universities</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-500">{academiaStats.criticalDeadlinesCount}</p>
              <p className="text-xs text-muted-foreground">Critical Deadlines</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">
                {academiaStats.complianceItemsComplete}/{academiaStats.complianceItemsTotal}
              </p>
              <p className="text-xs text-muted-foreground">Compliance Items</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

