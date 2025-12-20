import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VolunteerSignupForm } from "./VolunteerSignupForm";
import { Users } from "lucide-react";

interface VolunteerSignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const VolunteerSignupModal = ({ open, onOpenChange }: VolunteerSignupModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-accent" />
            </div>
            <div>
              <DialogTitle>Volunteer Application</DialogTitle>
              <DialogDescription>
                Sign up to help make Hack for RVA a success
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-100px)]">
          <div className="p-6">
            <VolunteerSignupForm />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

