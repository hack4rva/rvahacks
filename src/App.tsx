import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Participate from "./pages/Participate";
import Partners from "./pages/Partners";
import ActionPlan from "./pages/ActionPlan";

import CodeOfConduct from "./pages/CodeOfConduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import Pitch from "./pages/Pitch";
import PitchNext from "./pages/PitchNext";
import Mission from "./pages/Mission";
import AIReadyPartnership from "./pages/AIReadyPartnership";
import Roadmap from "./pages/Roadmap";
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
          <Route path="/team" element={<Navigate to="/about#people" replace />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/pitch" element={<Pitch />} />
          <Route path="/pitch/next" element={<PitchNext />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/volunteers" element={<Navigate to="/partners#volunteers" replace />} />
          <Route path="/ai-ready-partnership" element={<AIReadyPartnership />} />
          <Route path="/roadmap" element={<Roadmap />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
