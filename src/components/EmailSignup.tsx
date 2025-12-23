import { useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const signupSchema = z.object({
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  first_name: z.string()
    .trim()
    .max(100, { message: "Name must be less than 100 characters" })
    .optional()
    .nullable(),
  interest: z.enum(['participant', 'team_lead', 'mentor', 'sponsor', 'volunteer', 'curious'])
    .optional()
    .nullable()
});

interface EmailSignupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EmailSignup = ({ open, onOpenChange }: EmailSignupProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [interest, setInterest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate input
      const validationResult = signupSchema.safeParse({
        email,
        first_name: firstName || null,
        interest: interest || null
      });

      if (!validationResult.success) {
        toast({
          title: "Invalid input",
          description: validationResult.error.errors[0].message,
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      const { data: validatedData } = validationResult;

      const { error } = await supabase
        .from('email_signups')
        .insert({
          email: validatedData.email,
          first_name: validatedData.first_name,
          interest: validatedData.interest,
        });

      if (error) {
        // Handle duplicate email error
        if (error.code === '23505') {
          toast({
            title: "Already Registered",
            description: "This email is already on our list. We'll keep you updated!",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error('Error saving email signup:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      
      // Reset after showing success
      if (isSuccess) {
        setTimeout(() => {
          setEmail("");
          setFirstName("");
          setInterest("");
          setIsSuccess(false);
          onOpenChange(false);
        }, 3000);
      }
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-lg mx-4 sm:mx-auto bg-card border-border shadow-elegant">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
              </div>
              <DialogTitle className="text-3xl font-bold text-center text-card-foreground">
                Stay Updated
              </DialogTitle>
              <DialogDescription className="text-base text-center text-muted-foreground">
                Registration opens January 2026. Be the first to know.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 mt-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold text-card-foreground">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base border-input bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-base font-semibold text-card-foreground">
                  First Name <span className="text-muted-foreground text-sm">(optional)</span>
                </Label>
                <Input
                  id="firstName"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 text-base border-input bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-base font-semibold text-card-foreground">
                  I'm interested as a: <span className="text-muted-foreground text-sm">(optional)</span>
                </Label>
                <Select value={interest} onValueChange={setInterest}>
                  <SelectTrigger className="h-12 text-base border-input bg-background">
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border z-50">
                    <SelectItem value="participant">Participant</SelectItem>
                    <SelectItem value="team_lead">Team Lead</SelectItem>
                    <SelectItem value="mentor">Mentor</SelectItem>
                    <SelectItem value="sponsor">Sponsor</SelectItem>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="curious">Just Curious</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg shadow-elegant hover:shadow-hover transition-smooth"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Count Me In"}
              </Button>

              <p className="text-xs text-muted-foreground text-center leading-relaxed px-2">
                We'll send you updates about registration, challenges, and event details. No spam, we promise.
              </p>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🎉 You're on the list!
            </h3>
            <p className="text-lg text-muted-foreground">
              We'll be in touch soon with updates about Hack for RVA 2026.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
