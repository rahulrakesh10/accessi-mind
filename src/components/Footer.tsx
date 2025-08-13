import { Brain, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
export const Footer = () => {
  const { toast } = useToast();
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">MindSight AI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming education through AI-powered accessibility, making learning inclusive for everyone.
            </p>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="MindSight AI on X">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="MindSight AI on GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="MindSight AI on LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <a href="mailto:hello@mindsight.ai" aria-label="Email MindSight AI">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#api" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "API docs coming soon", description: "We are preparing comprehensive API documentation." }); }}>API</a></li>
              <li><a href="#integrations" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "Integrations coming soon", description: "Connectors for LMS and storage providers are on the way." }); }}>Integrations</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#docs" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "Documentation coming soon", description: "Guides and API references will be published here." }); }}>Documentation</a></li>
              <li><a href="#guides" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "Guides coming soon", description: "Step-by-step tutorials are being crafted." }); }}>Guides</a></li>
              <li><a href="#support" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "Support portal coming soon", description: "We are setting up a help center and ticketing." }); }}>Support</a></li>
              <li><a href="#blog" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "Blog coming soon", description: "Product updates and accessibility insights incoming." }); }}>Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "About page coming soon", description: "Learn more about the MindSight AI mission soon." }); }}>About</a></li>
              <li><a href="#careers" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "Careers coming soon", description: "We're not hiring yet, but stay tuned!" }); }}>Careers</a></li>
              <li><a href="#privacy" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "Privacy policy coming soon", description: "Our commitment to data protection will be documented." }); }}>Privacy</a></li>
              <li><a href="#terms" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); toast({ title: "Terms coming soon", description: "Terms of service are being finalized." }); }}>Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 MindSight AI. All rights reserved. Built with accessibility and inclusion in mind.</p>
        </div>
      </div>
    </footer>
  );
};