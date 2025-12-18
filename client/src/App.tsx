import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import People from "@/pages/people";
import Equipment from "@/pages/equipment";
import Projects from "@/pages/projects";
import Publications from "@/pages/publications";
import Patents from "@/pages/patents";
import Gallery from "@/pages/gallery";
import About from "@/pages/about";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/people" component={People} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/projects" component={Projects} />
        <Route path="/publications" component={Publications} />
        <Route path="/patents" component={Patents} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
