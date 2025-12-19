import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Participate from "./pages/Participate";
import Partners from "./pages/Partners";
import ActionPlan from "./pages/ActionPlan";
import Team from "./pages/Team";
import CodeOfConduct from "./pages/CodeOfConduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import Pitch from "./pages/Pitch";
import PitchNext from "./pages/PitchNext";
import PillarAnalysis from "./pages/PillarAnalysis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/action-plan" element={<ActionPlan />} />
          <Route path="/team" element={<Team />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/pitch" element={<Pitch />} />
          <Route path="/pitch/next" element={<PitchNext />} />
          <Route path="/pillar-analysis" element={<PillarAnalysis />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
