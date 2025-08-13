import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, transparent plans for students, educators, and institutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-xl">Starter</h3>
            <p className="text-muted-foreground mb-4">For personal learning</p>
            <p className="text-3xl font-bold mb-6">Free</p>
            <Button variant="hero" className="w-full" onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}>Get Started</Button>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold text-xl">Pro</h3>
            <p className="text-muted-foreground mb-4">For power learners</p>
            <p className="text-3xl font-bold mb-6">$9/mo</p>
            <Button variant="accent" className="w-full" onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}>Start Free Trial</Button>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold text-xl">Team</h3>
            <p className="text-muted-foreground mb-4">For classrooms & teams</p>
            <p className="text-3xl font-bold mb-6">$49/mo</p>
            <Button variant="secondary" className="w-full" onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}>Contact Sales</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};