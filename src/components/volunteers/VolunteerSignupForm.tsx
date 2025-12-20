import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, ChevronLeft, Check, User, Calendar, Briefcase, 
  Heart, Send, AlertCircle
} from "lucide-react";
import { 
  preEventRoles, 
  fridayRoles, 
  saturdaySiteRoles, 
  saturdayVirtualRoles, 
  sundayRoles, 
  supportRoles,
  type RoleCard
} from "@/data/volunteerRoles";

type FormStep = 'info' | 'availability' | 'roles' | 'skills' | 'review';

interface FormData {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  
  // Availability
  availablePreEvent: boolean;
  availableFriday: boolean;
  availableSaturday: boolean;
  availableSunday: boolean;
  preferVirtual: boolean;
  preferInPerson: boolean;
  
  // Roles
  selectedRoles: string[];
  
  // Skills & Notes
  skills: string[];
  experience: string;
  notes: string;
  
  // Agreement
  codeOfConduct: boolean;
  photoRelease: boolean;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organization: '',
  availablePreEvent: false,
  availableFriday: false,
  availableSaturday: false,
  availableSunday: false,
  preferVirtual: false,
  preferInPerson: false,
  selectedRoles: [],
  skills: [],
  experience: '',
  notes: '',
  codeOfConduct: false,
  photoRelease: false,
};

const skillOptions = [
  'Event Coordination',
  'Public Speaking',
  'AV/Technical',
  'Photography',
  'Graphic Design',
  'Social Media',
  'Customer Service',
  'First Aid/CPR',
  'Software Development',
  'UI/UX Design',
  'Data Analysis',
  'Project Management',
  'Teaching/Mentoring',
  'Hospitality/Catering',
  'ASL/Accessibility',
  'Spanish Speaker',
];

const steps: { id: FormStep; title: string; icon: React.ElementType }[] = [
  { id: 'info', title: 'Your Info', icon: User },
  { id: 'availability', title: 'Availability', icon: Calendar },
  { id: 'roles', title: 'Roles', icon: Briefcase },
  { id: 'skills', title: 'Skills', icon: Heart },
  { id: 'review', title: 'Review', icon: Check },
];

export const VolunteerSignupForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('info');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  const updateFormData = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[key];
        return newErrors;
      });
    }
  };

  const toggleRole = (roleId: string) => {
    const newRoles = formData.selectedRoles.includes(roleId)
      ? formData.selectedRoles.filter(id => id !== roleId)
      : [...formData.selectedRoles, roleId];
    updateFormData('selectedRoles', newRoles);
  };

  const toggleSkill = (skill: string) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill];
    updateFormData('skills', newSkills);
  };

  const validateStep = (step: FormStep): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 'info':
        if (!formData.firstName.trim()) newErrors.firstName = 'Required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Required';
        if (!formData.email.trim()) {
          newErrors.email = 'Required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email';
        }
        break;
      case 'availability':
        if (!formData.availablePreEvent && !formData.availableFriday && 
            !formData.availableSaturday && !formData.availableSunday) {
          newErrors.availability = 'Select at least one availability';
        }
        if (!formData.preferVirtual && !formData.preferInPerson) {
          newErrors.location = 'Select at least one location preference';
        }
        break;
      case 'roles':
        if (formData.selectedRoles.length === 0) {
          newErrors.roles = 'Select at least one role';
        }
        break;
      case 'review':
        if (!formData.codeOfConduct) {
          newErrors.codeOfConduct = 'You must agree to the Code of Conduct';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep(currentStep)) return;
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id);
    }
  };

  const goBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id);
    }
  };

  const handleSubmit = () => {
    if (!validateStep('review')) return;
    // TODO: Submit to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const getAvailableRoles = (): RoleCard[] => {
    let roles: RoleCard[] = [];
    if (formData.availablePreEvent) roles = [...roles, ...preEventRoles];
    if (formData.availableFriday) roles = [...roles, ...fridayRoles];
    if (formData.availableSaturday) {
      if (formData.preferVirtual) roles = [...roles, ...saturdayVirtualRoles];
      if (formData.preferInPerson) roles = [...roles, ...saturdaySiteRoles];
    }
    if (formData.availableSunday) roles = [...roles, ...sundayRoles];
    // Support roles work with any availability
    roles = [...roles, ...supportRoles];
    
    // Filter by location preference
    if (!formData.preferVirtual) {
      roles = roles.filter(r => r.location !== 'virtual');
    }
    if (!formData.preferInPerson) {
      roles = roles.filter(r => r.location === 'virtual');
    }
    
    // Remove duplicates
    return [...new Map(roles.map(r => [r.id, r])).values()];
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto border-green-500/30">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
          <p className="text-muted-foreground mb-4">
            Your volunteer application has been submitted. We'll be in touch soon with next steps.
          </p>
          <Button variant="outline" onClick={() => {
            setSubmitted(false);
            setFormData(initialFormData);
            setCurrentStep('info');
          }}>
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8 px-2">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isActive = step.id === currentStep;
          const isComplete = idx < currentStepIndex;
          
          return (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => idx < currentStepIndex && setCurrentStep(step.id)}
                disabled={idx > currentStepIndex}
                className={`flex flex-col items-center gap-1 transition-all ${
                  idx <= currentStepIndex ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isComplete ? 'bg-green-500 text-white' :
                  isActive ? 'bg-accent text-accent-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {isComplete ? <Check className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                </div>
                <span className={`text-xs hidden sm:block ${
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
              </button>
              {idx < steps.length - 1 && (
                <div className={`w-8 sm:w-16 h-0.5 mx-1 sm:mx-2 ${
                  idx < currentStepIndex ? 'bg-green-500' : 'bg-border'
                }`} />
              )}
            </div>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {currentStep === 'info' && 'Tell Us About Yourself'}
            {currentStep === 'availability' && 'When Are You Available?'}
            {currentStep === 'roles' && 'Select Your Roles'}
            {currentStep === 'skills' && 'Share Your Skills'}
            {currentStep === 'review' && 'Review & Submit'}
          </CardTitle>
          <CardDescription>
            {currentStep === 'info' && 'We need some basic information to get started.'}
            {currentStep === 'availability' && 'Let us know which days and times work for you.'}
            {currentStep === 'roles' && 'Choose the roles that interest you based on your availability.'}
            {currentStep === 'skills' && 'Help us match you to the right roles.'}
            {currentStep === 'review' && 'Make sure everything looks correct before submitting.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Step 1: Personal Info */}
          {currentStep === 'info' && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className={errors.firstName ? 'border-red-500' : ''}
                  />
                  {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    className={errors.lastName ? 'border-red-500' : ''}
                  />
                  {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="organization">Organization/Company (optional)</Label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => updateFormData('organization', e.target.value)}
                  placeholder="Where do you work or study?"
                />
              </div>
            </>
          )}

          {/* Step 2: Availability */}
          {currentStep === 'availability' && (
            <>
              <div>
                <Label className="text-base font-medium">When are you available? *</Label>
                <p className="text-sm text-muted-foreground mb-3">Select all that apply</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="preEvent"
                      checked={formData.availablePreEvent}
                      onCheckedChange={(checked) => updateFormData('availablePreEvent', !!checked)}
                    />
                    <Label htmlFor="preEvent" className="font-normal">
                      <span className="font-medium">Pre-Event</span> — 6-8 weeks before (flexible hours)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="friday"
                      checked={formData.availableFriday}
                      onCheckedChange={(checked) => updateFormData('availableFriday', !!checked)}
                    />
                    <Label htmlFor="friday" className="font-normal">
                      <span className="font-medium">Friday, March 27</span> — Kickoff at Science Museum
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="saturday"
                      checked={formData.availableSaturday}
                      onCheckedChange={(checked) => updateFormData('availableSaturday', !!checked)}
                    />
                    <Label htmlFor="saturday" className="font-normal">
                      <span className="font-medium">Saturday, March 28</span> — Hacking day (citywide)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="sunday"
                      checked={formData.availableSunday}
                      onCheckedChange={(checked) => updateFormData('availableSunday', !!checked)}
                    />
                    <Label htmlFor="sunday" className="font-normal">
                      <span className="font-medium">Sunday, March 29</span> — Finals & Awards at Science Museum
                    </Label>
                  </div>
                </div>
                {errors.availability && (
                  <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.availability}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <Label className="text-base font-medium">Location preference *</Label>
                <p className="text-sm text-muted-foreground mb-3">Where would you prefer to volunteer?</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="inPerson"
                      checked={formData.preferInPerson}
                      onCheckedChange={(checked) => updateFormData('preferInPerson', !!checked)}
                    />
                    <Label htmlFor="inPerson" className="font-normal">
                      In-person at venues
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="virtual"
                      checked={formData.preferVirtual}
                      onCheckedChange={(checked) => updateFormData('preferVirtual', !!checked)}
                    />
                    <Label htmlFor="virtual" className="font-normal">
                      Virtual/remote (Discord, Slack)
                    </Label>
                  </div>
                </div>
                {errors.location && (
                  <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.location}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Step 3: Role Selection */}
          {currentStep === 'roles' && (
            <>
              <div className="space-y-3">
                {getAvailableRoles().map((role) => {
                  const isSelected = formData.selectedRoles.includes(role.id);
                  const Icon = role.icon;
                  
                  return (
                    <button
                      key={role.id}
                      onClick={() => toggleRole(role.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        isSelected 
                          ? 'border-accent bg-accent/5' 
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-accent text-accent-foreground' : 'bg-muted'
                        }`}>
                          {isSelected ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-sm">{role.title}</p>
                          <p className="text-xs text-muted-foreground truncate">{role.commitment}</p>
                        </div>
                        <Badge variant="outline" className="text-xs shrink-0">
                          {role.quantity}
                        </Badge>
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.roles && (
                <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.roles}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                Selected: {formData.selectedRoles.length} role(s)
              </p>
            </>
          )}

          {/* Step 4: Skills */}
          {currentStep === 'skills' && (
            <>
              <div>
                <Label className="text-base font-medium">Relevant Skills</Label>
                <p className="text-sm text-muted-foreground mb-3">Select all that apply</p>
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map((skill) => {
                    const isSelected = formData.skills.includes(skill);
                    return (
                      <Badge
                        key={skill}
                        variant={isSelected ? "default" : "outline"}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/10'
                        }`}
                        onClick={() => toggleSkill(skill)}
                      >
                        {isSelected && <Check className="w-3 h-3 mr-1" />}
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </div>
              <div>
                <Label htmlFor="experience">Relevant Experience (optional)</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => updateFormData('experience', e.target.value)}
                  placeholder="Tell us about any relevant volunteer, work, or hackathon experience..."
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="notes">Anything else? (optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => updateFormData('notes', e.target.value)}
                  placeholder="Accessibility needs, scheduling constraints, or other notes..."
                  rows={2}
                />
              </div>
            </>
          )}

          {/* Step 5: Review */}
          {currentStep === 'review' && (
            <>
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Contact Information</h4>
                  <p className="text-sm text-muted-foreground">
                    {formData.firstName} {formData.lastName}<br />
                    {formData.email}<br />
                    {formData.phone && <>{formData.phone}<br /></>}
                    {formData.organization && formData.organization}
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Availability</h4>
                  <div className="flex flex-wrap gap-2">
                    {formData.availablePreEvent && <Badge variant="outline">Pre-Event</Badge>}
                    {formData.availableFriday && <Badge variant="outline">Friday</Badge>}
                    {formData.availableSaturday && <Badge variant="outline">Saturday</Badge>}
                    {formData.availableSunday && <Badge variant="outline">Sunday</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Prefers: {[
                      formData.preferInPerson && 'In-Person',
                      formData.preferVirtual && 'Virtual'
                    ].filter(Boolean).join(', ')}
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Selected Roles ({formData.selectedRoles.length})</h4>
                  <div className="flex flex-wrap gap-2">
                    {formData.selectedRoles.map(roleId => {
                      const role = getAvailableRoles().find(r => r.id === roleId);
                      return role ? (
                        <Badge key={roleId} variant="secondary">{role.title}</Badge>
                      ) : null;
                    })}
                  </div>
                </div>

                {formData.skills.length > 0 && (
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {formData.skills.map(skill => (
                        <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="codeOfConduct"
                    checked={formData.codeOfConduct}
                    onCheckedChange={(checked) => updateFormData('codeOfConduct', !!checked)}
                  />
                  <Label htmlFor="codeOfConduct" className="font-normal text-sm">
                    I agree to follow the <a href="/code-of-conduct" className="text-accent underline">Code of Conduct</a> *
                  </Label>
                </div>
                {errors.codeOfConduct && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.codeOfConduct}
                  </p>
                )}

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="photoRelease"
                    checked={formData.photoRelease}
                    onCheckedChange={(checked) => updateFormData('photoRelease', !!checked)}
                  />
                  <Label htmlFor="photoRelease" className="font-normal text-sm">
                    I consent to being photographed/recorded at the event (optional)
                  </Label>
                </div>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={goBack}
              disabled={currentStepIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            
            {currentStep === 'review' ? (
              <Button onClick={handleSubmit} className="bg-accent hover:bg-accent/90">
                <Send className="w-4 h-4 mr-1" />
                Submit Application
              </Button>
            ) : (
              <Button onClick={goNext}>
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

