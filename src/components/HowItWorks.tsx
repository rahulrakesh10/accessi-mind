import { Card } from "@/components/ui/card";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload content and let our AI pipeline transform it into accessible, personalized formats in minutes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">1. Ingest</h3>
            <p className="text-muted-foreground">Upload documents, images, audio, or videos from your device or cloud.</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">2. Understand</h3>
            <p className="text-muted-foreground">AI analyzes structure, media, and language to build a semantic map.</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">3. Deliver</h3>
            <p className="text-muted-foreground">Get text, audio, alt-descriptions, and translations tailored to your needs.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};