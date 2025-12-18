import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { EmailSignup } from "@/components/EmailSignup";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, CheckCircle2, XCircle, AlertTriangle, Mail, Scale, Github, FileCode } from "lucide-react";

const CodeOfConduct = () => {
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);

  const handleCTAClick = () => {
    setIsEmailSignupOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={handleCTAClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Code of Conduct
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Creating a safe, inclusive, and respectful environment for all Hack for RVA participants.
            </p>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-12 md:py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/30 shadow-elegant">
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Hack for RVA is a civic, inclusive, and professional environment.</strong> Participants come from diverse backgrounds—tech, government, nonprofits, academia, and the community—to work on solutions that serve the public interest.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  During this event, you may engage with <strong className="text-foreground">sensitive public-interest topics</strong> including housing instability, workforce barriers, health disparities, and systemic inequities. These conversations require respect, good faith, and a commitment to constructive dialogue.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By participating, you agree to maintain a professional atmosphere where everyone can contribute safely and effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Our Commitment</CardTitle>
                <CardDescription>Building an inclusive community for civic innovation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Hack for RVA is dedicated to providing a harassment-free experience for everyone, regardless of gender, 
                  gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, 
                  ethnicity, religion (or lack thereof), or technology choices.
                </p>
                <p>
                  We do not tolerate harassment of participants in any form. We expect all participants—attendees, sponsors, 
                  volunteers, organizers, and mentors—to abide by this Code of Conduct at all hackathon venues and 
                  hackathon-related social events.
                </p>
                <p>
                  This is a community event focused on civic innovation and positive change. We value the participation of 
                  each member and want everyone to have an enjoyable and fulfilling experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Behavior Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Expected Behavior</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              All participants are expected to:
            </p>
            
            <Card className="border-border shadow-elegant">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Be respectful and inclusive</strong>
                      <p className="text-muted-foreground mt-1">
                        Treat everyone with respect. Be considerate of differing viewpoints and experiences.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Communicate openly and thoughtfully</strong>
                      <p className="text-muted-foreground mt-1">
                        Share ideas constructively and be open to feedback. Avoid demeaning or discriminatory language.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Collaborate effectively</strong>
                      <p className="text-muted-foreground mt-1">
                        Work together in a spirit of cooperation. Value diverse contributions and perspectives.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Respect boundaries</strong>
                      <p className="text-muted-foreground mt-1">
                        Be mindful of personal space and comfort levels. Always ask before taking photos or recording.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Focus on civic impact</strong>
                      <p className="text-muted-foreground mt-1">
                        Keep the focus on creating positive solutions for Richmond and supporting each other's efforts.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unacceptable Behavior Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <XCircle className="w-8 h-8 text-destructive" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Unacceptable Behavior</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              The following behaviors are considered harassment and will not be tolerated:
            </p>
            
            <Card className="border-destructive/50 shadow-elegant">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Harassment and discrimination</strong>
                      <p className="text-muted-foreground mt-1">
                        Offensive comments related to gender, sexual orientation, disability, appearance, race, or religion.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Intimidation and threats</strong>
                      <p className="text-muted-foreground mt-1">
                        Deliberate intimidation, stalking, following, or threatening behavior toward any participant.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Inappropriate physical contact</strong>
                      <p className="text-muted-foreground mt-1">
                        Unwelcome physical contact or sexual attention of any kind.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Disruptive behavior</strong>
                      <p className="text-muted-foreground mt-1">
                        Sustained disruption of talks, events, or other participants' work.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Inappropriate imagery or language</strong>
                      <p className="text-muted-foreground mt-1">
                        Sexual or violent imagery, jokes, or language in any hackathon venue or communication channel.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Retaliation</strong>
                      <p className="text-muted-foreground mt-1">
                        Advocating for or encouraging any of the above behaviors, or retaliating against anyone who reports an incident.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Reporting Violations</h2>
            </div>
            
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <CardTitle>How to Report</CardTitle>
                <CardDescription>We take all reports seriously and will respond promptly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">During the Event</h3>
                  <p className="text-muted-foreground">
                    If you experience or witness unacceptable behavior, please report it immediately to any event organizer 
                    or volunteer. They will be wearing identification badges and are available throughout the venue.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Email Report</h3>
                  <p className="text-muted-foreground mb-3">
                    You can also report incidents via email at any time:
                  </p>
                  <a 
                    href="mailto:conduct@hackforrva.org"
                    className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-lg transition-smooth font-semibold"
                  >
                    <Mail className="w-5 h-5" />
                    conduct@hackforrva.org
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">What to Include</h3>
                  <p className="text-muted-foreground mb-2">When reporting, please include:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Your contact information (if you're comfortable providing it)</li>
                    <li>Names of any individuals involved</li>
                    <li>Description of what happened</li>
                    <li>Date, time, and location of the incident</li>
                    <li>Any witnesses or additional context</li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Confidentiality:</strong> All reports will be handled with discretion. 
                    We will protect the privacy of those who report incidents to the fullest extent possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enforcement Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Enforcement</CardTitle>
                <CardDescription>Consequences for Code of Conduct violations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="process">
                    <AccordionTrigger className="text-lg font-semibold">Investigation Process</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>
                        When a report is received, event organizers will:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Review the incident details thoroughly</li>
                        <li>Interview relevant parties and witnesses</li>
                        <li>Consult with other organizers as appropriate</li>
                        <li>Determine appropriate action based on the severity and context</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="consequences">
                    <AccordionTrigger className="text-lg font-semibold">Possible Consequences</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>
                        Depending on the severity of the violation, consequences may include:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Warning:</strong> A formal warning with expectations for future behavior</li>
                        <li><strong>Temporary Removal:</strong> Asked to leave the event temporarily</li>
                        <li><strong>Permanent Expulsion:</strong> Removed from the event with no refund</li>
                        <li><strong>Ban from Future Events:</strong> Prohibited from attending future Hack for RVA events</li>
                        <li><strong>Legal Action:</strong> In severe cases, authorities may be contacted</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="appeals">
                    <AccordionTrigger className="text-lg font-semibold">Appeals</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>
                        If you believe a decision was made in error, you may appeal by contacting conduct@hackforrva.org 
                        within 7 days of the decision. Appeals will be reviewed by a different set of organizers when possible.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-muted/30 rounded-lg p-4 mt-6">
                  <p className="text-sm text-muted-foreground">
                    Event organizers reserve the right to take any action deemed appropriate, including warning or expelling 
                    participants, with no refund. We prioritize the safety and comfort of all participants.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Source IP Policy Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Scale className="w-8 h-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Open Source IP Policy</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              All code created during Hack for RVA must be open source. This ensures solutions can be adopted by the city, nonprofits, and community organizations.
            </p>
            
            <Card className="border-border shadow-elegant mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  License Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">OSI-Approved License Required</strong>
                      <p className="text-sm text-muted-foreground">
                        All projects must use an OSI-approved open source license such as MIT, Apache 2.0, or GPL.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Participant Ownership</strong>
                      <p className="text-sm text-muted-foreground">
                        Teams retain ownership of their code. You created it—you own it.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">City License Grant</strong>
                      <p className="text-sm text-muted-foreground">
                        By participating, you grant the City of Richmond a non-exclusive, royalty-free, perpetual license to use, modify, and deploy your solution.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/30 shadow-elegant bg-accent/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <FileCode className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Why Open Source?</h3>
                    <p className="text-sm text-muted-foreground">
                      Open source prevents "abandonware"—projects that win prizes but never get used. The City can adopt and maintain solutions even if the original team moves on. This also allows other cities to benefit from Richmond's civic innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Recommended:</strong> We suggest MIT License for maximum flexibility. Include a LICENSE file in your GitHub repository.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Thank You
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              By participating in Hack for RVA, you agree to abide by this Code of Conduct and IP Policy. 
              Thank you for helping make this a welcoming, friendly event for everyone.
            </p>
            <p className="text-muted-foreground">
              Questions about this Code of Conduct? Contact us at{" "}
              <a 
                href="mailto:conduct@hackforrva.org" 
                className="text-accent hover:underline font-semibold"
              >
                conduct@hackforrva.org
              </a>
            </p>
          </div>
        </div>
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

export default CodeOfConduct;
