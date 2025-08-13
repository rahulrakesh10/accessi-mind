import { Card } from "@/components/ui/card";

export const Accessibility = () => {
  return (
    <section id="accessibility" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Accessibility First</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Designed with WCAG principles: proper semantics, keyboard navigation, high-contrast, and screen reader support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Screen Reader Ready</h3>
            <p className="text-muted-foreground">Logical heading structure, alt text generation, and ARIA where necessary.</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Keyboard Friendly</h3>
            <p className="text-muted-foreground">Focus outlines, skip-to-content patterns, and trap-free dialogs.</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Customizable</h3>
            <p className="text-muted-foreground">Text-to-speech, contrast modes, and multi-language outputs.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};