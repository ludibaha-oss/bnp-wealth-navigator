import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import Dashboard from "./pages/Dashboard";
import Diagnostic from "./pages/Diagnostic";
import Structuration from "./pages/Structuration";
import Investissement from "./pages/Investissement";
import Protection from "./pages/Protection";
import Transmission from "./pages/Transmission";
import Communaute from "./pages/Communaute";
import Documents from "./pages/Documents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background w-full flex">
          <Sidebar />
          <div className="flex-1 ml-72">
            <Header />
            <main className="mt-16">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/diagnostic" element={<Diagnostic />} />
                <Route path="/structuration" element={<Structuration />} />
                <Route path="/investissement" element={<Investissement />} />
                <Route path="/protection" element={<Protection />} />
                <Route path="/transmission" element={<Transmission />} />
                <Route path="/communaute" element={<Communaute />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;